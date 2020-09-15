import React from 'react';
import styled from 'styled-components';

import Menu from '../../molecules/Menu';
import Logo1 from '../../atoms/Logo';
import LogoMarcaRegistrada from '../../atoms/LogoMarcaRegistrada';

const FooterStyled = styled.footer`
	width: 100%;
	background: #00a79d;
	text-align: center;
	color: write;
	margin-top: 0px;

	position: fixed;
	bottom: 0;
`;

const Footer1 = () => {
	return (
		<FooterStyled>
			<Logo1 />
			<Menu />
			<LogoMarcaRegistrada />
		</FooterStyled>
	);
};
export default Footer1;
