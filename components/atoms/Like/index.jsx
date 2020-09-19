import React, { useState } from 'react';
import styled from 'styled-components';
import iconLikeOn from '../../../public/icons/wall-profile/likeon.png';
import iconLikeOff from '../../../public/icons/wall-profile/like.png';
import { col } from '../../../styles/styles';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_LIKE, IS_LIKE, DELETE_LIKE, COUNT_LIKES } from '../../../gql/like';

export default function index(props) {
	const [ loadingAction, setLoadingAction ] = useState(false);
	const { publication } = props;
	const [ addLike ] = useMutation(ADD_LIKE);
	const [ deleteLike ] = useMutation(DELETE_LIKE);
	const { data, loading, refetch } = useQuery(IS_LIKE, {
		variables: { idPublication: publication.id }
	});
	const { data: dataCount, loading: loadingCount, refetch: refetchCount } = useQuery(COUNT_LIKES, {
		variables: { idPublication: publication.id }
	});

	const onAddLike = async () => {
		setLoadingAction(true);
		try {
			await addLike({
				variables: {
					idPublication: publication.id
				}
			});
			refetch();
			refetchCount();
		} catch (error) {
			console.log(error);
		}
		setLoadingAction(false);
	};

	const onDeleteLike = async () => {
		setLoadingAction(true);
		try {
			await deleteLike({
				variables: {
					idPublication: publication.id
				}
			});
			refetch();
			refetchCount();
		} catch (error) {
			console.log(error);
		}
		setLoadingAction(false);
	};
	const onAction = () => {
		if (!loadingAction) {
			if (isLike) {
				onDeleteLike();
			} else {
				onAddLike();
			}
		}
	};
	if (loading || loadingCount) return null;
	const { isLike } = data;
	const { countLikes } = dataCount;
	return (
		<React.Fragment>
			<DivLike>
				<DivIconLike onClick={isLike ? onDeleteLike : onAddLike}>
					{isLike ? <IconLikeOff /> : <IconLikeOn />}
				</DivIconLike>
			</DivLike>
		</React.Fragment>
	);
}

const DivLike = styled.div`
	${col} text-align: right;
	padding-left: 15px;
	padding-top: 7px;
`;
const DivIconLike = styled.div``;

const IconLikeOn = styled.img.attrs({ src: iconLikeOn })`
width: 40px;
:hover {
    filter: brightness(0.33); 
    cursor: pointer;
}
@media (max-width: 768px) {
	width: 20px;
	}
`;

const IconLikeOff = styled.img.attrs({ src: iconLikeOff })`
width: 40px;
:hover {
    filter: brightness(0.33); 
    cursor: pointer;
}
@media (max-width: 768px) {
	width: 20px;
	}
`;
