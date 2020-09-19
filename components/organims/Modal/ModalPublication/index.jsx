import React from 'react';
import { Modal, Grid } from 'semantic-ui-react';
import '../ModalPublication/ModalPublication.scss';
import Comments from '../ModalPublication/Comments';
import CommentForm from '../ModalPublication/CommentForm';
import Actions from '../ModalPublication/Actions';
export default function index(props) {
	const { show, setShow, publication } = props;
	const onClose = () => setShow(false);

	return (
		<Modal open={show} onClose={onClose} className="modal-publication">
			<Grid>
				<Grid.Column
					className="modal-publication__left"
					width={9}
					style={{ backgroundImage: `url("${publication.file}")` }}
				/>

				<Grid.Column className="modal-publication__right" width={7}>
					<Comments publication={publication} />
					<Actions publication={publication} />
					<CommentForm publication={publication} />
				</Grid.Column>
			</Grid>
		</Modal>
	);
}
