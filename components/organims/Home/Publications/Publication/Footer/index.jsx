import React, { useState } from 'react';
import styled from 'styled-components';
import Publication from '../../../../../organims/Modal/ModalPublication';
import Like from '../../../../../atoms/Like';
import { col, row } from '../../../../../../styles/styles';
import iconCommentOn from '../../../../../../public/icons/wall-profile/comment-on.png';
import iconDislikeOn from '../../../../../../public/icons/wall-profile/dislike-on.png';
import Comment from '../../../../../molecules/BodyPerfil/Publications/Comment';
import LikeCount from '../../../../../molecules/BodyPerfil/Publications/Like';
export default function index(props) {
	const { publication } = props;
	const [ showModal, setShowModal ] = useState(false);
	return (
		<React.Fragment>
			<Footerpost>
				<DetalleStyled>
					<DetalleLeft>
						<LikeCount publication={publication} />
					</DetalleLeft>
					<DetalleRigth onClick={() => setShowModal(true)}>
						<Comment publication={publication} />
					</DetalleRigth>
				</DetalleStyled>
				<hr />

				<Row>
					<Like publication={publication} />
					<DivComment>
						<DivIconComment>
							<IconCommentOn onClick={() => setShowModal(true)} />
						</DivIconComment>
					</DivComment>
					<DivDislike>
						<DivIconDislike>
							<IconDislikeOn />
						</DivIconDislike>
					</DivDislike>
				</Row>
			</Footerpost>
			<Publication show={showModal} setShow={setShowModal} publication={publication} />
		</React.Fragment>
	);
}

const DetalleStyled = styled.div`
	color: white;
	display: flex;
`;
const DetalleLeft = styled.div`
	margin-left: 25px;
	color: white;
	font-weight: bold;
`;
const DetalleRigth = styled.div`
	margin-left: 600px;
	:hover {
		filter: brightness(0.33);
		cursor: pointer;
	}
`;
const IconDislikeOn = styled.img.attrs({ src: iconDislikeOn })`
width: 40px;
:hover {
    filter: brightness(0.33); 
    cursor: pointer;
}
`;
const DivIconDislike = styled.div``;
const Row = styled.div`
	box-sizing: border-box;
	${row};
`;

const Footerpost = styled.div`
	background: #00a79d;
	padding: 10px 0px;
`;
const DivComment = styled.div`
	${col} border-left: 1px solid #fff;
	border-right: 1px solid #fff;
	text-align: center;
	max-width: 15%;
	padding: 5px;
	padding-top: 9px;
`;
const DivIconComment = styled.div``;

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
