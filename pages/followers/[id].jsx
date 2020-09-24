import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Follow from '../../components/organims/Follow';
export default function index() {
	const router = useRouter();
	const userId = router.query.id;

	// Se pone F para saver que son Seguidores

	return (
		<React.Fragment>
			<Head>
				<title>Splay7</title>
			</Head>
			<Follow userId={userId} origen={'F'} />
		</React.Fragment>
	);
}
