import { Image, Container } from 'react-bootstrap';
import Foto from './../../images/header.jpg';

const Header = () => {
    return ( 
        <Container fluid style={{ padding: '0' }}>
            <div className="cabecera">
                <Image src={Foto} alt="Imagen de pochoclos y entradas de cine" />
            </div>
        <div className="transparencia"></div>
        </Container>
     );
};
 
export default Header;