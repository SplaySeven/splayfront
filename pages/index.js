import React, { useState, useEffect, useMemo } from 'react';
import Layout from '../components/Layout';
import useAuth from '../hooks/useAuth';
// Compomentes

import Auth from '../pages/Auth';
import Wall from '../pages/wall';

export default function index() {
	const { auth } = useAuth();

	const [ user, setuser ] = useState(undefined);

	useEffect(() => {
		setuser(auth);
	}, []);

	return (
		<Layout>
			{auth === null && <h1>HOla autorizado</h1>}
			{auth && <Wall />}
		</Layout>
	);
}
