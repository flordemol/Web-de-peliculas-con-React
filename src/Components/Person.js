import { Col, Card } from "react-bootstrap";

const Person = ({name, profile_path, known_for}) => {
   
    return ( 
        <Col md={3} className="my-3 text-center">
            <Card style={{height:"100%", margin:"0 15px"}}>
                <Card.Img variant={"top"} src={`https://image.tmdb.org/t/p/original/${profile_path}`} />
                <Card.Body style={{color:"black", textAlign:"left"}}>
                    <Card.Title>
                        {name}
                    </Card.Title>
                        <u>Conocido por</u>: 
                        {
                            known_for.map((movie) => 
                                (movie.title !== undefined)
                                    ? <p style={{margin: "0"}} key={`${name} - ${movie.title}`}>{`- ${movie.title}`}</p>
                                    : null)
                        }
                </Card.Body>
            </Card>
        </Col>
     );
}
 
export default Person;