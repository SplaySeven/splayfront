import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Colores } from '../../../styles/Colores';
import useAuth from '../../../hooks/useAuth';

import LogoOficial from '../../atoms/LogoOficial';
import Login from '../../molecules/Login';

// Nav Var ya Logeado
import LogoCorto from '../../atoms/LogoCorto';
import Search from '../../molecules/Search';
import ToolNav from '../../molecules/ToolNav';
const index = () => {
	const { auth } = useAuth();

	const [ user, setUser ] = useState(undefined);

	useEffect(() => {
		setUser(auth);
	}, []);

	return (
		<React.Fragment>
			{user === null && (
				<NavbarStyled>
					<ContainerLogoStyled>
						<LogoOficial />
					</ContainerLogoStyled>
					<Login />
				</NavbarStyled>
			)}
			{user && (
				<NavbarStyled>
					<ContainerLogoCortoStyled>
						<LogoCorto />
					</ContainerLogoCortoStyled>
					<Search />
					<ToolNav />
				</NavbarStyled>
			)}
		</React.Fragment>
	);
};

export default index;

/*css*/

const NavbarStyled = styled.header`
	background: ${Colores.Primario};
	width: 100%;
	display: flex;
	position: fixed;
	height: 75px;
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

const ContainerLogoCortoStyled = styled.div`
	margin-left: 14%;
	width: 13%;
	margin-top: auto;
	margin-bottom: auto;
	text-align: right;
	align-items: right;
	top: 0;
`;
