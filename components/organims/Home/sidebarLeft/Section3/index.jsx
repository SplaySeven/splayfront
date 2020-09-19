import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import imgFriends from '../../../../../public/imagenes/icons/wall-profile/friends-on.png';
import iconborder from '../../../../../public/imagenes/icons/wall-profile/border-photo-2.png';
import imgMarcos from '../../../../../public/imagenes/marcos.jpg';
import imgMiguel from '../../../../../public/imagenes/miguel.png';
import imgAlejandro from '../../../../../public/imagenes/bullon.png';
import iconMoreOn from '../../../../../public/imagenes/icons/wall-profile/more-on.png';
export default function index() {
	return (
		<Section3>
			<DivoptB>
				<Divoptfriendconnected>
					<ImgFriends2 /> Amigos Conectados
				</Divoptfriendconnected>
				<Div>
					<div>
						<Link href="/marco">
							<a>
								<DivoptA1>
									<ImgFriendBorder>
										<ImgFriend1 />
									</ImgFriendBorder>{' '}
									<FriendName>Marcos Rodriguez</FriendName>
								</DivoptA1>
							</a>
						</Link>
					</div>
					<div>
						<Link href="/miguel">
							<a>
								<DivoptA1>
									<ImgFriendBorder>
										<ImgFriend2 />
									</ImgFriendBorder>{' '}
									<FriendName>Miguel Nuñez</FriendName>
								</DivoptA1>
							</a>
						</Link>
					</div>
					<div>
						<Link href="/alejandro">
							<a>
								<DivoptA1>
									<ImgFriendBorder>
										<ImgFriend3 />
									</ImgFriendBorder>{' '}
									<FriendName>Alejandro Bullón</FriendName>
								</DivoptA1>
							</a>
						</Link>
					</div>
					<div>
						<Link href="/alejandro">
							<a>
								<DivoptA1>
									<ImgFriendBorder>
										<ImgFriend3 />
									</ImgFriendBorder>{' '}
									<FriendName>Alejandro Bullón</FriendName>
								</DivoptA1>
							</a>
						</Link>
					</div>
					<div>
						<Link href="/alejandro">
							<a>
								<DivoptA1>
									<ImgFriendBorder>
										<ImgFriend3 />
									</ImgFriendBorder>{' '}
									<FriendName>Alejandro Bullón</FriendName>
								</DivoptA1>
							</a>
						</Link>
					</div>
					<div>
						<Link href="/alejandro">
							<a>
								<DivoptA1>
									<ImgFriendBorder>
										<ImgFriend3 />
									</ImgFriendBorder>{' '}
									<FriendName>Alejandro Bullón</FriendName>
								</DivoptA1>
							</a>
						</Link>
					</div>
					<div>
						<Link href="/alejandro">
							<a>
								<DivoptA1>
									<ImgFriendBorder>
										<ImgFriend3 />
									</ImgFriendBorder>{' '}
									<FriendName>Alejandro Bullón</FriendName>
								</DivoptA1>
							</a>
						</Link>
					</div>
				</Div>

				<Divseemore>
					<DivoptA1Icon>
						<IconMoreOn />
					</DivoptA1Icon>{' '}
					<DivoptA1Text>
						Todos mis Amigos <br />ONLINE
					</DivoptA1Text>
				</Divseemore>
			</DivoptB>
		</Section3>
	);
}

const Div = styled.div`
	@media (max-width: 768px) {
		overflow: auto;
		margin: 0 auto;
		display: flex;
		align-items: stretch;
	}
`;
const Section3 = styled.section`
	height: 400px;
	border-right: 15px solid #c4e0dd;
	overflow: auto;

	::-webkit-scrollbar-thumb::horizontal {
		background-color: red;
		border-radius: 10px;
	}
	@media (max-width: 768px) {
		height: 115px;
		width: 100%;
		display: flex;
		border-right: 0px solid #c4e0dd;
		justify-content: center;
		overflow-y: hidden;
	}
`;
const DivoptB = styled.div`
	background: #595b61;
	@media (max-width: 768px) {
		height: 100px;
		width: 100%;
		::-webkit-scrollbar-thumb {
			background-color: white;
		}
	}
`;
const Divoptfriendconnected = styled.div`
	color: #fff !important;
	padding-left: 2rem !important;
	padding-right: 2rem !important;
	padding-top: 1rem;
	padding-bottom: 1rem;
	@media (max-width: 768px) {
		padding: 2px !important;
	}
`;

const ImgFriends2 = styled.img.attrs({ src: imgFriends })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
@media (max-width: 768px) {
		width:20px;
	}

`;

const DivoptA1 = styled.div`
	color: #fff !important;
	box-sizing: border-box;
	padding-left: 2rem !important;
	padding-right: 2rem !important;
	padding-top: 1rem !important;
	padding-bottom: 1rem !important;
	overflow: hidden;
	:hover {
		background: #fff;
		color: #595b61 !important;
		cursor: pointer;
	}
	:hover div:first-child {
		background: url(/icons/wall-profile/border-photo-1.png);
		background-size: 60px 60px;
		background-repeat: no-repeat;
		padding: 5px;
		float: left;
	}
	@media (max-width: 768px) {
		padding-top: 5px !important;
		padding-left: 5px !important;
		padding-right: 5px !important;
		padding-bottom: 5px !important;
	}
`;
const ImgFriendBorder = styled.div`
	background: url(${iconborder});
	background-size: 60px 60px;
	background-repeat: no-repeat;
	padding: 5px;
	float: left;
`;

const ImgFriend1 = styled.img.attrs({ src: imgMarcos })`
width: 50px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
border-radius: 50%;
`;
const ImgFriend2 = styled.img.attrs({ src: imgMiguel })`
width: 50px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
border-radius: 50%;


`;
const ImgFriend3 = styled.img.attrs({ src: imgAlejandro })`
width: 50px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
border-radius: 50%;

`;

const FriendName = styled.div`
	float: left;
	padding-top: 17px;
	@media (max-width: 768px) {
		display: none;
	}
`;

const Divseemore = styled(DivoptA1)`
:hover div:first-child {
    background: none;
    filter: brightness(0.33);
	padding: 0px;
	@media (max-width: 768px) {
		display:none;
	}
} 
`;

const DivoptA1Icon = styled.div`float: left;`;

const IconMoreOn = styled.img.attrs({ src: iconMoreOn })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
box-sizing: border-box;
color: #fff !important;
@media (max-width: 768px) {
		display:none;
	}
`;
const DivoptA1Text = styled.div`
	float: left;
	padding-left: 10px;
	@media (max-width: 768px) {
		display: none;
	}
`;
