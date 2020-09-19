import React from 'react';
import styled from 'styled-components';
import imgFriends from '../../../../../public/imagenes/friends-on.png';
import imginfo from '../../../../../public/imagenes/info-on.png';
import imgNotifications from '../../../../../public/imagenes/notifications-on.png';
import Icons from '../../../../atoms/IconsButon';
import imgcerrar from '../../../../../public/imagenes/closeWhite.png';
import useAuth from '../../../../../hooks/useAuth';
import { useRouter } from 'next/router';
import { useApolloClient } from '@apollo/client';

export default function index({ open }) {
	const { auth, logout } = useAuth();
	const router = useRouter();
	const client = useApolloClient();
	const onLogout = () => {
		client.clearStore();
		logout();
		router.push('/');
	};
	return (
		<React.Fragment>
			<Botones>
				<Container open={open}>
					<li>
						<BtnCerrar onClick={onLogout}>
							<ImgCerrar type="submit" /> Cerrar
						</BtnCerrar>
					</li>
					<li>
						<Icons src={imgFriends} />
					</li>
					<li>
						<Icons src={imginfo} />
					</li>
					<li>
						<Icons src={imgNotifications} />
					</li>
				</Container>
			</Botones>
		</React.Fragment>
	);
}

const Container = styled.ul`
	list-style: none;
	display: flex;
	padding: 0px;
	flex-flow: row nowrap;
	margin: 0px;
	@media (max-width: 768px) {
		flex-flow: column nowrap;
		background-color: #00a79d;
		position: fixed;
		transform: translateX(${({ open }) => (open ? '0' : '100%')});
		top: 0;
		right: 0;
		height: 50vh;
		width: 175px;
		padding-top: 3.5rem;
		border-right: 1px solid #fff;
	}
`;

const Botones = styled.div`
	font-size: 12px;
	font-weight: bold;
	text-align: center;
	color: white;

	li {
		width: 33%;
		padding: 18px 7px;
	}
`;

const BtnCerrar = styled.a`
	width: 60px;
	outline: none;
	border: 3px solid white;
	color: #fff;
	background-color: #00a79d;
	padding: 0px 20px;
	border-radius: 20px;
	margin: 2px 2px;
	box-sizing: content-box;
	display: inline-block;
	-webkit-text-decoration: none;
	text-decoration: none;
	white-space: normal;
	word-wrap: break-Word;
	text-align: center;
	cursor: pointer;
	:hover {
		background-color: #fff;
		color: #00a79d;
	}
`;
const ImgCerrar = styled.img.attrs({ src: imgcerrar })`
width: 20px;
vertical-align: middle;
border-style: none;
color: #fff;
white-space: normal;
word-wrap: break-Word;
text-align: center;
cursor: pointer;
`;
