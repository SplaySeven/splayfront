import React from 'react';
import styled from 'styled-components';
import iconPeopleknowOn from '../../../public/icons/wall-profile/people-know-on.png';
import iconprivateon from '../../../public/icons/wall-profile/private-on.png';
import iconciudadactual from '../../../public/icons/wall-profile/city-on.png';
import iconciudadactualOff from '../../../public/icons/wall-profile/city-off.png';
import iconlugardetrabajoOff from '../../../public/icons/wall-profile/work-off.png';
import iconlugardetrabajo from '../../../public/icons/wall-profile/work-on.png';
import iconschoolOff from '../../../public/icons/wall-profile/school-off.png';
import iconcityfromOff from '../../../public/icons/wall-profile/city-from-off.png';
import iconfeelingOff from '../../../public/icons/wall-profile/feeling-off.png';
import iconinterestOff from '../../../public/icons/wall-profile/interest-off.png';
import imgaddasfriend from '../../../public/icons/wall-profile/Invite-friend-on.png';
import imgFriends from '../../../public/icons/wall-profile/friends-on.png';
import iconborder from '../../../public/icons/wall-profile/border-photo-2.png';
import imgMarcos from '../../../public/imagenes/marcos.jpg';
import imgMiguel from '../../../public/imagenes/miguel.png';
import imgAlejandro from '../../../public/imagenes/bullon.png';
import iconMoreOn from '../../../public/icons/wall-profile/more-on.png';
import closeoff from '../../../public/icons/wall-profile/closeoff.png';
import iconCloseWhite from '../../../public/icons/wall-profile/closeWhite.png';
import iconwall from '../../../public/icons/wall-profile/wall-on.png';
import iconschool from '../../../public/icons/wall-profile/school-on.png';
import iconcityfrom from '../../../public/icons/wall-profile/city-from-on.png';
import iconfeeling from '../../../public/icons/wall-profile/feeling-on.png';
import iconinterest from '../../../public/icons/wall-profile/interest-on.png';
import walloff from '../../../public/icons/wall-profile/wall-off.png';
import { colmd3, px0 } from '../../../styles/styles';
export default function index(props) {
	const { userId } = props.userId;
	//console.log(userId);
	return (
		<React.Fragment>
			<Colmd3A>
				<DivoptA>
					<DivoptA1>
						<ImgoptA1 /> Presentación Personal
					</DivoptA1>
					<DivoptA2>
						<DivoptA2b>
							Agregar <br />informacion
						</DivoptA2b>
						<DivoptA2c>Opciones</DivoptA2c>
					</DivoptA2>
					<DivoptA3>
						<Iconprivateon /> Privacidad
					</DivoptA3>
				</DivoptA>
				<DivoptB>
					<DivoptB1>
						<IconciudadactualOff>
							<DivoptBimg1 />
						</IconciudadactualOff>{' '}
						Ciudad Actual
					</DivoptB1>
					<DivoptB1>
						<IconlugardetrabajoOff>
							<DivoptBimg2 />
						</IconlugardetrabajoOff>{' '}
						Lugar de trabajo
					</DivoptB1>
					<DivoptB1>
						<IconschoolOff>
							<DivoptBimg3 />
						</IconschoolOff>{' '}
						Escuela
					</DivoptB1>
					<DivoptB1>
						<IconcityfromOff>
							<DivoptBimg4 />
						</IconcityfromOff>{' '}
						Ciudad de Origen
					</DivoptB1>
					<DivoptB1>
						<IconfeelingOff>
							<DivoptBimg5 />
						</IconfeelingOff>{' '}
						Situación Sentimental
					</DivoptB1>
					<DivoptB1>
						<IconinterestOff>
							<DivoptBimg6 />
						</IconinterestOff>{' '}
						Interesés
					</DivoptB1>
				</DivoptB>
				<DivoptA>
					<DivoptA1>
						<ImgoptInvite /> Invita a tus Amigos
					</DivoptA1>
					<DivoptA2>
						<DivoptA2bs>
							Desde <br />Email
						</DivoptA2bs>
						<DivoptA2cs>
							Desde <br />Facebook
						</DivoptA2cs>
					</DivoptA2>
					<DivoptA1>
						<ImgoptA1t>
							<ImgoptA1 />
						</ImgoptA1t>
						<ImgoptA1t2>
							Personas que<br />quizás conozcas
						</ImgoptA1t2>
					</DivoptA1>
					<DivoptA1>
						<ImgFriends2 /> Amigos
					</DivoptA1>
					<DivoptA1>
						<ImgFriendBorder>
							<ImgFriend1 />
						</ImgFriendBorder>{' '}
						<FriendName>Marcos Rodriguez</FriendName>
					</DivoptA1>
					<DivoptA1>
						<ImgFriendBorder>
							<ImgFriend2 />
						</ImgFriendBorder>{' '}
						<FriendName>Miguel Nuñez</FriendName>
					</DivoptA1>
					<DivoptA1>
						<ImgFriendBorder>
							<ImgFriend3 />
						</ImgFriendBorder>{' '}
						<FriendName>Alejandro Bullón</FriendName>
					</DivoptA1>
					<DivoptA1>
						<IconMoreOn /> Todos mis Amigos
					</DivoptA1>
				</DivoptA>
				<DivoptC>
					<DivoptCd>
						<DivoptCo1>
							<DivoptCoimg />
						</DivoptCo1>
						<Divoptclose>Cerrar Sesión</Divoptclose>
					</DivoptCd>
					<DivoptCd2>
						<DivoptCo>
							<DivoptCoimg2 />
						</DivoptCo>
						<Divoptclose>Muro Social</Divoptclose>
					</DivoptCd2>
				</DivoptC>
			</Colmd3A>
		</React.Fragment>
	);
}
const DivoptCo = styled.div`
	float: left;
	width: 80px;
	padding-top: 10px;
	padding-left: 10px;
	border-right: 2px solid #fff;
	color: #fff !important;
	background: url(${walloff});
	background-size: 40px 40px;
	background-position: 10px 10px;
	background-repeat: no-repeat;
`;
const DivoptBimg1 = styled.img.attrs({ src: iconciudadactual })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
color: #fff !important;
`;

const DivoptBimg2 = styled.img.attrs({ src: iconlugardetrabajo })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
color: #fff !important;
`;
const DivoptBimg3 = styled.img.attrs({ src: iconschool })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
color: #fff !important;
`;

const DivoptBimg4 = styled.img.attrs({ src: iconcityfrom })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
color: #fff !important;
`;
const DivoptBimg5 = styled.img.attrs({ src: iconfeeling })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
color: #fff !important;
`;
const DivoptBimg6 = styled.img.attrs({ src: iconinterest })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
color: #fff !important;
`;

const Colmd3A = styled.div`${colmd3} ${px0} background: #00a79d;`;
const DivoptA = styled.div`box-sizing: border-box;`;
const DivoptA1 = styled.div`
	color: #fff !important;
	box-sizing: border-box;
	padding-left: 2rem !important;
	padding-right: 2rem !important;
	padding-top: 1rem !important;
	padding-bottom: 1rem !important;
	overflow: hidden;
`;
const ImgoptA1 = styled.img.attrs({ src: iconPeopleknowOn })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
`;
const DivoptA2 = styled.div`
	overflow: hidden;

	box-sizing: border-box;
	padding-left: 2.5rem !important;
	padding-right: 2.5rem !important;
	padding-bottom: 1rem !important;
	padding-top: 1rem !important;
`;
const DivoptA2b = styled.div`
	float: left;
	width: 50%;
	border-right: 2px solid #fff;
	color: #fff !important;
	box-sizing: border-box;
`;

const DivoptA2c = styled.div`
	float: left;
	width: 40%;
	padding-left: 10px;
	color: #fff !important;
	box-sizing: border-box;
	position: relative;
	top: 10px;
`;
const DivoptA3 = styled.div`
	color: #fff !important;
	box-sizing: border-box;
	padding-left: 1.5rem !important;
	padding-right: 1.5rem !important;
	padding-bottom: 1rem !important;
	padding-top: 1rem !important;
`;
const Iconprivateon = styled.img.attrs({ src: iconprivateon })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
`;
const DivoptB1 = styled.div`
	color: #fff !important;
	padding-left: 2rem !important;
	padding-right: 2rem !important;
	padding-top: 1rem;
	padding-bottom: 1rem;
	:hover img {
		opacity: 0;
	}
	:hover {
		color: #00a79d !important;
		cursor: pointer;
		background: #fff;
	}
`;
const DivoptB = styled.div`background: #595b61;`;
const IconciudadactualOff = styled.div`
	background: url(${iconciudadactualOff});
	background-size: 40px 40px;
	background-repeat: no-repeat;
	display: inline-block;
`;
const IconlugardetrabajoOff = styled.div`
	background: url(${iconlugardetrabajoOff});
	background-size: 40px 40px;
	background-repeat: no-repeat;
	display: inline-block;
`;
const IconschoolOff = styled.div`
	background: url(${iconschoolOff});
	background-size: 40px 40px;
	background-repeat: no-repeat;
	display: inline-block;
`;
const IconcityfromOff = styled.div`
	background: url(${iconcityfromOff});
	background-size: 40px 40px;
	background-repeat: no-repeat;
	display: inline-block;
`;
const IconfeelingOff = styled.div`
	background: url(${iconfeelingOff});
	background-size: 40px 40px;
	background-repeat: no-repeat;
	display: inline-block;
`;
const IconinterestOff = styled.div`
	background: url(${iconinterestOff});
	background-size: 40px 40px;
	background-repeat: no-repeat;
	display: inline-block;
`;

const ImgoptInvite = styled.img.attrs({ src: imgaddasfriend })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
`;
const DivoptA2bs = styled.div`
	float: left;
	width: 70px;
	border-right: 2px solid #fff;
	color: #fff !important;
	margin-right: 10px;
	box-sizing: border-box;
`;
const DivoptA2cs = styled.div`
	float: left;
	width: 40%;
	padding-left: 10px;
	color: #fff !important;
	box-sizing: border-box;
`;
const ImgoptA1t = styled.div`
	float: left;
	border-right: 2px solid #fff;
	padding-right: 20px;
`;
const ImgoptA1t2 = styled.div`
	float: left;
	padding-left: 20px;
`;
const ImgFriends2 = styled.img.attrs({ src: imgFriends })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
`;
const ImgFriendBorder = styled.div`
	background: url(${iconborder});
	background-size: 60px 60px;
	background-repeat: no-repeat;
	padding: 5px;
	float: left;
`;
const ImgFriend1 = styled.img.attrs({ src: imgMarcos })`
width: 50px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
border-radius: 50%;
`;
const ImgFriend2 = styled.img.attrs({ src: imgMiguel })`
width: 50px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
border-radius: 50%;
`;
const FriendName = styled.div`
	float: left;
	padding-top: 17px;
`;
const ImgFriend3 = styled.img.attrs({ src: imgAlejandro })`
width: 50px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
border-radius: 50%;
`;
const IconMoreOn = styled.img.attrs({ src: iconMoreOn })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
`;
const DivoptC = styled.div`background: #595b61;`;
const DivoptCd = styled.div`
	overflow: hidden;
	padding: 0px 10px;
	padding-left: 1.5rem !important;
	padding-right: 1.5rem !important;
	padding-top: 1rem;
	padding-bottom: 1rem;
	:hover {
		background: #fff;
		cursor: pointer;
	}
	:hover div {
		color: #595b61 !important;
	}
	:hover img {
		opacity: 0;
	}
	:hover div:first-child {
		border-right: 2px solid #717171;
	}
`;
const DivoptCd2 = styled(DivoptCd)`
overflow: hidden;
background: #00a79d;
`;
const DivoptCo1 = styled.div`
	float: left;
	width: 80px;
	padding-top: 10px;
	padding-left: 10px;
	border-right: 2px solid #fff;
	color: #fff !important;
	background: url(${closeoff});
	background-size: 40px 40px;
	background-position: 10px 10px;
	background-repeat: no-repeat;
`;
const DivoptCoimg = styled.img.attrs({ src: iconCloseWhite })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
`;

const DivoptCoimg2 = styled.img.attrs({ src: iconwall })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
`;
const Divoptclose = styled.div`
	float: left;
	padding-left: 15px;
	width: 90px;
	color: #fff;
`;
