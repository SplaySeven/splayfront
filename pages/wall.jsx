import React from 'react';
import useAuth from '../hooks/useAuth';

export default function wall() {
	const User = useAuth();

	console.log(User);
	return (
		<div>
			<h1>Bienvendio al Muro en unos minutotas vermos mas sobre esto feliz dia</h1>
		</div>
	);
}
