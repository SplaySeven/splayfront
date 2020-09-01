import React from 'react';
import styled from 'styled-components';

export default function index(props) {
	const { getUser } = props;
	return (
		<React.Fragment>
			<Divavatar2>
				<DivphotoProfile2>
					<ImgProfile getUser={getUser} />
				</DivphotoProfile2>
				<Name2>{getUser.name}</Name2>
			</Divavatar2>
		</React.Fragment>
	);
}
const Divavatar2 = styled.div`
	color: #fff !important;
	box-sizing: border-box;
	padding-left: 2rem !important;
	padding-right: 2rem !important;
	padding-top: 3rem !important;
	padding-bottom: 1rem !important;
	overflow: hidden;
	text-align: center;
	background: #c4e0dd;
`;

const DivphotoProfile2 = styled.div`
	height: 150px;
	width: 150px;
	background: url(/icons/wall-profile/border-photo-1.png);
	background-repeat: repeat;
	background-size: auto;
	background-repeat: no-repeat;
	background-size: 150px 150px;
	padding: 6px;

	box-sizing: border-box;
	margin-left: auto;
	margin-right: auto;
`;

const ImgProfile = styled.img.attrs((props) => ({ src: props.getUser.avatar ? props.getUser.avatar : AvatarM }))`
box-sizing: border-box;
vertical-align: middle;
border-style: none;
border-radius: 50%;
width:100%;
height:100%;

`;

const Name2 = styled.h2`
	color: #606062 !important;
	font-size: 1.7rem;
	margin-bottom: .5rem;
	font-weight: 500;
	line-height: 1.2;
	margin-top: 10;
	box-sizing: border-box;
	text-align: center;
`;
