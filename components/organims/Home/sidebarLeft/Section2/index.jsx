import React from 'react';
import styled from 'styled-components';
import iconPostOn from '../../../../../public/imagenes/icons/wall-profile/post-on.png';
import iconPhotovideoOn from '../../../../../public/imagenes/icons/wall-profile/photovideo-on.png';
import iconLiveOn from '../../../../../public/imagenes/icons/wall-profile/live-on.png';
import iconPlaceOn from '../../../../../public/imagenes/icons/wall-profile/place-on.png';

export default function index() {
	return (
		<React.Fragment>
			<Section>
				<DivoptA1>Selecciona el tipo de publicaciones que quieres ver en tu muro sicial.</DivoptA1>
				<DivoptA3>
					<DivIconPostOnbig>
						<IconPostOnbig />
					</DivIconPostOnbig>
					<DivoptA3text>Publicaciones</DivoptA3text>
					<DivoptA3check>
						<Checkfilter />
					</DivoptA3check>
				</DivoptA3>
				<DivoptA3>
					<DivIconPostOnbig>
						<IconPhotovideoOnBig />
					</DivIconPostOnbig>{' '}
					<DivoptA3text>Fotos</DivoptA3text>{' '}
					<DivoptA3check>
						<Checkfilter />
					</DivoptA3check>
				</DivoptA3>
				<DivoptA3>
					<DivIconPostOnbig>
						<IconLiveOnBig />
					</DivIconPostOnbig>{' '}
					<DivoptA3text>Videos</DivoptA3text>{' '}
					<DivoptA3check>
						<Checkfilter />
					</DivoptA3check>
				</DivoptA3>
				<DivoptA3>
					<DivIconPostOnbig>
						<IconPlaceOnBig />
					</DivIconPostOnbig>{' '}
					<DivoptA3text2>
						Lugares <br />Acontecimientos
					</DivoptA3text2>{' '}
					<DivoptA3check>
						<Checkfilter />
					</DivoptA3check>
				</DivoptA3>
				<DivoptA4>
					<BtnInicio>Aplicar</BtnInicio>
				</DivoptA4>
			</Section>
		</React.Fragment>
	);
}

const Section = styled.section`
	height: 345px;
	background-color: #00a79d;
	border-right: 15px solid #c4e0dd;
	@media (max-width: 768px) {
		display: none;
	}
`;

const DivoptA1 = styled.div`
	color: #fff !important;
	box-sizing: border-box;
	padding-left: 2rem !important;
	padding-right: 2rem !important;
	padding-top: 1rem !important;
	padding-bottom: 1rem !important;
	overflow: hidden;
	:hover {
		background: #fff;
		color: #595b61 !important;
		cursor: pointer;
	}
	:hover div:first-child {
		background: url(/icons/wall-profile/border-photo-1.png);
		background-size: 60px 60px;
		background-repeat: no-repeat;
		padding: 5px;
		float: left;
	}
`;

const DivoptA3 = styled.div`
	color: #fff !important;
	box-sizing: border-box;
	padding-left: 1.5rem !important;
	padding-right: 1.5rem !important;
	padding-bottom: 0.5rem !important;
	padding-top: 0.5rem !important;
	overflow: hidden;
`;
const DivIconPostOnbig = styled.div`
	float: left;
	border-right: 2px solid #fff;
	padding-right: 10px;
`;

const DivoptA3text = styled.div`
	float: left;
	padding-top: 7px;
	padding-left: 20px;
`;
const DivoptA3check = styled.div`
	float: right;
	padding-top: 7px;
`;

const Checkfilter = styled.input.attrs({ type: 'checkbox' })`
border: 0;
`;
const IconPostOnbig = styled.img.attrs({ src: iconPostOn })`
height:40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
`;

const IconPhotovideoOnBig = styled.img.attrs({ src: iconPhotovideoOn })`
height: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
`;

const IconLiveOnBig = styled.img.attrs({ src: iconLiveOn })`
height: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
`;

const IconPlaceOnBig = styled.img.attrs({ src: iconPlaceOn })`
height: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
padding-left: 2px;
`;

const DivoptA3text2 = styled.div`
	float: left;
	padding-left: 20px;
`;

const DivoptA4 = styled.div`
	color: #fff !important;
	box-sizing: border-box;
	padding-left: 1.5rem !important;
	padding-right: 1.5rem !important;
	padding-bottom: 0.5rem !important;
	padding-top: 0.5rem !important;
	text-align: right;
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
