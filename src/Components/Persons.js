import { Row } from "react-bootstrap";
import { useFetch } from '../customHooks/useFetch';
import Person from './Person';
import Loading from "./../Components/Common/Loading";

const Persons = ({titulo, categoria}) => {

    // Petición a la API
    const [persons, fetching, error] = useFetch(categoria);

    return ( 
        <>    
            {
                // Evaluar estado de loading
                fetching ? (
                    <Loading />
                ) : (
                    <div>
                        <h3 className="pt-3">{titulo}</h3>
                        <Row className="text-center row-movies p-2" style={{height: "auto"}} key="2">
                            <div className={categoria} style={{display: "flex", flexWrap: "wrap"}}>
                                {
                                    persons.map((person) => <Person key={person.id} {...person}/>)
                                }
                            </div>
                        </Row>
                    </div>
                )
            }           
        </>
    );
};

 
export default Persons;