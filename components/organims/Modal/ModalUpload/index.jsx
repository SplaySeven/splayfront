import React from 'react';
import Foto from '../ModalUpload/foto';
import Video from '../ModalUpload/video';
export default function index(props) {
	const { title } = props;

	return <React.Fragment>{title === 'foto' ? <Foto data={props} /> : <Video data={props} />}</React.Fragment>;
}
