import React from 'react';
import Layout from '../../components/Layout';

import HeaderUnregister from '../../components/organims/Navbar/HeaderUnregistered';
import Registro from '../../components/organims/Registro';
import Footer from '../../components/organims/Footer';
export default function index() {
	return (
		<Layout>
			<HeaderUnregister />
			<Registro />
			<Footer />
		</Layout>
	);
}
