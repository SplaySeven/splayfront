import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Navbar from '../../components/organims/Navbar';
import useAuth from '../../hooks/useAuth';
export default function index() {
	const User = useAuth();

	return (
		<Layout>
			<Navbar />
			<MensajeMuroStyle>Aqui esta el perfil de Carlos</MensajeMuroStyle>
		</Layout>
	);
}

const MensajeMuroStyle = styled.h1`margin-top: 140px;`;
