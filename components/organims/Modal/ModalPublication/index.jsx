import React from 'react';
import { Modal, Grid } from 'semantic-ui-react';
import '../ModalPublication/ModalPublication.scss';
import Comments from '../ModalPublication/Comments';
import CommentForm from '../ModalPublication/CommentForm';
export default function index(props) {
	const { show, setShow, publication } = props;
	const onClose = () => setShow(false);

	return (
		<Modal open={show} onClose={onClose} className="modal-publication">
			<Grid>
				<Grid.Column
					className="modal-publication__left"
					width={10}
					style={{ backgroundImage: `url("${publication.file}")` }}
				/>

				<Grid.Column className="modal-publication__right" width={6}>
					<Comments publication={publication} />
					<div>Actions</div>
					<CommentForm publication={publication} />
				</Grid.Column>
			</Grid>
		</Modal>
	);
}
