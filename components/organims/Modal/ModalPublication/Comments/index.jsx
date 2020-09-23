import React, { useEffect } from 'react';
import { Image } from 'semantic-ui-react';
import Link from 'next/link';
import useTimeAgo from '../../../../../hooks/useTimeAgo';
import Moment from 'react-moment';
import { map } from 'lodash';
import ImagenNoFound from '../../../../../public/imagenes/icon-avatar-default.png';
import '../Comments/Comments.scss';
import { useQuery } from '@apollo/client';
import { GET_COMMENTS } from '../../../../../gql/comment';
import { date } from 'yup';
export default function index(props) {
	const { publication } = props;

	const { data, loading, startPolling, stopPolling } = useQuery(GET_COMMENTS, {
		variables: {
			idPublication: publication.id
		}
	});

	useEffect(
		() => {
			startPolling(2000);
			return () => {
				stopPolling();
			};
		},
		[ startPolling, stopPolling ]
	);

	if (loading) return null;
	const { getComments } = data;

	return (
		<div className="comments">
			{map(getComments, (comment, index) => (
				<div key={index} className="comment">
					<Link href="/followers/[id]" as={`/followers/${comment.idUser.id}`}>
						<a>
							<div className="imagen">
								<Image className="img" src={comment.idUser.avatar || ImagenNoFound} avatar />
							</div>

							<div className="coments2">
								<p>{comment.idUser.name}</p>
								<p>{comment.comment}</p>
							</div>
						</a>
					</Link>
				</div>
			))}
		</div>
	);
}
