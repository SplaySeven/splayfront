import React, { useCallback } from 'react';
import { Button } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@apollo/client';
import { UPDATE_PICTURE } from '../../../../gql/user';
import './index.css';
export default function index(props) {
	const [ updatePicture ] = useMutation(UPDATE_PICTURE);

	const oneDrop = useCallback(async (accepteFile) => {
		const file = accepteFile[0];

		try {
			const result = await updatePicture({ variables: { file } });
			const { data } = result;
			if (!data.updatePicture.status) {
				toast.warning('Error al actualizar la Foto');
			} else {
				toast.success('Se cargo con Exito Fotografia');
			}
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	}, []);

	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/jpeg,image/png',
		noKeyboard: true,
		multiple: false,
		oneDrop
	});

	const { setShowModal } = props;
	return (
		<div className="portada-form">
			<Button {...getRootProps()}>Cargar una Foto</Button>
			<Button>Eliminar una Foto</Button>
			<Button onClick={() => setShowModal(false)}>Cancelar</Button>
			<input {...getInputProps()} />
		</div>
	);
}
