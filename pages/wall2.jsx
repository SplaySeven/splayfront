import styled from 'styled-components';
import Navbar from '../components/organims/Navbar';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../gql/user';
export default function wall() {
	const { auth } = useAuth();

	return (
		<React.Fragment>
			<Navbar nombre={'hola'} />
			<MensajeMuroStyle>
				Bienvendio al Muro en unos miasasanutos vermos mas sobre esto feliz dia...
			</MensajeMuroStyle>
		</React.Fragment>
	);
}

//css

const MensajeMuroStyle = styled.h1`margin-top: 140px;`;
