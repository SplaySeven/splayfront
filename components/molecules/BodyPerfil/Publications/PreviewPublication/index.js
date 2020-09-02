import React, { useState } from 'react';
import styled from 'styled-components';
import useTimeAgo from '../../../../../hooks/useTimeAgo';
import Publication from '../../../../organims/Modal/ModalPublication';
import { col, row } from '../../../../../styles/styles';
import iconPhotovideoOn from '../../../../../public/imagenes/photovideo-on.png';
import iconwall from '../../../../../public/icons/wall-profile/Muro-Personal.png';
import iconinvite from '../../../../../public/icons/wall-profile/Invite-friend-on.png';
import iconLikeOn from '../../../../../public/icons/wall-profile/likeon.png';
import iconCommentOn from '../../../../../public/icons/wall-profile/comment-on.png';
import iconDislikeOn from '../../../../../public/icons/wall-profile/dislike-on.png';
import Comment from '../../Publications/Comment';
import Avatar from '../Avatar';

export default function index(props) {
	const { publication } = props;

	const [ showModal, setShowModal ] = useState(false);
	const timeago = useTimeAgo(publication.createAt);
	return (
		<React.Fragment>
			<Postphoto>
				<Headerpost>
					<Row>
						<Avatar publication={publication} />

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
				<Footerpost>
					<Row>
						<DivLike>
							<DivIconLike>
								<IconLikeOn />
							</DivIconLike>
						</DivLike>
						<DivComment>
							<DivIconComment>
								<IconCommentOn onClick={() => setShowModal(true)} />
								<Comment publication={publication} />
							</DivIconComment>
						</DivComment>
						<DivDislike>
							<DivIconDislike>
								<IconDislikeOn />
							</DivIconDislike>
						</DivDislike>
					</Row>
				</Footerpost>
			</Postphoto>
			<Publication show={showModal} setShow={setShowModal} publication={publication} />
		</React.Fragment>
	);
}

const Postphoto = styled.div`margin-bottom: 10px;`;
const Footerpost = styled.div`
	background: #00a79d;
	padding: 10px 0px;
`;
const Imgpost = styled.img`width: 100%;`;
const Row = styled.div`
	box-sizing: border-box;
	${row};
`;
const DivComment = styled.div`
	${col} border-left: 1px solid #fff;
	border-right: 1px solid #fff;
	text-align: center;
	max-width: 15%;
	padding: 5px;
	padding-top: 9px;
`;

const Headerpost = styled(Footerpost)`
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
const DivLike = styled.div`
	${col} text-align: right;
	padding-left: 15px;
	padding-top: 7px;
`;

const DivIconLike = styled.div``;
const DivIconComment = styled.div``;
const DivIconDislike = styled.div``;
const IconLikeOn = styled.img.attrs({ src: iconLikeOn })`
width: 40px;
:hover {
    filter: brightness(0.33); 
    cursor: pointer;
}
`;

const IconCommentOn = styled.img.attrs({ src: iconCommentOn })`
width: 40px;
:hover {
    filter: brightness(0.33); 
    cursor: pointer;
}
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
