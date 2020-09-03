import React from 'react';
import { size } from 'lodash';
import imgaddasfriend from '../../../../public/icons/wall-profile/Invite-friend-on.png';
import imgaddasfriend2 from '../../../../public/icons/wall-profile/closeWhite.png';
import styled, { css } from 'styled-components';
import { colmd2, textcenter } from '../../../../styles/styles';
import { useQuery, useMutation } from '@apollo/client';
import { IS_FRIEND, FRIEND, UN_FRIEND, GET_FRIENDS } from '../../../../gql/friend';
import { IS_FOLLOW, FOLLOW, UN_FOLLOW, GET_FOLLOWERS } from '../../../../gql/follow';
export default function index(props) {
	const origen = props.data.data.data.origen;
	const userId = props.data.data.data.userId;

	//Amigos
	const [ friend ] = useMutation(FRIEND);
	const [ unfriend ] = useMutation(UN_FRIEND);
	const { data, loading, refetch } = useQuery(IS_FRIEND, {
		variables: { id: userId }
	});
	const [ follow ] = useMutation(FOLLOW);
	const [ unfollow ] = useMutation(UN_FOLLOW);
	const { data: dataFollow, loading: loadingFollow, refetch: refetchFollow } = useQuery(IS_FOLLOW, {
		variables: { id: userId }
	});

	const { data: dataFollowers, loading: loadingFollowers } = useQuery(GET_FOLLOWERS, {
		variables: { id: userId }
	});
	//if (loadingFollowers) return null;

	const { data: dataFriends, loading: loadingFriends } = useQuery(GET_FRIENDS, {
		variables: { id: userId }
	});

	if (loadingFriends || loadingFollowers) return null;

	const { getFriends } = dataFriends;

	const buttonFriend = () => {
		if (data.isFriend) {
			return (
				<BtnAddasfriend onClick={onUnFriend}>
					<ImgAddasfriend2 />
					<br />
					Quitar como Amigo
				</BtnAddasfriend>
			);
		} else {
			return (
				<BtnAddasfriend onClick={onFriend}>
					<ImgAddasfriend />
					<br />
					Agregar como Amigo
				</BtnAddasfriend>
			);
		}
	};

	const onFriend = async () => {
		try {
			await friend({
				variables: {
					id: userId
				}
			});
			refetch();
		} catch (error) {
			console.log(error);
		}
	};

	const onUnFriend = async () => {
		try {
			await unfriend({
				variables: {
					id: userId
				}
			});
			refetch();
		} catch (error) {
			console.log(error);
		}
	};

	//Seguir

	const buttonFollow = () => {
		if (dataFollow.isFollow) {
			return <BtnInfo onClick={onUnFollow}>Dejar de Seguir</BtnInfo>;
		} else {
			return <BtnInfo onClick={onFollow}>Seguir</BtnInfo>;
		}
	};

	const onFollow = async () => {
		try {
			await follow({
				variables: {
					id: userId
				}
			});
			refetchFollow();
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
			refetchFollow();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<React.Fragment>
			{origen === 'W' ? (
				<Colmd2A>
					<BtnInfo href="/">Informacion</BtnInfo>
					<BtnFriends>Amigos</BtnFriends>
					<BtnHistorial>Historial</BtnHistorial>
					<hr />
					<Name>
						<span>{size(getFriends)}</span> Amigos
					</Name>
					<Name>
						<span>***</span> Seguidores
					</Name>
				</Colmd2A>
			) : (
				<Colmd2A>
					{!loading && buttonFriend()}
					<BtnFriends>Amigos</BtnFriends>
					<BtnFriends>Historial</BtnFriends>
					<BtnFriends>Informacion</BtnFriends>
				</Colmd2A>
			)}
		</React.Fragment>
	);
}

const Name = styled.p`
	color: #fff !important;
	font-size: 1.25rem;
	margin-bottom: .5rem;
	font-weight: 500;
	line-height: 1.2;
	margin-top: 0;
	box-sizing: border-box;
`;

const Colmd2A = styled.div`${colmd2} ${textcenter};`;

const BtnInfo = styled.a`
	outline: none;
	border: 3px solid white;
	color: #fff;
	background-color: #00a79d;
	padding: 0px 20px;
	border-radius: 20px;
	margin: 10px 2px;
	box-sizing: content-box;
	display: inline-block;
	-webkit-text-decoration: none;
	text-decoration: none;
	white-space: normal;
	word-wrap: break-Word;
	text-align: center;
	cursor: pointer;
	:hover {
		background: #fff;
		color: #00a79d;
	}
/*	${(props) => (props.disabled ? css`background: red;` : css`background: green;`)};*/
`;
const BtnFriends = styled(BtnInfo)`
width: 85px;
margin: 10px 2px;
`;
const BtnHistorial = styled(BtnInfo)`
width: 85px;

`;
const BtnAddasfriend = styled.a`
	outline: none;
	color: #fff;
	background-color: #00a79d;
	padding: 0px 5px;
	margin: 2px 2px;
	margin-top: 2px;
	margin-top: 27px;
	box-sizing: content-box;
	display: inline-block;
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
`;
