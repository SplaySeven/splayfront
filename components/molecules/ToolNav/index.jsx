import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Colores } from '../../../styles/Colores';
import Avatar from '../../atoms/Avatar';
import Button from '../../atoms/Button';
import SocialNetwork from '../../atoms/SocialNetwork';
import Information from '../../atoms/Information';
import Notifications from '../../atoms/Notifications';
import useAuth from '../../../hooks/useAuth';

//<Link href="/wall/[wall]" as={`/wall/${auth.id}`}></Link>
export default function index() {
	const { auth } = useAuth();

	console.log(auth);
	return (
		<React.Fragment>
			<Link href="/wall/[wall]" as={`/wall/${auth.id}`}>
				<a>
					<Avatar />
				</a>
			</Link>

			<LabelUsuarioStyled>Carlos</LabelUsuarioStyled>
			<InicarSescionStyled type="submit">Inicio</InicarSescionStyled>
			<BotonLargo type="submit">Creacion</BotonLargo>
			<Link href="/">
				<a>
					<SocialNetwork />
				</a>
			</Link>

			<Link href="/">
				<a>
					<Information />
				</a>
			</Link>
			<Link href="/">
				<a>
					{' '}
					<Notifications />
				</a>
			</Link>
		</React.Fragment>
	);
}

// aqui va el css

const LabelUsuarioStyled = styled.label`
	color: ${Colores.white_color};
	font-size: 20px;
	font-weight: bold;
	margin: 24px 6px;
`;

const InicarSescionStyled = styled.button`
	outline: none;

	border: 3px solid white;
	color: ${Colores.white_color};
	background-color: ${Colores.Primario};
	padding: 4px;
	height: 14px;
	border-radius: 15px;
	margin: 24px 6px;
	width: 50px;
	box-sizing: content-box;
	display: inline-block;
	text-decoration: none;
	white-space: normal;
	word-wrap: break-Word;
	text-align: center;
	cursor: pointer;
	:hover {
		background: white;
		color: ${Colores.grey_font};
		border: 3px solid ${Colores.grey_font};
	}
`;
const BotonLargo = styled(InicarSescionStyled)`
width: 59px;
`;
