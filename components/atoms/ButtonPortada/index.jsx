import React from 'react';
import Persona from '../ButtonPortada/Persona';
import Empresa from '../ButtonPortada/Empresa';

export default function index(props) {
	const Type = props.type;
	//Ponemos Boton segun el tipo de Cliente

	return <React.Fragment>{Type === 'P' ? <Persona data={props} /> : <Empresa data={props} />}</React.Fragment>;
}
