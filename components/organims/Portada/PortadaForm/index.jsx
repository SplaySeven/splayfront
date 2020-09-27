import React, { useCallback, useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@apollo/client';
import useAuth from '../../../../hooks/useAuth';
import { UPDATE_PICTURE, GET_USER, DELETE_PICTURE } from '../../../../gql/user';
import './index.scss';
import { toast } from 'react-toastify';
export default function index(props) {
	console.log(props);
	const { auth } = useAuth();
	const { setShowModal } = props;
	const [ loading, setLoading ] = useState(false);

	const [ updatePicture ] = useMutation(UPDATE_PICTURE, {
		update(cache, { data: { updatePicture } }) {
			const { getUser } = cache.readQuery({
				query: GET_USER,
				variables: { id: auth.id }
			});
			cache.writeQuery({
				query: GET_USER,
				variables: { id: auth.id },
				data: {
					getUser: { ...getUser, picture: updatePicture.urlPicture }
				}
			});
		}
	});

	const [ deletePicture ] = useMutation(DELETE_PICTURE, {
		update(cache, { data: { updatePicture } }) {
			const { getUser } = cache.readQuery({
				query: GET_USER,
				variables: { id: auth.id }
			});
			cache.writeQuery({
				query: GET_USER,
				variables: { id: auth.id },
				data: {
					getUser: { ...getUser, picture: '' }
				}
			});
		}
	});

	const onDrop = useCallback(async (accepteFile) => {
		const file = accepteFile[0];
		try {
			setLoading(true);
			const result = await updatePicture({ variables: { file } });
			const { data } = result;
			if (!data.updatePicture.status) {
				toast.warning('Error al actualizar el avatar');
				setLoading(false);
			} else {
				setLoading(false);
				setShowModal(false);
			}
		} catch (error) {
			console.log(error);
		}
	}, []);

	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/jpeg,image/png',
		noKeyboard: true,
		multiple: false,
		onDrop
	});

	const onDeletePicture = async () => {
		try {
			const result = await deletePicture();
			const { data } = result;
			if (!data.deletePicture) {
				toast.warning('Error al borrar Foto');
			} else {
				setShowModal(false);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="portada-form">
			<Button {...getRootProps()} loading={loading}>
				Cargar una foto portada
			</Button>
			<Button onClick={onDeletePicture}>Eliminar una foto portada</Button>
			<Button onClick={() => setShowModal(false)}>Cancelar</Button>
			<input {...getInputProps()} />
		</div>
	);
}
