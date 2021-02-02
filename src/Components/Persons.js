import { Row } from "react-bootstrap";
import { useFetch } from './../hooks/useFetch';
import Person from './Person';

const Persons = ({titulo, categoria}) => {

    // Petición a la API
    const [persons, fetching, error] = useFetch(categoria);

    return ( 
        <>               
            <h3 className="pt-3">{titulo}</h3>
            <Row className="text-center row-movies p-2" style={{height: "auto"}} key="2">
                <div className={categoria} style={{display: "flex", flexWrap: "wrap"}}>
                    {
                        persons.map((person) => <Person key={person.id} {...person}/>)
                    }
                </div>
            </Row>
        </>
    );
};

 
export default Persons;