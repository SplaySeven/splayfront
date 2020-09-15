import React from 'react';

import styled from 'styled-components';

import Login from '../../molecules/Login';
import logofondo from '../../../public/imagenes/Logo-bg.png';

const SectionStyled = styled.main`
	background-image: url(${logofondo});
	background-repeat: no-repeat;
	background-size: 70%;
	background-position-y: bottom;
	background-color: #e6e7e9;
	width: 100%;
	height: 100%;
`;

const index = () => {
	return (
		<SectionStyled>
			<Login />
		</SectionStyled>
	);
};

export default index;
