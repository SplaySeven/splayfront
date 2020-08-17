import React from 'react';
import Noti from '../../../public/imagenes/notificaciones.png';
import styled from 'styled-components';

export default function Logo1() {
	return (
		<LogoStyled>
			<LogoSrcStyled />
		</LogoStyled>
	);
}

//css
const LogoStyled = styled.div`
	width: 75px;
	padding: 8px;
	text-align: center;
`;
const LogoSrcStyled = styled.img.attrs({ src: Noti })`
	height: 60px;
  
  
`;
