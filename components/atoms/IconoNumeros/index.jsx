import IconoUno from '../../../public/imagenes/Icono1.png';

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
const LogoSrcStyled = styled.img.attrs((props) => ({ src: props.src || IconoUno }))`
	height: 50px;

  
`;
