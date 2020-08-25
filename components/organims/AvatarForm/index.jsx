import React, { useCallback, useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';
import './AvatarForm.scss';
import useAuth from '../../../hooks/useAuth';
import { useMutation } from '@apollo/client';
import { UPDATE_AVATAR, GET_USER, DELETE_AVATAR } from '../../../gql/user';
export default function index(props) {
	const { setShowModal } = props;
	const [ loading, setLoading ] = useState(false);
	const { auth } = useAuth();

	const [ updateAvatar ] = useMutation(UPDATE_AVATAR, {
		update(cache, { data: { updateAvatar } }) {
			const { getUser } = cache.readQuery({
				query: GET_USER,
				variables: { id: auth.id }
			});

			cache.writeQuery({
				query: GET_USER,
				variables: { id: auth.id },
				data: {
					getUser: { ...getUser, avatar: updateAvatar.urlAvatar }
				}
			});
		}
	});

	const [ deleteAvatar ] = useMutation(DELETE_AVATAR, {
		update(cache, { data: { updateAvatar } }) {
			const { getUser } = cache.readQuery({
				query: GET_USER,
				variables: { id: auth.id }
			});

			cache.writeQuery({
				query: GET_USER,
				variables: { id: auth.id },
				data: {
					getUser: { ...getUser, avatar: '' }
				}
			});
		}
	});
	const onDrop = useCallback(async (accepteFile) => {
		const file = accepteFile[0];
		try {
			setLoading(true);
			const result = await updateAvatar({ variables: { file } });
			const { data } = result;
			if (!data.updateAvatar.status) {
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
		accept: 'image/jpeg,imge/png',
		noKeyboard: true,
		multiple: false,
		onDrop
	});
	const onDeleteAvatar = async () => {
		try {
			const result = await deleteAvatar();
			const { data } = result;
			if (!data.deleteAvatar) {
				toast.warning('Error al borrar el avatar');
			} else {
				setShowModal(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="avatar_form">
			<Button {...getRootProps()} loading={loading}>
				Cargar Avatar
			</Button>
			<Button onClick={onDeleteAvatar}>Eliminar Avatar</Button>
			<Button onClick={() => setShowModal(false)}>Cancelar</Button>
			<input {...getInputProps()} />
		</div>
	);
}
