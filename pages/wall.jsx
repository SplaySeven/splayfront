import React from 'react';
import styled from 'styled-components';
import useAuth from '../hooks/useAuth';
import Layout from '../components/Layout';
import Navbar from '../components/organims/Navbar';
export default function wall() {
	const User = useAuth();

	return (
		<React.Fragment>
			<Navbar />
			<MensajeMuroStyle>Bienvendio al Muro en unos minutotas vermos mas sobre esto feliz dia</MensajeMuroStyle>
		</React.Fragment>
	);
}

//css

const MensajeMuroStyle = styled.h1`margin-top: 140px;`;
