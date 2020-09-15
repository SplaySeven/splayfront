import React, { useEffect } from 'react';
import styled from 'styled-components';
import iconborder from '../../../../../../public/imagenes/icons/wall-profile/border-photo-2.png';
import Link from 'next/link';
import AvatarM from '../../../../../../public/imagenes/AvatarMasculino.png';
import { map } from 'lodash';
import { GET_NOTFRIEND } from '../../../../../../gql/friend';
import { useQuery } from '@apollo/client';

export default function index() {
	const { data, loading, refetch } = useQuery(GET_NOTFRIEND);

	useEffect(() => {
		refetch();
	}, []);

	if (loading) return null;
	const { getNotFriends } = data;

	return (
		<React.Fragment>
			{map(getNotFriends, (user, index) => (
				<DivoptA11 key={index}>
					<Link href="/followers/[id]" as={`/followers/${user.id}`}>
						<a>
							<ImgFriendBorder>
								<ImgFriend3 src={user} />
							</ImgFriendBorder>{' '}
							<FriendName>{user.name}</FriendName>
						</a>
					</Link>
				</DivoptA11>
			))}
		</React.Fragment>
	);
}

const DivoptA11 = styled.div`
	color: #fff !important;
	box-sizing: border-box;
	padding-left: 2rem !important;
	padding-right: 2rem !important;
	padding-top: 1rem !important;
	padding-bottom: 1rem !important;
	overflow: hidden;
	:hover {
		background: #595b61;
		color: #fff !important;
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
const ImgFriendBorder = styled.div`
	background: url(${iconborder});
	background-size: 60px 60px;
	background-repeat: no-repeat;
	padding: 5px;
	float: left;
`;

const FriendName = styled.div`
	float: left;
	padding-top: 17px;
`;

const ImgFriend3 = styled.img.attrs((props) => ({ src: props.src.avatar ? props.src.avatar : AvatarM }))`
width: 50px;
height:50px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
border-radius: 50%;
`;
