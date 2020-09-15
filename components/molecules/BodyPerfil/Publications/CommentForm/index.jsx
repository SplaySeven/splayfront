import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT, COUNT_COMMENTS } from '../../../../../gql/comment';
import '../CommentForm/CommentForm.scss';
export default function index(props) {
	const { publication } = props;
	const [ addComment ] = useMutation(ADD_COMMENT, {
		update(cache, { data: { addComment } }) {
			//Obtener el objeto de cache
			const { countComments } = cache.readQuery({ query: COUNT_COMMENTS });
			//reescribir ese objero
			cache.writeQuery({
				query: COUNT_COMMENTS,
				data: {
					countComments: [ ...countComments, addComment ]
				}
			});
		}
	});

	const formik = useFormik({
		initialValues: {
			comment: ''
		},
		validationSchema: Yup.object({
			comment: Yup.string().required()
		}),
		onSubmit: async (formData) => {
			try {
				await addComment({
					variables: {
						input: {
							idPublication: publication.id,
							comment: formData.comment
						}
					}
				});
				formik.handleReset();
			} catch (error) {
				console.log(error);
			}
		}
	});

	return (
		<Form className="comment-form2" onSubmit={formik.handleSubmit}>
			<Form.Input
				placeholder="Añade un Comentario.."
				name="comment"
				value={formik.values.comment}
				onChange={formik.handleChange}
				error={formik.errors.comment && true}
			/>
			<Button type="submit">Publicar</Button>
		</Form>
	);
}
