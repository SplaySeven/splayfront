import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import '../CommentForm/CommentForm.scss';
export default function index() {
	return (
		<Form className="comment-form2">
			<Form.Input placeholder="Añade un Comentario.." />
			<Button type="submit">Publicar</Button>
		</Form>
	);
}
