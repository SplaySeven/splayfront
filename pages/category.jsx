import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/organims/Navbar';
import Footer from '../components/organims/Footer';
import Category from '../components/organims/Category';
export default function category() {
	return (
		<Layout>
			<Navbar />
			<Category />
			<Footer />
		</Layout>
	);
}
