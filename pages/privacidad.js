import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import HeaderUnregister from '../components/organims/Navbar/HeaderUnregistered';
import Footer from '../components/organims/Footer/index2';
import styled from 'styled-components';

export default function index() {
    return (
       <Layout>
            <React.Fragment>
			
                <title>Politicas de Privacidad</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            
            <HeaderUnregister />
            <Container>
                <Title>Politicas de Pricacidad</Title>
                <p>Al unirte a nuestra comunidad de splay seven al igual que miles de usuarios confían en este sitio y splay seven a su vez también confía en ti. Queremos indicarle las pautas de políticas de esta red social más abajo.</p>
                <p>Si ves algún contenido inapropiedad con nuestras políticas puedes denuciarlo escribiendonos a través de nuestro formulario de contacto, con la opción de tipo de contenido y eliges denuncias, y al final del mensaje específique con la url del contenido que desea denunciar y nuestro personal de monitoreo en el tiempo más breve posible hará revisión del contenido y aplicará los normas pautadas para su denuncia.</p>
                <h2>Contenido sexual</h2>
                <p>Splay Seven no permite pornografía o contenido sexual de ningún tipo.</p>
                <p>No se permite publica contenido que inciten a la violencia, especialmente a los niños.</p>
			    <p>Ya sean contenido de fabricación de bombas, uso de drogas, o algún juego que pueda causar incentivo al peligro es prohibido en nuestro sitio.</p>
                <h2>Spam o Contenido Engañoso</h2>
                <p>El contenido engañoso está prohibido por splay seven. Estos contenidos pueden ir con el fin de ganar visualizaciones y tráfico engañoso y puede ser tanto en videos como en comentarios. </p>
                <h2>Derechos de Auto</h2>
                <p>Respeta los derechos de autor. Sube solo contenido creado por ti o que estés autorizado a usar. Es decir que no debes subir videos que no hayas creado, ni usar contenido en tus videos cuyos derechos de autor pertenezcan a otra persona (como pistas de música o fragmentos de programas protegidos por derechos de autor); tampoco puedes usar videos creados por otros usuarios sin las autorizaciones necesarias.</p>
                <h2>Amenazas</h2>
                <p>Somos muy estrictos en cuanto al comportamiento agresivo, las amenazas, el acoso, la invasión de la privacidad, la revelación de información personal de terceros y la incitación a que otros cometan actos violentos o infrinjan las Condiciones de uso.</p>
                
            </Container>
            <Footer position={'relative'}/>
            </React.Fragment>
        </Layout>
    );
}
const Title = styled.h1`
    font-size: 2.2rem;
    text-align: center;
    padding: 20px 0px 30px 0px;
    color: #5e5b5b;
    
`;
const Container = styled.div`
	width: 62%;
	background: #c4e0dd;
    margin: 0px auto;
    padding: 20px;

	@media (max-width: 768px) {
		overflow: hidden;
		width: 100%;
    }
    
    p {
        text-align: justify;
        font-size: 1.5rem;
    }
`;