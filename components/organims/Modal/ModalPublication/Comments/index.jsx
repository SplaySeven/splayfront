import React, { useEffect } from 'react';
import { Image } from 'semantic-ui-react';
import Link from 'next/link';
import useTimeAgo from '../../../../../hooks/useTimeAgo';
import { map } from 'lodash';
import ImagenNoFound from '../../../../../public/imagenes/icon-avatar-default.png';
import '../Comments/Comments.scss';
import { useQuery } from '@apollo/client';
import { GET_COMMENTS } from '../../../../../gql/comment';
export default function index(props) {
	const { publication } = props;

	const { data, loading, startPolling, stopPolling } = useQuery(GET_COMMENTS, {
		variables: {
			idPublication: publication.id
		}
	});
	useEffect(
		() => {
			startPolling(1000);
			return () => {
				stopPolling();
			};
		},
		[ stopPolling, stopPolling ]
	);

	if (loading) return null;
	const { getComments } = data;

	return (
		<div className="comments">
			{map(getComments, (comment, index) => (
				<div key={index} className="comment">
					<Link href="/followers/[id]" as={`/followers/${comment.idUser.id}`}>
						<a>
							<Image className="img" src={comment.idUser.avatar || ImagenNoFound} avatar />
							<div>
								<p>{comment.idUser.name}</p>
							</div>
							<p>{comment.comment}</p>
						</a>
					</Link>
				</div>
			))}
		</div>
	);
}
