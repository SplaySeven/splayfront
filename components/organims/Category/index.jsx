import React from 'react';
import styled from 'styled-components';
import logofondo from '../../../public/imagenes/Logo-bg.png';
import Categories from '../../molecules/Categories';
export default function index() {
	return (
		<SectionStyled>
			<Categories />
		</SectionStyled>
	);
}

//css aqui

const SectionStyled = styled.main`
	background-image: url(${logofondo});
	background-repeat: no-repeat;
	background-size: 50%;
	background-position-y: bottom;
	background-color: #e6e7e9;
	width: 100%;
	height: 100%;
`;
