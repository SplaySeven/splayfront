import React, { useState } from 'react';

import Link from 'next/link';
import styled from 'styled-components';
import { row, col, Col3, Col6, colmd5, colmd7, colmd9, pr0 } from '../../../../styles/styles';
import iconwall from '../../../../public/icons/wall-profile/wall-on.png';
import iconWallOff from '../../../../public/icons/wall-profile/wall-off.png';
import iconPostsOn from '../../../../public/icons/wall-profile/posts-on.png';
import iconPostOn from '../../../../public/icons/wall-profile/post-on.png';
import iconPhotovideoOn from '../../../../public/icons/wall-profile/photovideo-on.png';
import iconLiveOn from '../../../../public/icons/wall-profile/live-on.png';
import iconPlaceOn from '../../../../public/icons/wall-profile/place-on.png';

import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../../gql/user';
import AvatarM from '../../../../public/imagenes/AvatarMasculino.png';
import ModalUpload from '../../../organims/Modal/ModalUpload';
export default function index(props) {
	const [ showModal, setShowModal ] = useState(false);

	const { userId, origen } = props.userId.userId;

	const { data, loading, error } = useQuery(GET_USER, {
		variables: { id: userId }
	});
	if (loading || error) return null;
	const { getUser } = data;
	return (
		<Section>
			<Colmd9A>
				<Colmd9Aaa>
					<Link href="/">
						<A>
							<Colmd9Aaaimg />
							Muro Social
						</A>
					</Link>
				</Colmd9Aaa>
				<Colmd9Aab>
					<Colmd9Aableft>
						<div>
							<Colmd9AableftImg getUser={getUser} />
						</div>
					</Colmd9Aableft>

					<Colmd9Aabcenter>
						{origen === 'W' ? (
							<Colmd9AabcenterP origen={origen} onClick={() => setShowModal(true)}>
								<A>¿ Que Piensas ?</A>
							</Colmd9AabcenterP>
						) : (
							<Colmd9AabcenterP>
								<A>{getUser.name}</A>
							</Colmd9AabcenterP>
						)}
					</Colmd9Aabcenter>
					<Colmd9Aabright>
						<Colmd9AabrightImg />
					</Colmd9Aabright>
				</Colmd9Aab>
				<Colmd9Aac>
					<Colmd9Aac1 origen={origen} onClick={() => setShowModal(true)}>
						<IconPostOn />
						<A1>Crear publicación</A1>
					</Colmd9Aac1>
					<Lineseparator />
					<Colmd9Aac2 origen={origen}>
						<IconPhotovideoOn />
						<A1>Foto / Video</A1>
					</Colmd9Aac2>
					<Lineseparator />
					<Colmd9Aac3 origen={origen}>
						<IconLiveOn />
						<A1>Video en vivo</A1>
					</Colmd9Aac3>
					<Lineseparator />
					<Colmd9Aac4 origen={origen}>
						<IconPlaceOn />
						<A1>Lugar o acontecimiento</A1>
					</Colmd9Aac4>
				</Colmd9Aac>
				<Colmd9Aad>
					<Colmd9Aad1 origen={origen}>
						<Link href="/">
							<A>
								<IconPostsOn />
								Administración de Publicaciones
							</A>
						</Link>
					</Colmd9Aad1>
					<Colmd9Aad2>
						<Link href="/">
							<A>
								<IconWall /> Muro Social
							</A>
						</Link>
					</Colmd9Aad2>
				</Colmd9Aad>
				<hr />
			</Colmd9A>
			<ModalUpload show={showModal} setShow={setShowModal} />
		</Section>
	);
}

const A1 = styled.a`@media (max-width: 768px) {display: none;}`;

const A = styled.a`@media (max-width: 768px) {font-size: 15px;}`;
const Section = styled.section`
	background: #00a79d;
	border: 2px solid white;
`;

const IconWall = styled.img.attrs({ src: iconwall })`
height: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
@media (max-width: 768px) {
	height:20px;
}
`;
const IconPostsOn = styled.img.attrs({ src: iconPostsOn })`
height: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;

@media (max-width: 768px) {
	height:20px;
}
`;

const Colmd9Aac = styled.div`
	${row} border-bottom: 3px solid #6a6a6a;
	background: #00a79d;
	margin-left: 0 !important;
	margin-right: 0 !important;
`;
const Colmd9Aa = styled.div`
	background: #00a79d;
	height: 100px;
	padding-top: 1.5rem !important;
	margin-top: .5rem !important;
	box-sizing: border-box;
`;
const Colmd9A = styled.section`width: 100%;`;
const Colmd9Aad1 = styled.div`
	${(props) => (props.origen === 'F' ? `pointer-events: none` : `pointer-events: auto`)};
	${colmd7} color: #fff !important;
	text-align: center !important;
	padding-bottom: 1rem !important;
	padding-top: 1rem !important;

	:hover img {
		filter: brightness(0.33);
		cursor: pointer;
	}
	:hover {
		background: #fff;
		cursor: pointer;
		color: #595b61 !important;
	}
`;
const Colmd9Aad2 = styled.div`
	${colmd5} color: #fff !important;
	text-align: center !important;
	padding-bottom: 1rem !important;
	padding-top: 1rem !important;
	:hover img {
		filter: brightness(0.33);
		cursor: pointer;
	}
	:hover {
		background: #fff;
		cursor: pointer;
		color: #595b61 !important;
	}
`;
const Colmd9Aac1 = styled.div`
	${(props) => (props.origen === 'F' ? `pointer-events: none` : `pointer-events: auto`)};
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

const Colmd9Aaaimg = styled.img.attrs({ src: iconwall })`
width: 50px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;


@media (max-width: 768px) {
width:25px


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
	:hover {
		filter: brightness(0.33);
	}
	margin-left: 31%;
	@media (max-width: 768px) {
		margin-left: 0%;
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
height:50px;
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

const Colmd9AabcenterP = styled.p`
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
const Colmd9AabrightImg = styled.img.attrs({ src: iconWallOff })`
border-radius: 50%;
width: 100px;
vertical-align: middle;
border-style: none;
vertical-align: middle;
border-style: none;
@media (max-width: 768px) {
	width:50px;
}

`;

const IconPostOn = styled.img.attrs({ src: iconPostOn })`
height: 30px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
`;
const Lineseparator = styled.div`
	width: 2px;
	border: 1px solid #fff;
`;

const Colmd9Aac2 = styled(Colmd9Aac1)`
${col}
${(props) => (props.origen === 'F' ? `pointer-events: none` : `pointer-events: auto`)};
max-width: 180px;
`;
const Colmd9Aac3 = styled(Colmd9Aac1)`
${col}
max-width: 180px;
`;
const Colmd9Aac4 = styled(Colmd9Aac1)`
${(props) => (props.origen === 'F' ? `pointer-events: none` : `pointer-events: auto`)};
${col}
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

const Colmd9Aad = styled.div`
	${row} background: #00a79d;
	margin-top: .5rem !important;
	margin-left: 0 !important;
	margin-right: 0 !important;
`;
