import { Container, Row, Col, Image } from 'react-bootstrap';
import LogoApi from './../../images/LogoApi.svg';

const Footer = () => {
    return ( 
        <Container fluid style={{background:"#0d253f", marginTop:"50px", height: "250px"}}>
            <Row style={{display:"flex", alignItems: "center", height: "100%", justifyContent:"center"}}>
                <Col md={5}>
                    <Image src={LogoApi} style={{ height: '80px' }}/>
                    <p style={{marginTop: "15px"}}>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                </Col>
                <Col md={5} className="text-center">
                    <p>Copyright ©2021 Flor De Mollein</p>
                    <a href="mailto:florenciademollein@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope icon"></i></a>
                    <a href="https://www.linkedin.com/in/maria-florencia-de-mollein" target="_blank" rel="noreferrer"><i className="fab fa-linkedin icon"></i></a>
                    <a href="https://github.com/flordemol" target="_blank" rel="noreferrer"><i className="fab fa-github icon"></i></a>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Footer;