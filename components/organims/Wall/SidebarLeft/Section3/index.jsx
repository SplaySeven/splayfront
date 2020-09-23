import React from 'react';
import styled from 'styled-components';
import imgaddasfriend from '../../../../../public/icons/wall-profile/Invite-friend-on.png';
export default function index() {
	return (
		<Section>
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
			</DivoptA>
		</Section>
	);
}

const Section = styled.section`
	text-align: left;
	height: 150px;
	background: #00a79d;
	@media (max-width: 768px) {
		display: none;
	}
`;

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
const DivoptA2 = styled.div`
	overflow: hidden;

	box-sizing: border-box;
	padding-left: 2.5rem !important;
	padding-right: 2.5rem !important;
	padding-bottom: 1rem !important;
	padding-top: 1rem !important;
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

const ImgoptInvite = styled.img.attrs({ src: imgaddasfriend })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
`;
