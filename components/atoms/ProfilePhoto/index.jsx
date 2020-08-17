import ProfilePhoto from '../../../public/imagenes/PicturePerfil.png';

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
	width: 300px;
	padding: 0px 0px;
	text-align: center;
`;
const LogoSrcStyled = styled.img.attrs((props) => ({ src: props.src || ProfilePhoto }))`
	height: 250px;
	padding: 0px 0px;

  
`;
