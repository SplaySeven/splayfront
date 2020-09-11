import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useApolloClient } from '@apollo/client';
/*
import WallOrganism from '../components/organims/Wall';
import Layout from '../components/Layout';
*/

import { row, py3, container, colmd1 } from '../../../../styles/styles';
import LogoCorto from '../../../atoms/LogoCorto';
import Search from '../../../molecules/Search';
import Avatar from '../../../atoms/Avatar';
import Icons from '../../../atoms/IconsButon';

import imgFriends from '../../../../public/imagenes/friends-on.png';
import imginfo from '../../../../public/imagenes/info-on.png';
import imgNotifications from '../../../../public/imagenes/notifications-on.png';
import imgcerrar from '../../../../public/imagenes/closeWhite.png';

import useAuth from '../../../../hooks/useAuth';

const index = () => {
	const { auth, logout } = useAuth();
	const router = useRouter();
	const client = useApolloClient();
	const onLogout = () => {
		client.clearStore();
		logout();
		router.push('/');
	};

	const forMobile = (e) => {
		const w = window.innerWidth
		
		if (w < 769)
		{
			e.preventDefault();
			
			//prueba();
		}
	}

	return (
		<React.Fragment>
			<Header>
				<ContainerHeader>
					<Row style={{ position:'relative' }}>
						<LogoCorto />
						<SecondGroup>
							<SecondGroup1>
								<Search />
								<DivForAvatar>
									<Link href="/wall/[wall]" as={`/wall/${auth.id}`}>
										<a onClick={forMobile}>
											<Avatar />
										</a>
									</Link>
								</DivForAvatar>
							</SecondGroup1>
						</SecondGroup>
						<ThirdGroup>
							<DivName>
								<Name>{auth.name}</Name>
							</DivName>
						</ThirdGroup>
						<ForthGroup>
							<ForthGroupRow>
								<ForthGroup1>
									<DivBtn0>
										<Link href="/">
											<BtnInicio>Inicio</BtnInicio>
										</Link>
									</DivBtn0>
								</ForthGroup1>
								<Divbtncerrar>
									<DivBtn0>
										<BtnCerrar onClick={onLogout}>
											<ImgCerrar type="submit" /> Cerrar
										</BtnCerrar>
									</DivBtn0>
								</Divbtncerrar>
							</ForthGroupRow>
						</ForthGroup>
						<FifthGroup>
							<FifthGroup1>
								<Divbtnsright>
									<Icons src={imgFriends} />
								</Divbtnsright>
								<Divbtnsright>
									<Icons src={imginfo} />
								</Divbtnsright>
								<Divbtnsright>
									<Icons src={imgNotifications} />
								</Divbtnsright>
							</FifthGroup1>
						</FifthGroup>
					</Row>
				</ContainerHeader>
			</Header>
		</React.Fragment>
	);
};
export default index;

const ForthGroup1 = styled.div`
-ms-flex: 0 0 41.666667%;
flex: 0 0 41.666667%;
max-width: 41.666667%;
`
const ForthGroupRow = styled.div`
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
`
const ForthGroup = styled.div`
display:none;
-ms-flex: 0 0 20.666667%;
flex: 0 0 20.666667%;
max-width: 20.666667%;
@media(max-width: 768px) {
	display:none;
}
` 

const DivForAvatar = styled.div`
-ms-flex: 0 0 16.666667%;
flex: 0 0 16.666667%;
max-width: 16.666667%;
position: relative;
@media(max-width: 768px)
{
	-ms-flex: 0 0 16.666667%;
	flex: 0 0 16.666667%;
	max-width: 16.666667%;
}
a {
	position: absolute;
	bottom: -5px;
	right: 0;
}
`
const SecondGroup = styled.div`
	-ms-flex: 0 0 41.666667%;
	flex: 0 0 41.666667%;
	max-width: 41.666667%;

	@media(max-width: 768px) {
		-ms-flex: 0 0 100%;
		flex: 0 0 100%;
		max-width: 100%;
		position: relative;
	}
`
const SecondGroup1 = styled.div`
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
@media(max-width:768px)
{
	margin-top: 20px;
}
`
const ThirdGroup = styled.div`
	display: initial;
	-ms-flex: 0 0 10.666667%;
	-webkit-flex: 0 0 10.666667%;
	-ms-flex: 0 0 10.666667%;
	flex: 0 0 10.666667%;
	max-width: 10.666667%;
	@media(max-width: 768px)
	{
		display:none;
	}
`

const FifthGroup1 = styled.div`
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
`
const FifthGroup = styled.div`
position: absolute;
right: 0;
-ms-flex: 0 0 20%;
flex: 0 0 20%;
max-width: 20%;
@media(max-width: 768px)
{
	-ms-flex: 0 0 41.666667%;
	flex: 0 0 41.666667%;
	max-width: 41.666667%;
}
`

const Header = styled.div`
	box-sizing: border-box;
	${row} ${py3} background: #00a79d;
`;
const ContainerHeader = styled.div`
	box-sizing: border-box;
	${container}
	min-width: initial !important;
	@media (min-width: 1200px) {
		max-width: 1220px;
	}
`;

const Row = styled.div`
	box-sizing: border-box;
	${row};
`;

const Colmd1 = styled.div`
${colmd1};
	/*
	@media (min-width: 576px)
	{
		display: none;
	}
	@media (min-width: 768px)
	{
		display: none;
	}
	@media (min-width: 992px)
	{
		display: none;
	}
	*/
	
`;

const Divbtncerrar = styled.div`
	-ms-flex: 0 0 58.333333%;
	flex: 0 0 58.333333%;
	max-width: 58.333333%;
`;
const Divbtnsright = styled.div`
	flex: 0 0 33.333333%;
	flex: 0 0 33.333333%;
	max-width: 33.333333%;
	position: relative;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	@media(max-width: 768px)
	{
		padding-right: 0px;
	}
`;
const DivBtn0 = styled.div`
	/*
	position: absolute;
	bottom: 10px;
	box-sizing: border-box;
	*/  
`;

const DivName = styled.div`
	position: absolute;
	top: 7px;
	padding-left: 10px;
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
	:hover img {
		filter: brightness(0.33);
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
