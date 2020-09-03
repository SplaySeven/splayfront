import React, { useState } from 'react';
import styled from 'styled-components';
import { col, row } from '../../../../../styles/styles';
import useTimeAgo from '../../../../../hooks/useTimeAgo';
import Publication from '../../../../organims/Modal/ModalPublication';
import iconPhotovideoOn from '../../../../../public/imagenes/photovideo-on.png';
import iconwall from '../../../../../public/icons/wall-profile/Muro-Personal.png';
import iconinvite from '../../../../../public/icons/wall-profile/Invite-friend-on.png';
import iconCommentOn from '../../../../../public/icons/wall-profile/comment-on.png';
import iconDislikeOn from '../../../../../public/icons/wall-profile/dislike-on.png';
import Comment from '../../../../molecules/BodyPerfil/Publications/Comment';
import Avatar from '../../../../molecules/BodyPerfil/Publications/Avatar';
import CommentForm from '../CommentForm';
import Like from '../../../../atoms/Like';
import Footer from '../Publication/Footer';
export default function index(props) {
	const { publication } = props;

	const timeago = useTimeAgo(publication.createAt);
	const [ showModal, setShowModal ] = useState(false);
	return (
		<React.Fragment>
			<Postphoto>
				<Headerpost>
					<Row>
						<HpostphotoCol1>
							<HpostphotoCol1Img>
								<AvatarPostAuthor src={publication.idUser.avatar} />
							</HpostphotoCol1Img>
							<HpostphotoCol1Name>{publication.idUser.name}</HpostphotoCol1Name>
						</HpostphotoCol1>

						<HpostphotoCol2>{timeago}</HpostphotoCol2>
						<HpostphotoCol3>
							<HpostphotoCol3Div1>
								<HpostphotoCol3Icon1 />
							</HpostphotoCol3Div1>
							<HpostphotoCol3Div2>
								<HpostphotoCol3Icon2 />
							</HpostphotoCol3Div2>
							<HpostphotoCol3Div3>
								<HpostphotoCol3Icon3 />
							</HpostphotoCol3Div3>
						</HpostphotoCol3>
					</Row>
				</Headerpost>
				<Bodypostphoto>
					<Imgpost src={publication.file} />
				</Bodypostphoto>

				<Footer publication={publication} />
				<hr />
				<div>
					<CommentForm publication={publication} />
				</div>
			</Postphoto>
		</React.Fragment>
	);
}

const HpostphotoCol1 = styled.div`${col};`;
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
`;
const AvatarPostAuthor = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
`;
const HpostphotoCol1Name = styled.div`
	float: left;
	font-weight: bold;
	color: #fff;
	margin-top: 10px;
`;

const Postphoto = styled.div`
	margin-bottom: 10px;
	border: 2px solid #808080;
	border-radius: 15px;
`;

const Imgpost = styled.img`width: 100%;`;
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

const HpostphotoCol2 = styled.div`
	${col} max-width: 20%;
	color: #fff;
	text-align: center;
	border-left: 1px solid #fff;
	border-right: 1px solid #fff;
	padding-top: 10px;
`;
const HpostphotoCol3 = styled.div`${col};`;

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
`;
const HpostphotoCol3Icon2 = styled.img.attrs({ src: iconwall })`
width: 40px;
:hover {
    filter: brightness(0.33);
    cursor: pointer;
}
`;
const HpostphotoCol3Icon3 = styled.img.attrs({ src: iconinvite })`
width: 40px;
:hover {
    filter: brightness(0.33);
    cursor: pointer;
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
