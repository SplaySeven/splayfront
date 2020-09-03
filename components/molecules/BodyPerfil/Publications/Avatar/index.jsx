import React from 'react';
import styled from 'styled-components';
import { col, row } from '../../../../../styles/styles';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../../../gql/user';
import AvatarM from '../../../../../public/imagenes/AvatarMasculino.png';
import '../Avatar/Avatar.scss';

export default function index(props) {
	const { idUser } = props.publication;

	const { data, loading, error } = useQuery(GET_USER, {
		variables: { id: idUser }
	});
	if (loading || error) return null;
	const { getUser } = data;

	return (
		<React.Fragment>
			<HpostphotoCol1>
				<HpostphotoCol1Img>
					<AvatarPostAuthor getUser={getUser} />
				</HpostphotoCol1Img>
				<HpostphotoCol1Name>{getUser.name}</HpostphotoCol1Name>
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
`;

const AvatarPostAuthor = styled.img.attrs((props) => ({ src: props.getUser.avatar ? props.getUser.avatar : AvatarM }))`
    
	width: 40px;
	height:40px;
	border-radius: 50%;
`;
const HpostphotoCol1 = styled.div`${col};`;
const HpostphotoCol1Name = styled.div`
	float: left;
	width: 100px;
	font-weight: bold;
	color: #fff;
	margin-top: 10px;
`;
