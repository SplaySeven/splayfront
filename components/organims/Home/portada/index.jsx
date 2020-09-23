import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import iconPostOn from '../../../../public/imagenes/icons/wall-profile/post-on.png';
import iconPhotovideoOn from '../../../../public/imagenes/icons/wall-profile/photovideo-on.png';
import iconLiveOn from '../../../../public/imagenes/icons/wall-profile/live-on.png';
import iconPlaceOn from '../../../../public/imagenes/icons/wall-profile/place-on.png';
import iconWallOff from '../../../../public/imagenes/icons/wall-profile/wall-off.png';
import iconwall from '../../../../public/imagenes/icons/wall-profile/Muro-Personal.png';
import AvatarM from '../../../../public/imagenes/AvatarMasculino.png';
import ModalUpload from '../../../organims/Modal/ModalUpload';

import { row, px0, pr0, col, Col3, Col6, colmd2, colmd3, colmd9, textcenter } from '../../../../styles/styles';

export default function index(props) {
	const { getUser } = props;
	const [ showModal, setShowModal ] = useState(false);
	return (
		<Encabezado>
			<Colmd9Aaa>
				<Link href="/wall/[wall]" as={`/wall/${getUser.id}`}>
					<a>
						<Colmd9Aaaimg />
						Muro Personal
					</a>
				</Link>
			</Colmd9Aaa>
			<Colmd9Aab>
				<Colmd9Aableft>
					<DivAvatar3>
						<Colmd9AableftImg getUser={getUser} />
					</DivAvatar3>
				</Colmd9Aableft>
				<Colmd9Aabcenter>
					<Colmd9AabcenterP onClick={() => setShowModal(true)}>¿ Que Piensas ?</Colmd9AabcenterP>
				</Colmd9Aabcenter>
				<Colmd9Aabright>
					<Colmd9AabrightImg />
				</Colmd9Aabright>
			</Colmd9Aab>
			<Colmd9Aac>
				<Colmd9Aac1 onClick={() => setShowModal(true)}>
					<IconPostOn />
					<A>Crear publicación</A>
				</Colmd9Aac1>
				<Lineseparator />
				<Colmd9Aac2 title="Foto/Video">
					<IconPhotovideoOn alt="Foto / Video" />
					<A>Foto / Video</A>
				</Colmd9Aac2>
				<Lineseparator />
				<Colmd9Aac3>
					<IconLiveOn />
					<A href="">Video en vivo</A>
				</Colmd9Aac3>
				<Lineseparator />
				<Colmd9Aac4>
					<IconPlaceOn />
					<A href="">Lugar o acontecimiento</A>
				</Colmd9Aac4>
			</Colmd9Aac>
			<ModalUpload show={showModal} setShow={setShowModal} />
		</Encabezado>
	);
}

const A = styled.a`
	font-weight: bold;
	@media (max-width: 768px) {
		display: none;
		font-size: 8px;
	}
`;

const Encabezado = styled.section`
	background: #00a79d;
	border: 2px solid white;
`;

const IconPostOn = styled.img.attrs({ src: iconPostOn })`
height: 30px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
`;

const IconPhotovideoOn = styled.img.attrs({ src: iconPhotovideoOn })`
height: 30px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
`;

const IconLiveOn = styled.img.attrs({ src: iconLiveOn })`
height: 30px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
`;

const IconPlaceOn = styled.img.attrs({ src: iconPlaceOn })`
height: 30px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
padding-left: 2px;
`;

const Colmd9Aac1 = styled.div`
	${col} color: #fff !important;
	text-align: center !important;
	padding-bottom: 1rem !important;
	padding-top: 1rem !important;
	:hover img {
		filter: brightness(0.33);
	}
	:hover {
		background: #fff;
		cursor: pointer;
		color: #595b61 !important;
	}
	padding-left: 0px !important;
	padding-right: 0px !important;
`;
const Lineseparator = styled.div`
	width: 2px;
	border: 1px solid #fff;
`;
const Colmd9Aac2 = styled(Colmd9Aac1)`
${col}
max-width: 180px;
`;
const Colmd9Aac3 = styled(Colmd9Aac1)`
${col}
max-width: 180px;
`;
const Colmd9Aac4 = styled(Colmd9Aac1)`
${col}
`;

const Colmd9Aac = styled.div`
	${row} border-bottom: 3px solid #6a6a6a;
	background: #00a79d;
	margin-left: 0 !important;
	margin-right: 0 !important;
`;

const Colmd9AabrightImg = styled.img.attrs({ src: iconWallOff })`
border-radius: 50%;
width: 100px;
vertical-align: middle;
border-style: none;
vertical-align: middle;
border-style: none;
@media (max-width: 768px) {
	width:65px;
	}

`;

const Colmd9AabcenterP = styled.div`
	border-left: 2px solid #ccc;
	color: #646363;
	padding-left: 1rem !important;
	padding-bottom: 1rem !important;
	padding-bottom: 1rem !important;
	font-size: 1.5rem;
	margin-bottom: .5rem;
	font-weight: 500;
	line-height: 1.2;
	margin-top: 0;
	:hover {
		filter: brightness(0.33);
		cursor: pointer;
	}
	@media (max-width: 768px) {
		font-size: 15px;
	}
`;

const Colmd9AableftImg = styled.img.attrs((props) => ({ src: props.getUser.avatar ? props.getUser.avatar : AvatarM }))`
border-radius: 50%;
width: 100px;
height:100px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
text-align: center !important;
@media (max-width: 768px) {
		width: 50px;
		height: 50px;
		text-align:left;
		
		
	}
`;

const Colmd9Aableft = styled.div`
	${Col3} text-align: center !important;
	margin-bottom: auto !important;
	margin-top: auto !important;
	box-sizing: border-box;
`;
const Colmd9Aabcenter = styled.div`
	${Col6} margin-bottom: auto !important;
	margin-top: auto !important;
`;
const Colmd9Aabright = styled.div`
	${Col3} text-align: center !important;
	margin-bottom: auto !important;
	margin-top: auto !important;
`;
const Colmd9Aab = styled.div`
	${row} background: #fff;
	height: 150px;
	border: 3px solid #6a6a6a;
	border-top-color: rgb(106, 106, 106);
	border-top-style: solid;
	border-top-width: 3px;
	border-top: initial;
	box-sizing: border-box;
`;

const DivAvatar3 = styled.div`
	background: url(/icons/wall-profile/border-photo-1.png);
	background-size: 110px 110px;
	background-repeat: no-repeat;
	background-position: center;
	padding: 12px;
	@media (max-width: 768px) {
		background-size: 60px 60px;
		text-align: left;
		padding: 8px;
	}
`;

const Colmd9Aaa = styled.div`
	background-color: #00a79d;
	color: #fff !important;
	text-align: center !important;
	font-size: 2rem;
	margin-bottom: .5rem;
	font-weight: 500;
	line-height: 1.2;
	box-sizing: border-box;
	margin-left: 31%;
	:hover {
		filter: brightness(0.33);
	}
	@media (max-width: 768px) {
		margin-left: 0%;
	}
`;
const Colmd9Aaaimg = styled.img.attrs({ src: iconwall })`
width: 50px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
@media (max-width: 768px) {
	    width:45px;
	
	}
`;

const Colmd3A = styled.div`${colmd3} ${px0} background: #00a79d;`;
const Colmd9A = styled.div`${colmd9} ${pr0};`;

const Colmd2A = styled.div`${colmd2} ${textcenter};`;
//// POST DE TIPO PHOTO
