import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Movie = ({ id, title, poster_path }) => {
    return ( 
        <Col className="my-3 text-center grow"  style={{height:"300px"}}>
            <Link to={`dashboard/movie/${id}`}>
                <div className={"poster"}>
                    <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={`Poster de la película "${title}"`}/>
                </div>
            </Link>
        </Col>
     );
}
 
export default Movie;