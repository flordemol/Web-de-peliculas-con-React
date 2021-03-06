import { useRef} from 'react';
import { Row } from "react-bootstrap";
import { useFetch } from '../customHooks/useFetch';
import Movie from './Movie';
import Loading from "./../Components/Common/Loading";
import Error from "./Common/Error";

const Movies = ({titulo, categoria}) => {

    // Petición a la API
    const [movies, fetching, error] = useFetch(categoria);

    const filaRef = useRef(0);

    const scrollLeft = () => {
        filaRef.current.scrollLeft -= filaRef.current.offsetWidth - 200;
    }
    const scrollRight = () => {
        filaRef.current.scrollLeft += filaRef.current.offsetWidth - 200;
    }

    return ( 
        <>
            {
                // Mensaje de error si la API no devuelve info
                !movies ? <Error info={`Error al cargar ${categoria !== "search" ? `las películas de categoria ${categoria}` : "la búsqueda"}`}/> : (

                // Evaluar estado de loading
                fetching ? (
                    <Loading />
                ) : (
                    // Si no hay búsqueda...            
                    (categoria !== "search") ? (
                        <div key={titulo}>
                            <h3 className="pt-3">{titulo}</h3>
                            <Row className="text-center row-movies p-2">
                                <div className="flechaIzquierda" onClick={scrollLeft}><i className="fas fa-caret-left"></i></div>
                                    <div className={`visible ${categoria}`} ref={filaRef}>
                                        {
                                            movies.map((movie) => <Movie key={movie.id} {...movie}/>)
                                        }
                                    </div>
                                <div className="flechaDerecha" onClick={scrollRight}><i className="fas fa-caret-right"></i></div>
                            </Row>
                        </div>
                    ) : (
                        // Si hay búsqueda...
                        <div key={"search"}>
                            <h3 className="pt-3">{titulo}</h3>
                            <Row className="text-center row-movies p-2" style={{height: "auto"}} key="2">
                                <div className={categoria} style={{display: "flex", flexWrap: "wrap"}}>
                                    {
                                        movies.map((movie) => <Movie key={movie.id} {...movie}/>)
                                    }
                                </div>
                            </Row>
                        </div>
                    )
                ))
            }
        </>
    );
};

 
export default Movies;