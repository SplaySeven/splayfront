import React, { useState, useEffect, useMemo } from 'react';
import { ApolloProvider } from '@apollo/client';

import '../styles/globals.css';

import client from '../config/apollo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<ApolloProvider client={client}>
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
			</ApolloProvider>
		</React.Fragment>
	);
}

export default MyApp;
