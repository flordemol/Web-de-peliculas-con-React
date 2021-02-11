import { Link } from "react-router-dom";
import { Card, Button, Col } from 'react-bootstrap';
import { actions } from './../../redux/actions/lista';

const Item = ({id, titulo, imagen, dispatch}) => {

    const deleteItem = (id) => {
        dispatch({ type: actions.DELETE_LIST, payload: {id: id}})
    }

    return ( 
        <Col lg={3} md={4} sm={6} className="my-3 text-center"> 
            <Card key={id} md={4} sm={12}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${imagen}`} />
                <Card.Body>
                    <h5 className="text-dark">{titulo}</h5>
                    <Link to={`/dashboard/movie/${id}`} className="btn btn-success mx-2">Ver info</Link>
                    <Button onClick={()=>deleteItem(id)} className="mx-2" variant="outline-danger">Eliminar</Button>
                </Card.Body>
            </Card>
        </Col>
     );
}

export default Item;