import './index.scss';
import React from 'react';
import { Modal } from 'semantic-ui-react';
export default function index(props) {
	const { show, setShow, title, children, tipo } = props;

	const onClose = () => {
		setShow(false);
	};
	return (
		<Modal size="mini" open={show} onClose={onClose} className="modal-basic">
			{title && <Modal.Header>{title}</Modal.Header>}
			{tipo && <Modal.Description>{tipo}</Modal.Description>}
			{children}
		</Modal>
	);
}
