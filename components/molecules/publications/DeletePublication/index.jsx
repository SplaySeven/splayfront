import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import useAuth from '../../../../hooks/useAuth';
import { toast } from 'react-toastify';

import { DELETE_PUBLICATION, GET_PUBLICATIONS_FOLLOWEDS_FRIENDS, PUBLISH } from '../../../../gql/publication';
import './index.scss';

export default function index(props) {
	const { id } = props.publication;
	const { auth } = useAuth();
	const { setShowModal } = props;
	const [ loading, setLoading ] = useState(false);

	const [ deletePublication ] = useMutation(DELETE_PUBLICATION, {
		update(cache, { data: { deletePublication } }) {
			//obtener el obejeto de cache
			const { getPublicationsFollersFriends } = cache.readQuery({ query: GET_PUBLICATIONS_FOLLOWEDS_FRIENDS });
			//reeecribir ese objeto
			cache.writeQuery({
				query: GET_PUBLICATIONS_FOLLOWEDS_FRIENDS,
				data: {
					getPublicationsFollersFriends: [ ...getPublicationsFollersFriends, deletePublication ]
				}
			});
		}
	});

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
