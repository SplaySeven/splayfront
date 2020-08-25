import React from 'react';
import styled from 'styled-components';
import logo from '../../../public/imagenes/Logo-splay7.png';
const Index = () => {
	return <LogoSrcStyled />;
};

export default Index;

const LogoSrcStyled = styled.img.attrs({ src: logo })`
padding:10px;
width: 60%;
text-align:center;
align-items:center;
`;
