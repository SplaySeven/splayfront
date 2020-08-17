import React from 'react';
import AvatarF from '../../../public/imagenes/AvatarFemenino.png';
import AvatarM from '../../../public/imagenes/AvatarMasculino.png';

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
const LogoSrcStyled = styled.img.attrs({ src: AvatarM })`
	height: 60px;

  
`;
