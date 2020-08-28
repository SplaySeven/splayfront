import React, { useState, useEffect, useMemo } from 'react';
import Layout from '../components/Layout';
import HeaderLogged from '../components/organims/Navbar/HeaderLogged';
import Footer from '../components/organims/Footer';
import Category from '../components/organims/Category';

import { getToken, decodeToken, removeToken } from '../utils/token';
import AuthContext from '../context/AuthContext';
export default function category() {
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
				<HeaderLogged />
				<Category />
				<Footer />
			</AuthContext.Provider>
		</Layout>
	);
}
