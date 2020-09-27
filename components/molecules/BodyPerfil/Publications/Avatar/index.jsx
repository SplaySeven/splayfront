import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { col } from '../../../../../styles/styles';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../../../gql/user';
import useTimeAgo from '../../../../../hooks/useTimeAgo';
import AvatarM from '../../../../../public/imagenes/AvatarMasculino.png';
import '../Avatar/Avatar.scss';

export default function index(props) {
	const { idUser } = props.publication;
	const { publication } = props;
	const timeago = useTimeAgo(publication.createAt);

	const { data, loading, error } = useQuery(GET_USER, {
		variables: { id: idUser }
	});
	if (loading || error) return null;
	const { getUser } = data;

	return (
		<React.Fragment>
			<HpostphotoCol1>
				<Link href="/followers/[id]" as={`/followers/${getUser.id}`}>
					<a>
						<HpostphotoCol1Img>
							<AvatarPostAuthor src={getUser.avatar} />
						</HpostphotoCol1Img>
						<HpostphotoCol1Name>
							{getUser.name}
							<div>{timeago}</div>
						</HpostphotoCol1Name>
					</a>
				</Link>
			</HpostphotoCol1>
		</React.Fragment>
	);
}

const HpostphotoCol1Img = styled.div`
	float: left;
	margin-right: 10px;
	background: url(/icons/wall-profile/border-photo-2.png);
	background-repeat: no-repeat;
	width: 48px;
	height: 48px;
	background-size: 48px 48px;
	padding-top: 4px;
	padding-left: 4px;
	@media (max-width: 768px) {
		margin-left: 10px;
		padding-left: 0px;
	}
`;

const AvatarPostAuthor = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	@media (max-width: 768px) {
		margin-right: 0px;
		padding-left: 0px;
		text-align: left;
	}
`;
const HpostphotoCol1 = styled.div`
	${col};
	@media (max-width: 768px) {
		width: 70%;
		margin-right: 0px;
		padding-left: 0px;
	}
`;
const HpostphotoCol1Name = styled.div`
	float: left;
	font-weight: bold;
	color: #fff;
	margin-top: 10px;
`;
