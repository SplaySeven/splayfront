import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useApolloClient } from '@apollo/client';
/*
import WallOrganism from '../components/organims/Wall';
import Layout from '../components/Layout';
*/

import { row, py3, container, colmd1 } from '../../../../pages/styles';
import LogoCorto from '../../../atoms/LogoCorto';
import Search from '../../../molecules/Search';
import Avatar from '../../../atoms/Avatar';
import Icons from '../../../atoms/IconsButon';

import imgFriends from '../../../../public/imagenes/friends-on.png';
import imginfo from '../../../../public/imagenes/info-on.png';
import imgNotifications from '../../../../public/imagenes/notifications-on.png';
import imgcerrar from '../../../../public/imagenes/closeWhite.png';

import useAuth from '../../../../hooks/useAuth';

const wall = () => {
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
			<Header>
				<ContainerHeader>
					<Row>
						<LogoCorto />
						<Search />
						<Colmd1>
							<Link href="/wall/[wall]" as={`/wall/${auth.id}`}>
								<a>
									<Avatar />
								</a>
							</Link>
						</Colmd1>
						<Colmd1>
							<DivName>
								<Name>{auth.name}</Name>
							</DivName>
						</Colmd1>
						<Colmd1>
							<DivBtn0>
								<Link href="/">
									<BtnInicio>Inicio</BtnInicio>
								</Link>
							</DivBtn0>
						</Colmd1>
						<Divbtncerrar>
							<DivBtn0>
								<BtnCerrar>
									<ImgCerrar onClick={onLogout} type="submit" /> Cerrar
								</BtnCerrar>
							</DivBtn0>
						</Divbtncerrar>
						<Divbtnsright>
							<Icons src={imgFriends} />
						</Divbtnsright>
						<Divbtnsright>
							<Icons src={imginfo} />
						</Divbtnsright>
						<Divbtnsright>
							<Icons src={imgNotifications} />
						</Divbtnsright>
					</Row>
				</ContainerHeader>
			</Header>
		</React.Fragment>
	);
};
export default wall;

//css

const Header = styled.div`
	box-sizing: border-box;
	${row} ${py3} background: #00a79d;
`;
const ContainerHeader = styled.div`
	box-sizing: border-box;
	${container} @media (min-width: 1200px) {
		max-width: 1220px;
	}
`;

const Row = styled.div`
	box-sizing: border-box;
	${row};
`;

const Colmd1 = styled.div`${colmd1};`;

const Divbtncerrar = styled.div`
	-ms-flex: 0 0 14%;
	flex: 0 0 auto;
	max-width: 14%;
	position: relative;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	box-sizing: border-box;
`;
const Divbtnsright = styled.div`
	flex: 0 0 6.333333%;
	flex: 0 0 6.333333%;
	max-width: 6.333333%;
	position: relative;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
`;
const DivBtn0 = styled.div`
	position: absolute;
	bottom: 10px;
	box-sizing: border-box;
`;

const DivName = styled.div`
	position: absolute;
	bottom: 0;
`;

const Name = styled.h1`
	color: #fff !important;
	font-size: 1.25rem;
	margin-bottom: .5rem;
	font-weight: 500;
	line-height: 1.2;
	margin-top: 0;
	box-sizing: border-box;
`;

const BtnInicio = styled.a`
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

const BtnCerrar = styled.a`
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
