import React from 'react';
import logolinkw from '../../../public/imagenes/Logo-inc.png';
import { colmd2 } from '../../../styles/styles';
import styled from 'styled-components';

export default function Logo1() {
	return (
		<DivLogo>
			<LogoSrcStyled0>
				<LogoSrcStyled />
			</LogoSrcStyled0>
		</DivLogo>
	);
}

//css
const DivLogo = styled.div`
	box-sizing: border-box;
	${colmd2} flex: 0 0 13.666667%;
	max-width: 13.666667%;
	-ms-flex: 0 0 13.666667%;
`;

const LogoSrcStyled0 = styled.div`
	box-sizing: border-box;
	position: absolute;
	bottom: 0;
`;

const LogoSrcStyled = styled.img.attrs({ src: logolinkw })`
    box-sizing: border-box;
    width: 100%;
    vertical-align: middle;
    border-style: none;
`;
