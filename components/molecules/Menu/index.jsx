import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LineaStyled = styled.div`
	border-top: 3px #fff solid;
	padding-top: 10px;
	margin-left: 16%;
	margin-right: 16%;
	a {
		border: 3px solid white;
		color: #ffff;
		background-color: #00a79d;
		padding: 2px 10px;
		border-radius: 15px;
		margin: 2px 2px;

		height: 20px;
		box-sizing: content-box;
		display: inline-block;
		text-decoration: none;
		white-space: normal;
		word-wrap: break-Word;
		text-align: center;
	}
	a:hover {
		background: white;
		color: #808080;
		border: 3px solid #808080;
		/*cursor: pointer;*/
	}
	@media (max-width: 768px) {
		display: none;
	}
	@media (max-width: 576px) {
		a {
			display: none;
			width: 40%;
			background: blue;
			flex-flow: column nowrap;
			position: fixed;
		}
	}
	@media (min-width: 768px) {
		a {
			width: 20%;
		}
	}
	@media (min-width: 992px) {
		a {
			width: 12%;
		}
	}
`;
const LinkStyled = styled.a`
	border: 3px solid white;
	color: #ffff;
	background-color: #00a79d;
	padding: 2px 2px;
	border-radius: 15px;
	margin: 2px 2px;
	width: 12%;
	height: 20px;
	box-sizing: content-box;
	display: inline-block;
	text-decoration: none;
	white-space: normal;
	word-wrap: break-Word;
	text-align: center;
	:hover {
		background: white;
		color: #808080;
		border: 3px solid #808080;
		/*cursor: pointer;*/
	}
`;

const Menu = () => {
	return (
		<LineaStyled>
			<Link href="/login">
				<a>Iniciar Sesión</a>
			</Link>

			<Link href="/Registro">
				<a>Registrarse</a>
			</Link>

			<Link href="/publicidad">
				<a>Crear Anuncio</a>
			</Link>

			<Link href="/privacidad">
				<a>Privacidad</a>
			</Link>

			<Link href="/anuncios">
				<a>Anuncios</a>
			</Link>

			<Link href="/politica">
				<a>Politica</a>
			</Link>

			<Link href="/contactenos">
				<a>Contactenos</a>
			</Link>
		</LineaStyled>
	);
};

export default Menu;
