import React, { useState, useEffect, useMemo } from 'react';
import Layout from '../components/Layout';
import useAuth from '../hooks/useAuth';
// Compomentes

import Auth from '../pages/Auth';
import Wall from '../pages/wall';

export default function index() {
	const { auth } = useAuth();

	useEffect(() => {
		setuser(auth);
	}, []);

	return (
		<Layout>
			{auth === null && <Auth />}
			{auth && <Wall id={auth.id} />}
		</Layout>
	);
}
