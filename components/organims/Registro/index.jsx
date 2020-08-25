import React from 'react';
import CuentaPersonal from '../../molecules/CuentaPersonal';
import styled from 'styled-components';
import CuentaEmpresarial from '../../molecules/CuentaEmpresarial';
import logofondo from '../../../public/imagenes/Logo-bg.png';

const SectionStyled = styled.main`
	background-image: url(${logofondo});
	background-repeat: no-repeat;
	background-size: 50%;
	background-position-y: bottom;
	background-color: #e6e7e9;
	width: 100%;
	height: 100%;
`;

const index = () => {
	return (
		<SectionStyled>
			<CuentaPersonal />
		</SectionStyled>
	);
};

export default index;
