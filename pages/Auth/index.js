import React from 'react';
import Layout from '../../components/Layout';
import Navbar from '../../components/organims/Navbar';
import Registro from '../../components/organims/Registro';
import Footer from '../../components/organims/Footer';
export default function index() {
	return (
		<Layout>
			<Navbar />
			<Registro />
			<Footer />
		</Layout>
	);
}
