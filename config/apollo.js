import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import fetch from 'node-fetch';
import { setContext } from 'apollo-link-context';

const httpLink = createUploadLink({
	uri: 'http://localhost:4000/graphql',
	fetch
});

const authLink = setContext((_, { headers }) => {
	//Leer el storage almacenado
	const token = localStorage.getItem('token');

	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ''
		}
	};
});

const client = new ApolloClient({
	connectToDevTools: true,
	ssrMode: !process.browser,
	cache: new InMemoryCache(),
	link: authLink.concat(httpLink)
});

export default client;
