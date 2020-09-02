import React from 'react';
import styled from 'styled-components';
import { Colores } from '../../../../styles/Colores';
import LogoOficial from '../../../atoms/LogoOficial';
import Login from '../../../../components/molecules/Login';

export default function index() {
	return (
			<NavbarStyled>
				<Container1>
					<ContainerLogoStyled>
						<LogoOficial />
					</ContainerLogoStyled>
					<DivLogin>
						<Login />
					</DivLogin>
				</Container1>
			</NavbarStyled>
	);
}
const DivLogin = styled.div`
@media (min-width: 360px) {
	width: 100%;
}
@media (min-width: 768px) {
	width: 100%;
}

@media (min-width: 1200px) {
	width: 70%;
}
`
const Container = styled.div`
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;

	@media (min-width: 360px) {
		max-width: 720px;
	}
	@media (min-width: 768px) {
		max-width: 720px;
	}
	@media (min-width: 992px) {
		max-width: 1200px;
	}
	@media (min-width: 1200px) {
		max-width: 1140px;
	}
`
const Container1 = styled(Container)`
	display: flex;
	flex-direction: column;
	@media (min-width: 360px) {
		flex-direction: column;
	}
	@media (min-width: 768px) {
		flex-direction: column;
	}
	@media (min-width: 992px) {
		flex-direction: row;
	}
`
const NavbarStyled = styled.header`
	background: ${Colores.Primario};
	width: 100%;
	position: flex;
	/*flex-wrap: nowrap;*/
	height: auto;
	margin-top: auto;
	top: 0;
	right: 0;
	padding-top: 10px;
	padding-bottom: 10px;
`;
const ContainerLogoStyled = styled.div`
	
	margin-top: auto;
	margin-bottom: auto;
	text-align: left;
	align-items: right;
	@media (min-width: 360px) {
		width: 100%;
		text-align: center;
	}
	@media (min-width: 768px) {
		width: 100%;
		text-align: center;
	}
	@media (min-width: 992px) {
		text-align: left;
	}
	@media (min-width: 1200px) {
		width: 30%;
		
	}

`;
