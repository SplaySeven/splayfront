import React, { useState, useEffect, useMemo } from 'react';
import { ApolloProvider } from '@apollo/client';
import { getToken, decodeToken, removeToken } from '../utils/token';
import AuthContext from '../context/AuthContext';
import 'semantic-ui-css/semantic.min.css';
//import '../styles/globals.css';
//import './styles.css';

import client from '../config/apollo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
	const [ auth, setAuth ] = useState(undefined);

	useEffect(() => {
		const token = getToken();
		if (!token) {
			setAuth(null);
		} else {
			setAuth(decodeToken(token));
		}
	}, []);

	const logout = () => {
		removeToken();
		setAuth(null);
	};

	const setUser = (user) => {
		setAuth(user);
		setAuth(decodeToken(user));
	};

	const authData = useMemo(
		() => ({
			auth,
			logout,
			setUser
		}),
		[ auth ]
	);

	if (auth === undefined) return null;
	return (
		<React.Fragment>
			<ApolloProvider client={client}>
				<AuthContext.Provider value={authData}>
					<ToastContainer
						position="top-right"
						autoClose={5000}
						hideProgressBar
						newestOnTop
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>

					<Component {...pageProps} />
				</AuthContext.Provider>
			</ApolloProvider>
		</React.Fragment>
	);
}

export default MyApp;
