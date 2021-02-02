import { Row } from "react-bootstrap";
import { useFetch } from './../hooks/useFetch';
import Movie from './Movie';

const Movies = ({titulo, categoria}) => {

    // Petición a la API
    const [movies, fetching, error] = useFetch(categoria);

    // Scroll de carruseles con películas
    const clase = `.${categoria}`;
    const fila = document.querySelector(clase);
    
    const scrollLeft = () => {
        fila.scrollLeft -= fila.offsetWidth - 200;
   }

    const scrollRight = () => {
       fila.scrollLeft += fila.offsetWidth - 200;
   }

    return ( 
        <>
            {
                (categoria !== "search") ? (
                     <div key={titulo}>
                        <h3 className="pt-3">{titulo}</h3>
                        <Row className="text-center row-movies p-2">
                            <div className="flechaIzquierda" onClick={scrollLeft}><i className="fas fa-caret-left"></i></div>
                            <div className={`visible ${categoria}`}>
                                {
                                    movies.map((movie) => <Movie key={movie.id} {...movie}/>)
                                }
                            </div>
                            <div className="flechaDerecha" onClick={scrollRight}><i className="fas fa-caret-right"></i></div>
                        </Row>
                    </div>
                    ) : (
                    <div key={"search"}>
                        <h3 className="pt-3">{titulo}</h3>
                        <Row className="text-center row-movies p-2" style={{height: "auto"}} key="2">
                            <div className={categoria} style={{display: "flex", flexWrap: "wrap"}}>
                                {
                                    movies.map((movie) => <Movie key={movie.id} {...movie}/>)
                                }
                            </div>
                        </Row>
                    </div>)
            }
        </>
    );
};

 
export default Movies;