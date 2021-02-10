import { useParams } from 'react-router-dom';
import { useMovie } from './../../customHooks/useMovie';
import { Container, Row, Col, Image } from "react-bootstrap";
import Head from './../../Components/Common/Head';
import Error from "./../../Components/Common/Error";

const Movie = () => {
    
    const { id } =useParams();
    const [info] = useMovie(id);

    // Obtener info de Géneros
    const generos = info.movie.genres;
    const genero = [];
    for (const prop in generos) {
        const { name } = generos[prop];
        genero.push(name);
    }

    // Obtener info de Países 
    const paises = info.movie.production_countries;
    const pais = [];
    for (const prop in paises) {
        const { name } = paises[prop];
        pais.push(name);
    }
    
    // Obtener info de Compañías
    const companias = info.movie.production_companies;
    const compania = [];
    for (const prop in companias) {
        const { name } = companias[prop];
        compania.push(name);
    }

    return ( 
        <>
            <Head title={info.movie.title} description={`Información de la película "${info.movie.title}"`} />
            {
                <Container fluid className="justify-content-center  align-items-center p-0" style={{marginTop:"120px"}}>
                    <h2 className="text-white" style={{margin: "50px"}}>{info.movie.title}</h2>
                    <Row className="m-0">
                        <Col md={4} sm={12} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <Image src={`https://image.tmdb.org/t/p/original/${info.movie.poster_path}`} thumbnail style={{maxHeight:"595px"}}/>
                        </Col>
                        <Col md={8} sm={12} style={{display:"flex", padding: "20px 100px 0 0"}}>
                            <div>
                                <p><b><u>Título original:</u></b> {info.movie['original_title']}</p>
                                <p><b><u>Lenguaje original:</u></b> {info.movie['original_language']}</p>
                                <p><b><u>Género:</u></b> {genero.join(", ")}</p>
                                <p><b><u>País:</u></b> {pais.join(", ")}</p>
                                <p><b><u>Compañía:</u></b> {compania.join(", ")}</p>
                                <p><b><u>Descripción:</u></b> {info.movie.overview}</p>
                                <p><b><u>Duración:</u></b> {info.movie.runtime}''</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            }
            {
                info.movie.title === undefined && <Error info={"Ups, error al cargar la info!"}/>
            }
        </>  
    );
}
 
export default Movie;