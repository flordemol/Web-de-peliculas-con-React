import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Item from './Item';

const MiLista = ({dispatch, lista : {lista}}) => {
    return ( 
        <>
            <Container fluid className="justify-content-center  align-items-center p-0" style={{marginTop:"120px", minHeight:"55vh"}}>
                <h2 className="text-white" style={{margin: "50px"}}>Mi Lista</h2>
                <Row className="m-0">  
                    {
                        lista.length ? (
                            lista.map((item) => <Item key={item.id} {...item} dispatch={dispatch}/>)
                        ) : (
                            <h2 className="text-warning">¡No agregaste películas a tu lista!</h2>
                        )
                    }
                </Row>
            </Container>
        </>
     );
}

const mapStateToProps = (state) => {
    return {
        lista: state.lista,
    }
}
export default connect(mapStateToProps)(MiLista);