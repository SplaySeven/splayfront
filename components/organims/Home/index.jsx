import React from 'react';
import styled from 'styled-components';

import { row, px0, pr0, container, col, colmd2, colmd3, colmd9, textcenter } from '../../../styles/styles';
import iconwall from '../../../public/imagenes/icons/wall-profile/Muro-Personal.png';
import iconPhotovideoOn from '../../../public/imagenes/icons/wall-profile/photovideo-on.png';
import iconLiveOn from '../../../public/imagenes/icons/wall-profile/live-on.png';
import iconLikeOn from '../../../public/imagenes/icons/wall-profile/likeon.png';
import iconCommentOn from '../../../public/imagenes/icons/wall-profile/comment-on.png';
import iconDislikeOn from '../../../public/imagenes/icons/wall-profile/dislike-on.png';
import iconinvite from '../../../public/imagenes/icons/wall-profile/Invite-friend-on.png';
import SidebarLeft from '../Home/sidebarLeft';
import Portada from '../Home/portada';
import Publications from '../Home/Publications';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../../gql/user';

export default function index(props) {
	const { auth } = props;
	const { data, loading, error } = useQuery(GET_USER, {
		variables: { id: auth.id }
	});
	if (loading || error) return null;
	const { getUser } = data;

	return (
		<React.Fragment>
			<Row>
				<Container4>
					<Row>
						<SidebarLeft getUser={getUser} />
						<Colmd9A>
							<Colmd9Aa>
								<Portada getUser={getUser} />

								<Publications getUser={getUser} />
							</Colmd9Aa>
						</Colmd9A>
					</Row>
				</Container4>
			</Row>
		</React.Fragment>
	);
}

const Row = styled.div`
	box-sizing: border-box;
	${row};
`;

const Colmd9Aa = styled.div`
	background: #00a79d;
	height: 100px;
	padding-top: 1.5rem !important;
	margin-top: .5rem !important;
	box-sizing: border-box;
`;

const Colmd3A = styled.div`${colmd3} ${px0} background: #00a79d;`;
const Colmd9A = styled.div`${colmd9} ${pr0};`;

const Container4 = styled.div`
	${container} background: #C4E0DD;
	padding: 0px;
`;

const Colmd2A = styled.div`${colmd2} ${textcenter};`;
//// POST DE TIPO PHOTO
const Postphoto = styled.div`margin-bottom: 10px;`;

const Postvideo = styled.div`margin-bottom: 10px;`;

const HpostphotoCol1 = styled.div`${col};`;
const HpostphotoCol2 = styled.div`
	${col} max-width: 20%;
	color: #fff;
	text-align: center;
	border-left: 1px solid #fff;
	border-right: 1px solid #fff;
	padding-top: 10px;
`;
const HpostphotoCol3 = styled.div`${col};`;
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
	border-radius: 50%;
`;
const HpostphotoCol1Name = styled.div`
	float: left;
	font-weight: bold;
	color: #fff;
	margin-top: 10px;
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
const Bodypostvideo = styled.div`position: relative;`;

const Footerpost = styled.div`
	background: #00a79d;
	padding: 10px 0px;
`;

const Headerpost = styled(Footerpost)`
`;
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

const IconDislikeOn = styled.img.attrs({ src: iconDislikeOn })`
width: 40px;
:hover {
    filter: brightness(0.33); 
    cursor: pointer;
}
`;
const DivIconLike = styled.div``;
const DivIconComment = styled.div``;
const DivIconDislike = styled.div``;

const DivLike = styled.div`
	${col} text-align: right;
	padding-left: 15px;
	padding-top: 7px;
`;

const DivComment = styled.div`
	${col} border-left: 1px solid #fff;
	border-right: 1px solid #fff;
	text-align: center;
	max-width: 10%;
	padding: 5px;
	padding-top: 9px;
`;
const DivDislike = styled.div`
	${col} text-align: left;
	padding: 5px 10px;
	padding-top: 7px;
`;
const Imgpost = styled.img`width: 100%;`;
const DivPlayBtn = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
`;
const DivPlayBtn2 = styled.div`
	width: 150px;
	:hover img {
		opacity: 1;
		cursor: pointer;
	}
`;
const ImgPlayBtn = styled.img.attrs({ src: iconLiveOn })`
width: 100%;
opacity: 0.6;
`;
