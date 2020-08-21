import styled from 'styled-components';
import Navbar from '../components/organims/Navbar';

export default function wall() {
	return (
		<React.Fragment>
			<Navbar />
			<MensajeMuroStyle>
				Bienvendio al Muro en unos miasasanutos vermos mas sobre esto feliz dia...
			</MensajeMuroStyle>
		</React.Fragment>
	);
}

//css

const MensajeMuroStyle = styled.h1`margin-top: 140px;`;
