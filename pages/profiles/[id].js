import React from 'react';
import { useRouter } from 'next/router';

export default function profile() {
	const router = useRouter();
	console.log(router);
	return (
		<div>
			<h2>Profile de Usuario</h2>
			<p>User Id:{router.query.id}</p>
		</div>
	);
}
