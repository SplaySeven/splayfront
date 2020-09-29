import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

import { DELETE_PUBLICATION } from '../../../../gql/publication';
import './index.scss';

export default function index(props) {
	const { id } = props.publication;
	const { setShowModal } = props;
	const [ loading, setLoading ] = useState(false);

	const [ deletePublication ] = useMutation(DELETE_PUBLICATION);

	const onDeletePicture = async () => {
		try {
			const result = await deletePublication({
				variables: {
					id: id
				}
			});

			const { data } = result;

			if (!data.deletePublish) {
				toast.warning('Error al borrar Publicacion');
			} else {
				setShowModal(false);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="portada-form">
			<Button onClick={onDeletePicture}>Eliminar Publicacion </Button>
			<Button onClick={() => setShowModal(false)}>Cancelar</Button>
		</div>
	);
}
