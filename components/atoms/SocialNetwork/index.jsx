import React from 'react';
import Network from '../../../public/imagenes/redes.png';
import styled from 'styled-components';

export default function Logo1() {
	return (
		<LogoStyled>
			<LogoSrcStyled />
		</LogoStyled>
	);
}

const LogoStyled = styled.div`
	width: 75px;
	padding: 8px;
	text-align: center;
`;
const LogoSrcStyled = styled.img.attrs({ src: Network })`
	height: 60px;
  
  
`;
