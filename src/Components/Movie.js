import { Col } from "react-bootstrap";

const Movie = ({title, original_language, backdrop_path, original_title, overview, poster_path, release_date }) => {
    return ( 
        <Col className="my-3 text-center">
            <div style={{height:"300px", width:"210px", border: "1px solid black", background: "black", borderRadius: "10px", overflow: "hidden", margin:"0 10px"}}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`Poster de la película "${title}"`} style={{objectFit: "cover", height: "100%", width: "100%"}}/>
            </div>

        {/*
            {title}
            <br/>
            {original_language}
            <br/>
            {backdrop_path}
            <br/>
            {original_title}
            <br/>
            {overview}
            <br/>
            {poster_path}
            <br/>
            {release_date}
            <br/>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/>
        
        */}
        </Col>
     );
}
 
export default Movie;