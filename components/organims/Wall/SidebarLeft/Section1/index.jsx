import React from 'react';
import styled from 'styled-components';
import iconPeopleknowOn from '../../../../../public/icons/wall-profile/people-know-on.png';
import iconprivateon from '../../../../../public/icons/wall-profile/private-on.png';
export default function index() {
	return (
		<Section>
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
		</Section>
	);
}

const Section = styled.section`
	height: 200px;
	background: #00a79d;
	text-align: left;
	@media (max-width: 768px) {
		display: none;
	}
`;
const DivoptA = styled.div`box-sizing: border-box;`;
const ImgoptA1 = styled.img.attrs({ src: iconPeopleknowOn })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
`;
const DivoptA1 = styled.div`
	color: #fff !important;
	box-sizing: border-box;
	padding-left: 2rem !important;
	padding-right: 2rem !important;
	padding-top: 1rem !important;
	padding-bottom: 1rem !important;
	overflow: hidden;
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
