import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useMovie } from './../../customHooks/useMovie';
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Head from './../../Components/Common/Head';
import Error from "./../../Components/Common/Error";
import { actions } from './../../redux/actions/lista';

const Movie = ({dispatch, lista : {lista} }) => {
    
    const onList = () => lista.find( item => item.id === info.movie.id);
    
    const history = useHistory();

    const { id } =useParams();
    const [info] = useMovie(id);

    const getInfoArray = (array) => {
        const elements = [];
        for (const prop in array) {
            const { name } = array[prop];
            elements.push(name);
        }
        return elements.join(", ")
    }

    const addItem = () => {
        const obj = {
            id : info.movie.id,
            titulo : info.movie.title,
            imagen : info.movie.backdrop_path,
        }
        dispatch({ type: actions.ADD_LIST, payload: { lista : obj } });
        history.push("/mi-lista");
    }
  
    const deleteItem = () => {
        dispatch({ type: actions.DELETE_LIST, payload: { id: info.movie.id } });
        history.push("/dashboard");
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
                                <p><b><u>Género:</u></b> {getInfoArray(info.movie.genres)}</p>
                                <p><b><u>País:</u></b> {getInfoArray(info.movie.production_countries)}</p>
                                <p><b><u>Compañía:</u></b> {getInfoArray(info.movie.production_companies)}</p>
                                <p><b><u>Descripción:</u></b> {info.movie.overview}</p>
                                <p><b><u>Duración:</u></b> {info.movie.runtime}''</p>
                                {
                                    onList() ? (
                                        <Button variant="outline-danger" className="m-4" onClick={deleteItem}>Eliminar de Mi Lista</Button>
                                    ) : (
                                        <Button variant="success" className="m-4" onClick={addItem}>Agregar a Mi Lista</Button>
                                    )
                                }
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

const mapStateToProps = (state) => {
    return {
        lista: state.lista,
    }
}
export default connect(mapStateToProps)(Movie);