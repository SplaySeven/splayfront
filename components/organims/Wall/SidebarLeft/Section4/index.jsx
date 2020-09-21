import React from 'react';
import styled from 'styled-components';

import iconPeopleknowOn from '../../../../../public/icons/wall-profile/people-know-on.png';
import imgFriends from '../../../../../public/icons/wall-profile/friends-on.png';
import Friends from '../../../../molecules/SidebarLeftPerfil/Friends';
import iconMoreOn from '../../../../../public/icons/wall-profile/more-on.png';
export default function index(props) {
	const { userId } = props;
	return (
		<Section>
			<DivoptA>
				<DivoptA1>
					<ImgoptA1t>
						<ImgoptA1 />
					</ImgoptA1t>
					<ImgoptA1t2>
						<A>
							Personas que<br />quizás conozcas
						</A>
					</ImgoptA1t2>
				</DivoptA1>
				<DivoptA1>
					<ImgFriends2 /> Amigos
				</DivoptA1>
				<DivFriends>
					<Friends userId={userId} />
				</DivFriends>
			</DivoptA>
		</Section>
	);
}
const A = styled.a`display: none;`;
const DivFriends = styled.div`
	overflow: auto;
	::-webkit-scrollbar-thumb::horizontal {
		border-radius: 10px;
	}
	@media (max-width: 768px) {
		display: flex;
		margin-left: 50%;
		transform: translateX(-50%);

		::-webkit-scrollbar-thumb::horizontal {
			border-radius: 10px;
		}
	}
`;
const Section = styled.section`
	background: #00a79d;
	height: 400px;

	@media (max-width: 768px) {
		height: 100px;
		width: 100% !important;
	}
`;

const DivoptA = styled.div`
	box-sizing: border-box;
	@media (max-width: 768px) {
		width: 100% !important;
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
	@media (max-width: 768px) {
		padding: 0px !important;
		margin: 0px !important;
		width: 100% !important;
	}
`;

const DivoptA2bs = styled.div`
	float: left;
	width: 70px;
	border-right: 2px solid #fff;
	color: #fff !important;
	margin-right: 10px;
	box-sizing: border-box;
`;

const DivoptA2 = styled.div`
	overflow: hidden;

	box-sizing: border-box;
	padding-left: 2.5rem !important;
	padding-right: 2.5rem !important;
	padding-bottom: 1rem !important;
	padding-top: 1rem !important;
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
	@media (max-width: 768px) {
		display: none;
	}
`;

const ImgoptA1 = styled.img.attrs({ src: iconPeopleknowOn })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
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
@media (max-width: 768px) {
   width:20px;
   padding-bottom:10px;

}

`;
const IconMoreOn = styled.img.attrs({ src: iconMoreOn })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
`;
