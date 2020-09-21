import React from 'react';
import logolinkw from '../../../public/imagenes/logo-link-white.png';

import styled from 'styled-components';

const LogoStyled = styled.div`
	width: 100%;
	text-align: center;
	@media (max-width: 768px) {
		display: none;
	}
`;
const LogoSrcStyled = styled.img.attrs({ src: logolinkw })`
	height: 60px;
     
  padding:15px;
  
`;
export default function Logo1() {
	return (
		<LogoStyled>
			<LogoSrcStyled />
		</LogoStyled>
	);
}
