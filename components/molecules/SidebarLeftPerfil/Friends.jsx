import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { size, map } from 'lodash';
import AvatarM from '../../../public/imagenes/AvatarMasculino.png';
import iconborder from '../../../public/icons/wall-profile/border-photo-2.png';
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
					<H>No tiene Amigos o Seguidores</H>
				</DivoptA1>
			) : (
				map(getFriends, (user, index) => (
					<DivoptA1 key={index}>
						<Link href="/followers/[id]" as={`/followers/${user.id}`}>
							<a>
								<ImgFriendBorder>
									<ImgFriend1 img={user.avatar} />
								</ImgFriendBorder>
								<FriendName>{user.name}</FriendName>
							</a>
						</Link>
					</DivoptA1>
				))
			)}
		</React.Fragment>
	);
}

const H = styled.h1`@media (max-width: 768px) {font-size: 15px;}`;
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
		margin: 2px !important;
	}
`;
const ImgFriendBorder = styled.div`
	background: url(${iconborder});
	background-size: 60px 60px;
	background-repeat: no-repeat;
	padding: 5px;
	float: left;
	@media (max-width: 768px) {
		background-size: 45px 45px;
	}
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
@media (max-width: 768px) {
		width:35px;
		height:35px;
		margin-right: 2px;
	}
`;

const FriendName = styled.div`
	float: left;
	padding-top: 17px;
	@media (max-width: 768px) {
		display: none;
		text-align: center;
		font-size: 10px;
		padding-top: 0px;
	}
`;
