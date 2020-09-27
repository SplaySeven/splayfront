import React, { useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { map } from 'lodash';
import { useQuery } from '@apollo/client';
import { GETUSER_CONNECT } from '../../../../../gql/user';
import AvatarM from '../../../../../public/imagenes/AvatarMasculino.png';

import iconborder from '../../../../../public/imagenes/icons/wall-profile/border-photo-2.png';

export default function index() {
	const { data, loading, startPolling, stopPolling } = useQuery(GETUSER_CONNECT, {
		variables: {
			connected: 'S'
		}
	});
	/*
	useEffect(
		() => {
			startPolling(2000);
			return () => {
				stopPolling();
			};
		},
		[ startPolling, stopPolling ]
	);
*/
	if (loading) return null;
	const { getUserConnect } = data;
	return (
		<React.Fragment>
			{map(getUserConnect, (user, index) => (
				<Div key={index}>
					<div>
						<Link href="/followers/[id]" as={`/followers/${user.id}`}>
							<a>
								<DivoptA1>
									<ImgFriendBorder>
										<ImgFriend1 src={user} />
									</ImgFriendBorder>{' '}
									<FriendName>{user.name}</FriendName>
								</DivoptA1>
							</a>
						</Link>
					</div>
				</Div>
			))}
		</React.Fragment>
	);
}

const Div = styled.div``;

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
	@media (max-width: 768px) {
		padding-top: 5px !important;
		padding-left: 5px !important;
		padding-right: 5px !important;
		padding-bottom: 5px !important;
	}
`;

const ImgFriendBorder = styled.div`
	background: url(${iconborder});
	background-size: 60px 60px;
	background-repeat: no-repeat;
	padding: 5px;
	float: left;
`;
const ImgFriend1 = styled.img.attrs((props) => ({ src: props.src.avatar ? props.src.avatar : AvatarM }))`
width: 45px;
height:45px;
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
	@media (max-width: 768px) {
		display: none;
	}
`;
