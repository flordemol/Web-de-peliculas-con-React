import { useEffect } from 'react';
import { Row, Col, Pagination } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Paginate = ({page, setPage}) => {
    
    const history = useHistory();

    useEffect(() => {
        history.location.pathname === "/actores" && setPage(1);
    },[history.location.pathname]);

    useEffect(() => {
        history.push(`/actores/${page}`);
    },[page]);

    const handlerPrev = () => {
        history.push(`/actores/${page}`);
        setPage(page-1);
    }

    const handlerNext = () => {
        history.push(`/actores/${page}`);
        setPage(page+1);
    }

    return ( 
        <Row>
            <Col>
                <Pagination className={page === 1 ? "justify-content-end" : "justify-content-between"}>
                    { page > 1 && <Pagination.Prev onClick={handlerPrev} className="mx-4"/>}
                    <Pagination.Next onClick={handlerNext} className="mx-4"/>
                </Pagination>
            </Col>
        </Row>
     );
}
 
export default Paginate;