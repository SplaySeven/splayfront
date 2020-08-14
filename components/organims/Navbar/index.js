import React from 'react';
import styled from 'styled-components';
import { Colores } from '../../../styles/Colores';

import LogoOficial from '../../atoms/LogoOficial';
import Login from '../../molecules/Login';

const index = () => {
	return (
		<NavbarStyled>
			<ContainerLogoStyled>
				<LogoOficial />
			</ContainerLogoStyled>
			<Login />
		</NavbarStyled>
	);
};

export default index;

/*css*/

const NavbarStyled = styled.header`
	background: ${Colores.Primario};
	width: 100%;
	display: flex;
	position: fixed;
	height: 12%;
	z-index: 100px;
	margin-top: auto;
	top: 0;
	right: 0;
`;
const ContainerLogoStyled = styled.div`
	margin-left: 5%;
	width: 30%;
	margin-top: auto;
	margin-bottom: auto;
	text-align: right;
	align-items: right;
	top: 0;
`;
