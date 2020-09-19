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
	${colmd2}
	flex: 0 0 15.666667%;
	box-sizing: border-box;
	max-width: 15.666667%;
	-ms-flex: 0 0 15.666667%;
	@media(max-width: 768px)
	{
		flex: 0 0 50.666667%;
		max-width: 50.666667%;
		-ms-flex: 0 0 50.666667%;
	}
`;

const LogoSrcStyled0 = styled.div`
	box-sizing: border-box;
	/*position: absolute;
	bottom: 0;*/
`;

const LogoSrcStyled = styled.img.attrs({ src: logolinkw })`
    box-sizing: border-box;
    
    vertical-align: middle;
	border-style: none;
	max-height: 38px;
`;