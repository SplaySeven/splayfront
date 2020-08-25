import React from 'react';
import styled from 'styled-components';
const index = () => {
	return (
		<ContainerCuentaEmpresarialStyled>
			<h1>Estamos desde Cuenta Empresarial</h1>
		</ContainerCuentaEmpresarialStyled>
	);
};

export default index;

const ContainerCuentaEmpresarialStyled = styled.div`
	background-color: red;
	height: 150px;
`;
