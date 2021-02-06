import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Movie = ({ id, title, poster_path }) => {

    return ( 
        <Col className="my-3 text-center grow"  style={{height:"300px"}}>
            <Link to={`dashboard/movie/${id}`}>
                <div style={{background: "black", width:"210px", height:"100%", border: "1px solid black", borderRadius: "10px", margin:"0 10px"}} >
                    <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={`Poster de la película "${title}"`}  style={{objectFit: "cover", height: "100%", width: "100%", borderRadius: "10px"}}/>
                </div>
            </Link>
        </Col>
     );
}
 
export default Movie;