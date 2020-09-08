import React from 'react';
import styled from 'styled-components';
import iconPeopleknowOn from '../../../../../public/imagenes/icons/wall-profile/people-know-on.png';

import iconMoreOn from '../../../../../public/imagenes/icons/wall-profile/more-on.png';
import NotFriend from '../NotFriends/NotFriend';
export default function index() {
	return (
		<React.Fragment>
			<DivoptA>
				<Divpeoplemayknow>
					<ImgoptA1t>
						<ImgoptA1 />
					</ImgoptA1t>
					<ImgoptA1t2>
						Personas que<br />quizás conozcas
					</ImgoptA1t2>
				</Divpeoplemayknow>
				<NotFriend />

				<Divseemore>
					<DivoptA1Icon>
						<IconMoreOn />
					</DivoptA1Icon>
					<FriendName2>Más Personas</FriendName2>
				</Divseemore>
			</DivoptA>
		</React.Fragment>
	);
}

const DivoptA = styled.div`box-sizing: border-box;`;

const Divpeoplemayknow = styled.div`
	color: #fff !important;
	box-sizing: border-box;
	padding-left: 2rem !important;
	padding-right: 2rem !important;
	padding-top: 1rem !important;
	padding-bottom: 1rem !important;
	overflow: hidden;
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
const ImgoptA1 = styled.img.attrs({ src: iconPeopleknowOn })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
`;

const FriendName = styled.div`
	float: left;
	padding-top: 17px;
`;
const FriendName2 = styled(FriendName)`
padding-top: 7px;
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

const Divseemore = styled(DivoptA1)`
:hover div:first-child {
    background: none;
    filter: brightness(0.33);
    padding: 0px;
} 
`;

const DivoptA1Icon = styled.div`float: left;`;

const IconMoreOn = styled.img.attrs({ src: iconMoreOn })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
`;
