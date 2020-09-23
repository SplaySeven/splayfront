import React from 'react';
import { size } from 'lodash';
import imgaddasfriend from '../../../../public/icons/wall-profile/Invite-friend-on.png';
import imgaddasfriend2 from '../../../../public/icons/wall-profile/closeWhite.png';
import styled, { css } from 'styled-components';
import { colmd2, textcenter } from '../../../../styles/styles';
import { useQuery, useMutation } from '@apollo/client';
import { IS_FOLLOW, FOLLOW, UN_FOLLOW, GET_FOLLOWERS } from '../../../../gql/follow';

export default function index(props) {
	//Las empresa solo pueden tener seguidores
	const origen = props.data.data.data.origen;
	const userId = props.data.data.data.userId;

	const [ follow ] = useMutation(FOLLOW);
	const [ unfollow ] = useMutation(UN_FOLLOW);
	const { data, loading, refetch } = useQuery(IS_FOLLOW, {
		variables: { id: userId }
	});

	const { data: dataFollowers, loading: loadingFollowers } = useQuery(GET_FOLLOWERS, {
		variables: { id: userId }
	});
	if (loadingFollowers) return null;
	const { getFollowers } = dataFollowers;

	const buttonFollow = () => {
		if (data.isFollow) {
			return (
				<BtnAddasfriend onClick={onUnFollow}>
					<ImgAddasfriend />
					<br />
					<A>Dejar de Seguir</A>
				</BtnAddasfriend>
			);
		} else {
			return (
				<BtnAddasfriend onClick={onFollow}>
					<ImgAddasfriend />
					<br />
					<A>Seguir</A>
				</BtnAddasfriend>
			);
		}
	};

	const onFollow = async () => {
		try {
			await follow({
				variables: {
					id: userId
				}
			});
			refetch();
		} catch (error) {
			console.log(error);
		}
	};

	const onUnFollow = async () => {
		try {
			await unfollow({
				variables: {
					id: userId
				}
			});
			refetch();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<React.Fragment>
			{origen === 'W' ? (
				<Colmd2A>
					<BtnInfo href="/">Informacion</BtnInfo>
					<BtnFriends>Promocionar</BtnFriends>
					<BtnHistorial> Publicidad</BtnHistorial>
					<hr />
					<Name>
						<span>{size(getFollowers)}</span> Seguidores
					</Name>
					<Name>
						<span>Me gusta</span>
					</Name>
				</Colmd2A>
			) : (
				<Colmd2A>
					{!loading && buttonFollow()}

					<BtnFriends>Me Gusta</BtnFriends>
					<BtnFriends>Fotos</BtnFriends>
					<BtnFriends>Historial</BtnFriends>
				</Colmd2A>
			)}
		</React.Fragment>
	);
}

const A = styled.a`@media (max-width: 768px) {font-size: 7px;}`;
const Name = styled.p`
	color: #fff !important;
	font-size: 1.25rem;
	margin-bottom: .5rem;
	font-weight: 500;
	margin-top: 0;
	@media (max-width: 768px) {
		font-size: 8px;
	}
`;

const Colmd2A = styled.div`
	display: flex;
	flex-direction: column;
	height: 200px;
	text-align: center;
	@media (max-width: 768px) {
		height: 100px;
	}
`;

const BtnInfo = styled.button`
	border: 3px solid white;
	color: #fff;
	background-color: #00a79d;
	padding: 0px 20px;
	border-radius: 20px;
	margin: 10px 2px;
	height: 30px;
	width: 130px;
	margin-left: 50%;
	transform: translateX(-50%);

	white-space: nowrap;

	cursor: pointer;
	:hover {
		background: #fff;
		color: #00a79d;
	}
	@media (max-width: 768px) {
		height: 15px;
		width: 60px;
		font-size: 8px;
		margin: 0px;
		margin-left: 35px;
		padding: 1px;
		margin-top: 4px;
		border: 1px solid white;
	}
`;
const BtnFriends = styled(BtnInfo)`
`;
const BtnHistorial = styled(BtnInfo)`
`;
const BtnAddasfriend = styled.button`
	outline: none;
	border: 0px solid;
	color: #fff;
	background-color: #00a79d;
	padding: 0px 5px;
	margin: 2px 2px;
	margin-top: 27px;
	box-sizing: content-box;

	-webkit-text-decoration: none;
	text-decoration: none;
	white-space: normal;
	word-wrap: break-Word;
	text-align: center;
	cursor: pointer;
	:hover img {
		filter: brightness(0.33);
	}
	:hover {
		color: #595b61 !important;
	}
	@media (max-width: 768px) {
		margin: 0px;
		margin-top: 2px;
		padding: 0px;
	}
`;

const ImgAddasfriend = styled.img.attrs({ src: imgaddasfriend })`
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff;
white-space: normal;
word-wrap: break-Word;
text-align: center;
cursor: pointer;
width: 40px;
@media (max-width: 768px) {
	width:20px;	
	}

`;
const ImgAddasfriend2 = styled.img.attrs({ src: imgaddasfriend2 })`
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff;
white-space: normal;
word-wrap: break-Word;
text-align: center;
cursor: pointer;
width: 40px;
@media (max-width: 768px) {
	width:20px;	
	}
`;
