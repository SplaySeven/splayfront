import React from 'react';
import logoCorto from '../../../public/imagenes/Logo-inc.png';

import styled from 'styled-components';

export default function Logo1() {
	return (
		<LogoStyled>
			<LogoSrcStyled />
		</LogoStyled>
	);
}

//css

const LogoStyled = styled.div`width: 100%;`;
const LogoSrcStyled = styled.img.attrs({ src: logoCorto })`
	height: 50px;

	
	  

  
`;
