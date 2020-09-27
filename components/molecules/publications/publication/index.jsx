import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { col, row } from '../../../../styles/styles';
import useTimeAgo from '../../../../hooks/useTimeAgo';
import iconPhotovideoOn from '../../../../public/imagenes/photovideo-on.png';
import iconwall from '../../../../public/icons/wall-profile/Muro-Personal.png';
import iconinvite from '../../../../public/icons/wall-profile/Invite-friend-on.png';
import imgcerrar from '../../../../public/imagenes/closeWhite.png';
import closeWhite from '../../../../public/icons/wall-profile/closeWhite.png';
import iconCommentOn from '../../../../public/icons/wall-profile/comment-on.png';
import iconDislikeOn from '../../../../public/icons/wall-profile/dislike-on.png';
import Comments from '../../../organims/Modal/ModalPublication/Comments';
import CommentForm from '../../publications/CommentForm';
import Link from 'next/link';
import Avatar from '../../../molecules/BodyPerfil/Publications/Avatar';
import Footer from '../publication/Footer';

import ModalBasic from '../../../organims/Modal/ModalBasic';
import PortadaForm from '../../publications/DeletePublication';

export default function index(props) {
	const { publication } = props;
	const { origen } = props;
	const timeago = useTimeAgo(publication.createAt);
	const [ showModal, setShowModal ] = useState(false);
	const [ titleModal, setTitleModal ] = useState('');
	const [ childrenModal, setChildrenModal ] = useState(null);

	const handlerModal = (type) => {
		switch (type) {
			case 'portada':
				console.log('aqui en portada');
				setTitleModal('Eliminar Publicacion');
				setChildrenModal(<PortadaForm setShowModal={setShowModal} publication={publication} />);
				setShowModal(true);
				break;

			default:
				break;
		}
	};
	return (
		<React.Fragment>
			<Postphoto>
				<Headerpost>
					<Row>
						{origen === 'H' && (
							<HpostphotoCol1>
								<Link href="/followers/[id]" as={`/followers/${publication.idUser.id}`}>
									<a>
										<HpostphotoCol1Img>
											<AvatarPostAuthor src={publication.idUser.avatar} />
										</HpostphotoCol1Img>
										<HpostphotoCol1Name>
											{publication.idUser.name}
											<div>{timeago}</div>
										</HpostphotoCol1Name>
									</a>
								</Link>
							</HpostphotoCol1>
						)}
						{origen === 'W' && <Avatar publication={publication} />}
						{origen === 'F' && <Avatar publication={publication} />}
						<HpostphotoCol3>
							<HpostphotoCol3Div1>
								<HpostphotoCol3Icon1 />
							</HpostphotoCol3Div1>
							<HpostphotoCol3Div2>
								<HpostphotoCol3Icon2 />
							</HpostphotoCol3Div2>
							{origen === 'W' && (
								<HpostphotoCol3Div3>
									<BtnCerrar onClick={() => handlerModal('portada')}>
										<ImgCerrar type="submit" />
									</BtnCerrar>
								</HpostphotoCol3Div3>
							)}
						</HpostphotoCol3>
					</Row>
					<ComentHeader>
						<p>{publication.comments}</p>
					</ComentHeader>
				</Headerpost>

				<Bodypostphoto>
					{publication.typeFile === 'image' && <Imgpost src={publication.file} />}
					{publication.typeFile === 'video' && (
						<div className="image">
							<ReactPlayer url={publication.file} width="100%" height="85%" volume={0.8} controls loop />
						</div>
					)}
				</Bodypostphoto>

				<Footer publication={publication} />
				<hr />
				<Comments publication={publication} />
				<div>
					<CommentForm publication={publication} />
				</div>
				<ModalBasic show={showModal} setShow={setShowModal} title={titleModal}>
					{childrenModal}
				</ModalBasic>
			</Postphoto>
		</React.Fragment>
	);
}

const BtnCerrar = styled.a`
	width: 40px;
	outline: none;

	color: #fff;
	background-color: #00a79d;

	border-radius: 20px;
	margin: 2px 2px;
	box-sizing: content-box;
	display: inline-block;
	-webkit-text-decoration: none;
	text-decoration: none;
	white-space: normal;
	word-wrap: break-Word;
	text-align: center;
	cursor: pointer;
	:hover {
		filter: brightness(0.33);
	}
`;
const ImgCerrar = styled.img.attrs({ src: imgcerrar })`
width: 40px;
vertical-align: middle;
border-style: none;
color: #fff;
white-space: normal;
word-wrap: break-Word;
text-align: center;
cursor: pointer;
`;

const HpostphotoCol1 = styled.div`
	${col};

	@media (max-width: 768px) {
		width: 70%;
		margin-right: 0px;
		padding-left: 0px;
	}
`;
const HpostphotoCol1Img = styled.div`
	float: left;
	margin-right: 10px;
	background: url(/icons/wall-profile/border-photo-2.png);
	background-repeat: no-repeat;
	width: 48px;
	height: 48px;
	background-size: 48px 48px;
	padding-top: 4px;
	padding-left: 4px;
	@media (max-width: 768px) {
		margin-left: 10px;
		padding-left: 0px;
	}
`;
const AvatarPostAuthor = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	@media (max-width: 768px) {
		margin-right: 0px;
		padding-left: 0px;
		text-align: left;
	}
`;
const HpostphotoCol1Name = styled.div`
	float: left;
	text-align: left;
	font-weight: bold;
	color: #fff;
	margin-top: 10px;
`;

const Postphoto = styled.section`
	float: right;
	text-align: right;
	width: 69%;
	margin-bottom: 10px;
	border: 2px solid #808080;
	border-radius: 15px;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const Imgpost = styled.img`
	width: 100%;
	height: 100%;
`;
const Row = styled.div`
	box-sizing: border-box;
	${row};
`;

const Headerpost = styled.div`
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	background: #00a79d;
	padding: 10px 0px;
`;

const ComentHeader = styled.div`
	color: #fff;
	padding: 2px;
	margin-left: 15px;
	text-align: left;
	font-weight: normal;
`;

const HpostphotoCol2 = styled.div`
	max-width: 20%;
	color: #fff;
	text-align: center;
	border-left: 1px solid #fff;
	border-right: 1px solid #fff;
	padding-top: 10px;
	@media (max-width: 768px) {
		${col} max-width: 20%;
		padding-left: 0px;
		padding-right: 0px;
	}
`;
const HpostphotoCol3 = styled.div`
	${col};
	@media (max-width: 768px) {
		padding-left: 0px;
		padding-right: 5px;
		max-width: 30%;
	}
`;

const HpostphotoCol3Div1 = styled.div`
	float: right;
	margin-left: 10px;
`;
const HpostphotoCol3Div2 = styled.div`
	float: right;
	margin-left: 10px;
`;
const HpostphotoCol3Div3 = styled.div`
	float: right;
	margin-left: 10px;
`;

const HpostphotoCol3Icon1 = styled.img.attrs({ src: iconPhotovideoOn })`
    width: 40px;
    :hover {
        filter: brightness(0.33);
        cursor: pointer;
	}
	@media (max-width: 768px) {
		width: 25px;
	}
`;
const HpostphotoCol3Icon2 = styled.img.attrs({ src: iconwall })`
width: 40px;
:hover {
    filter: brightness(0.33);
    cursor: pointer;
}
@media (max-width: 768px) {
		width: 25px;
	}
`;
const HpostphotoCol3Icon3 = styled.img.attrs({ src: closeWhite })`
width: 40px;
:hover {
    filter: brightness(0.33);
    cursor: pointer;
}
@media (max-width: 768px) {
		width: 25px;
	}
`;

const Bodypostphoto = styled.div``;

const DivIconComment = styled.div``;
const DivIconDislike = styled.div``;

const IconCommentOn = styled.img.attrs({ src: iconCommentOn })`
width: 40px;
:hover {
    filter: brightness(0.33); 
    cursor: pointer;
}
`;

const Footerpost = styled.div`
	background: #00a79d;
	padding: 10px 0px;
`;

const DivDislike = styled.div`
	${col} text-align: left;
	padding: 5px 10px;
	padding-top: 7px;
`;

const IconDislikeOn = styled.img.attrs({ src: iconDislikeOn })`
width: 40px;
:hover {
    filter: brightness(0.33); 
    cursor: pointer;
}
`;
