import { Col, Card } from "react-bootstrap";

const Person = ({name, profile_path, known_for}) => {
    return ( 
        <Col lg={2} md={3} sm={4} className="my-3 text-center grow">
            <Card style={{height:"100%", margin:"0 15px"}}>
                <Card.Img variant={"top"} src={`https://image.tmdb.org/t/p/original/${profile_path}`} alt={`Foto de ${name}`}/>
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