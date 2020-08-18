import React from 'react';
import styled from 'styled-components';
import useAuth from '../hooks/useAuth';
import Layout from '../components/Layout';
import Navbar from '../components/organims/Navbar';

export default function wall() {
	const { auth } = useAuth();
	console.log(auth);
	return (
		<React.Fragment>
			<Navbar />
			<MensajeMuroStyle>Bienvendio al Muro en unos minutos vermos mas sobre esto feliz dia...</MensajeMuroStyle>
		</React.Fragment>
	);
}

//css

const MensajeMuroStyle = styled.h1`margin-top: 140px;`;
