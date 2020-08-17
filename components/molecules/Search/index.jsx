import React from 'react';
import styled from 'styled-components';
import Lupa from '../../../public/imagenes/busqueda.png';
export default function index() {
	return (
		<ContainerStyled>
			<InputSearchStyled type="search" id="search" placeholder="Búsqueda de redes y Amigos..." />
		</ContainerStyled>
	);
}

//Css

const ContainerStyled = styled.div`
	width: 28%;
	display: table-cell;
	vertical-align: middle;
	text-align: center;

	white-space: nowrap;
`;

const InputSearchStyled = styled.input`
	width: 90%;
	margin-top: 20px;
	height: 35px;
	background: #ffffff;
	display: block;
	margin-left: auto;
	margin-right: auto;

	font-size: 10pt;
	float: right;
	color: #63717f;
	padding-right: 45px;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	-webkit-input-placeholder {
		color: #65737e;
	}
	border-radius: 5px;
	img {
		position: absolute;
		left: 0;
		top: 0;
	}
`;
