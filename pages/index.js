import React, { useState, useEffect, useMemo } from 'react';
import Layout from '../components/Layout';

import { getToken, decodeToken, removeToken } from '../utils/token';
import AuthContext from '../context/AuthContext';
// Compomentes

import Auth from '../pages/Auth';
import Wall from '../pages/wall2';

export default function index() {
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
		<Layout>
			<AuthContext.Provider value={authData}>
				{auth === null && <Auth />}
				{auth && <Wall />}
			</AuthContext.Provider>
		</Layout>
	);
}
