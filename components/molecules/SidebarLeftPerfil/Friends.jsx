import React from 'react';
import styled from 'styled-components';
import { size, map } from 'lodash';
import AvatarM from '../../../public/imagenes/AvatarMasculino.png';
import iconborder from '../../../public/icons/wall-profile/border-photo-2.png';
import imgMarcos from '../../../public/imagenes/marcos.jpg';
import imgMiguel from '../../../public/imagenes/miguel.png';
import imgAlejandro from '../../../public/imagenes/bullon.png';
import { useQuery } from '@apollo/client';
import { GET_FRIENDS } from '../../../gql/friend';
export default function Friends(props) {
	const { userId } = props;

	const { data, loading } = useQuery(GET_FRIENDS, {
		variables: { id: userId }
	});
	if (loading) return null;
	const { getFriends } = data;

	return (
		<React.Fragment>
			{size(getFriends) === 0 ? (
				<DivoptA1>
					<h1>No tiene Amigos</h1>
				</DivoptA1>
			) : (
				map(getFriends, (user, index) => (
					<DivoptA1 key={index}>
						<ImgFriendBorder>
							<ImgFriend1 img={user.avatar} />
						</ImgFriendBorder>
						<FriendName>{user.name}</FriendName>
					</DivoptA1>
				))
			)}
		</React.Fragment>
	);
}

/*
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
	*/

const DivoptA1 = styled.div`
	color: #fff !important;
	box-sizing: border-box;
	padding-left: 2rem !important;
	padding-right: 2rem !important;
	padding-top: 1rem !important;
	padding-bottom: 1rem !important;
	overflow: hidden;
`;
const ImgFriendBorder = styled.div`
	background: url(${iconborder});
	background-size: 60px 60px;
	background-repeat: no-repeat;
	padding: 5px;
	float: left;
`;
const ImgFriend1 = styled.img.attrs((props) => ({ src: props.img ? props.img : AvatarM }))`            
width: 50px;
height:50px;
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
