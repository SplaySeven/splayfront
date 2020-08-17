import React, { useState, useEffect, useMemo } from 'react';
import { ApolloProvider } from '@apollo/client';
import { getToken, setToken, decodeToken } from '../utils/token';
import AuthContext from '../context/AuthContext';
import '../styles/globals.css';

import client from '../config/apollo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const [ auth, setauth ] = useState(undefined);
	useEffect(() => {
		const token = getToken();
		if (!token) {
			setauth(null);
		} else {
			setauth(decodeToken(token));
		}
	}, []);

	const logout = () => {
		console.log('cerrar sesion');
	};

	const setUser = (user) => {
		setauth(user);
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
