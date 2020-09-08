import React, { useState, useCallback } from 'react';
import { Modal, Icon, Button, Dimmer, Loader } from 'semantic-ui-react';
import { useDropzone } from 'react-dropzone';
import {toast}from "react-toastify"
import {useMutation} from '@apollo/client'
import {PUBLISH,GET_PUBLICATIONS_FOLLOWEDS_FRIENDS} from '../../../../gql/publication'
import '../ModalUpload/ModalUpload.scss';


export default function index(props) {
	const { show, setShow } = props;
	const [ fileUpload, setFileUpload ] = useState(null);
	const [isLoading, setIsLoading] = useState(false)
	const [publish]=useMutation(PUBLISH,{
		update(cache,{data:{publish}}){
		 //obtener el obejeto de cache
		 const {getPublicationsFollersFriends}=cache.readQuery({query:GET_PUBLICATIONS_FOLLOWEDS_FRIENDS})
		 //reeecribir ese objeto
		 cache.writeQuery({
			query:GET_PUBLICATIONS_FOLLOWEDS_FRIENDS,
			data:{
				getPublicationsFollersFriends:[...getPublicationsFollersFriends,publish]
			}
		 })
		}
	})

	const onDrop = useCallback((acceptedFile) => {
		const file = acceptedFile[0];
		setFileUpload({
			type: 'image',
			file,
			preview: URL.createObjectURL(file)
		});
	});



	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/jpeg,image/png',
		noKeyboard: true,
		multiple: false,
		onDrop
	});

	const onClose = () => {
		setIsLoading(false)
		setFileUpload(null)
		setShow(false);
    };
    const onPublish= async()=>{
		try {
			setIsLoading(true)
		   const result =await publish({
			   variables:{
				   file:fileUpload.file
			   }
		   });
		   const {data} =result;
		if(!data.publish.status){
		toast.warning("Error en la Publicacion")
		isLoading(false)
		}else{
			onClose()
		} 
	   } catch (error) {
		   console.log(error)
		   
	   }
	   
    };
	return (
		<Modal size="small" open={show} onClose={onClose} className="modal-upload">
			<div {...getRootProps()} className="dropzone" style={fileUpload &&{border:0} } >
				{!fileUpload &&(
                 <React.Fragment>  
                <Icon name="cloud upload" />
				<p>Arrastra tu Foto o Imagen que quieras publicar</p> 
                </React.Fragment>   
                )}
                
				<input {...getInputProps()} />
			</div>
			{fileUpload?.type === 'image' && (
				<div className="image" style={{ backgroundImage: `url("${fileUpload.preview}")` }} />
			)}
            {fileUpload &&(
                <Button className="btn-upload" onClick={onPublish} >
                Publicar
                </Button>
            )}
			{isLoading &&(
				<Dimmer active className="publishing">
					<Loader/>
					<p>Publicando.....</p>
				</Dimmer>
			)}
		</Modal>
	);
}
