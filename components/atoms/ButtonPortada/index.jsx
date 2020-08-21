import React from 'react';
import styled, { css } from 'styled-components';
import imgaddasfriend from '../../../public/icons/wall-profile/Invite-friend-on.png';
import { colmd2, textcenter } from '../../../pages/styles';
import { useQuery, useMutation } from '@apollo/client';
import { IS_FOLLOW, FOLLOW, UN_FOLLOW } from '../../../gql/follow';
import { Button } from 'semantic-ui-react';
export default function index(props) {
	const origen = props.data.origen;
	const userId = props.data.userId;
	const [ follow ] = useMutation(FOLLOW);
	const [ unfollow ] = useMutation(UN_FOLLOW);
	const { data, loading, refetch } = useQuery(IS_FOLLOW, {
		variables: { id: userId }
	});

	const buttonFollow = () => {
		if (data.isFollow) {
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

					<BtnFriends href="/">Amigos</BtnFriends>

					<BtnHistorial href="/">Historial</BtnHistorial>

					<BtnAddasfriend>
						<ImgAddasfriend />
						<br />
						Agregar como amigo
					</BtnAddasfriend>
				</Colmd2A>
			) : (
				<Colmd2A>
					{!loading && buttonFollow()}

					<BtnFriends>Amigos</BtnFriends>
					<BtnHistorial>Historial</BtnHistorial>
					<BtnAddasfriend>
						<ImgAddasfriend />
						<br />
						Seguir como amigo
					</BtnAddasfriend>
				</Colmd2A>
			)}
		</React.Fragment>
	);
}

const Colmd2A = styled.div`${colmd2} ${textcenter};`;
const BtnInfo = styled.a`
	outline: none;
	border: 3px solid white;
	color: #fff;
	background-color: #00a79d;
	padding: 0px 20px;
	border-radius: 20px;
	margin: 2px 2px;
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
