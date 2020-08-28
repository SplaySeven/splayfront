import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<Head>
				<title>Splay7</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			{children}
		</React.Fragment>
	);
};

export default Layout;
