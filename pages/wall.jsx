import styled from 'styled-components';

import HeaderLogged from '../components/organims/Navbar/HeaderLogged';

export default function wall() {
	return (
		<React.Fragment>
			<HeaderLogged />
			<MensajeMuroStyle>Bienvenido al Muro de Splay pronto en Produccion feliz dia...</MensajeMuroStyle>
		</React.Fragment>
	);
}

//css

const MensajeMuroStyle = styled.h1`margin-top: 140px;`;
