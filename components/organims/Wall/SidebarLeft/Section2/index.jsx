import React from 'react';
import styled from 'styled-components';
import iconciudadactualOff from '../../../../../public/icons/wall-profile/city-off.png';
import iconciudadactual from '../../../../../public/icons/wall-profile/city-on.png';
import iconlugardetrabajoOff from '../../../../../public/icons/wall-profile/work-off.png';
import iconlugardetrabajo from '../../../../../public/icons/wall-profile/work-on.png';
import iconschoolOff from '../../../../../public/icons/wall-profile/school-off.png';
import iconschool from '../../../../../public/icons/wall-profile/school-on.png';
import iconcityfromOff from '../../../../../public/icons/wall-profile/city-from-off.png';
import iconcityfrom from '../../../../../public/icons/wall-profile/city-from-on.png';
import iconfeelingOff from '../../../../../public/icons/wall-profile/feeling-off.png';
import iconfeeling from '../../../../../public/icons/wall-profile/feeling-on.png';
import iconinterestOff from '../../../../../public/icons/wall-profile/interest-off.png';
import iconinterest from '../../../../../public/icons/wall-profile/interest-on.png';
export default function index() {
	return (
		<Section>
			<DivoptB>
				<DivoptB1>
					<IconciudadactualOff>
						<DivoptBimg1 />
					</IconciudadactualOff>
					Ciudad Actual
				</DivoptB1>
				<DivoptB1>
					<IconlugardetrabajoOff>
						<DivoptBimg2 />
					</IconlugardetrabajoOff>{' '}
					Lugar de trabajo
				</DivoptB1>
				<DivoptB1>
					<IconschoolOff>
						<DivoptBimg3 />
					</IconschoolOff>{' '}
					Escuela
				</DivoptB1>
				<DivoptB1>
					<IconcityfromOff>
						<DivoptBimg4 />
					</IconcityfromOff>{' '}
					Ciudad de Origen
				</DivoptB1>
				<DivoptB1>
					<IconfeelingOff>
						<DivoptBimg5 />
					</IconfeelingOff>{' '}
					Situación Sentimental
				</DivoptB1>
				<DivoptB1>
					<IconinterestOff>
						<DivoptBimg6 />
					</IconinterestOff>{' '}
					Interesés
				</DivoptB1>
			</DivoptB>
		</Section>
	);
}

const Section = styled.section`
	height: 400px;
	text-align: left;
	@media (max-width: 768px) {
		display: none;
	}
`;

const DivoptB = styled.div`background: #595b61;`;
const DivoptB1 = styled.div`
	color: #fff !important;
	padding-left: 2rem !important;
	padding-right: 2rem !important;
	padding-top: 1rem;
	padding-bottom: 1rem;
	:hover img {
		opacity: 0;
	}
	:hover {
		color: #00a79d !important;
		cursor: pointer;
		background: #fff;
	}
`;

const IconciudadactualOff = styled.div`
	background: url(${iconciudadactualOff});
	background-size: 40px 40px;
	background-repeat: no-repeat;
	display: inline-block;
`;

const DivoptBimg1 = styled.img.attrs({ src: iconciudadactual })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
color: #fff !important;
`;
const IconlugardetrabajoOff = styled.div`
	background: url(${iconlugardetrabajoOff});
	background-size: 40px 40px;
	background-repeat: no-repeat;
	display: inline-block;
`;

const DivoptBimg2 = styled.img.attrs({ src: iconlugardetrabajo })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
color: #fff !important;
`;
const IconschoolOff = styled.div`
	background: url(${iconschoolOff});
	background-size: 40px 40px;
	background-repeat: no-repeat;
	display: inline-block;
`;
const DivoptBimg3 = styled.img.attrs({ src: iconschool })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
color: #fff !important;
`;
const IconcityfromOff = styled.div`
	background: url(${iconcityfromOff});
	background-size: 40px 40px;
	background-repeat: no-repeat;
	display: inline-block;
`;

const DivoptBimg4 = styled.img.attrs({ src: iconcityfrom })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
color: #fff !important;
`;

const IconfeelingOff = styled.div`
	background: url(${iconfeelingOff});
	background-size: 40px 40px;
	background-repeat: no-repeat;
	display: inline-block;
`;

const DivoptBimg5 = styled.img.attrs({ src: iconfeeling })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
color: #fff !important;
`;

const IconinterestOff = styled.div`
	background: url(${iconinterestOff});
	background-size: 40px 40px;
	background-repeat: no-repeat;
	display: inline-block;
`;
const DivoptBimg6 = styled.img.attrs({ src: iconinterest })`
width: 40px;
margin-right: 10px;
vertical-align: middle;
border-style: none;
color: #fff !important;
`;
