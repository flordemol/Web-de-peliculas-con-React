import { Row } from "react-bootstrap";
import { useFetch } from '../customHooks/useFetch';
import Person from './Person';
import Loading from "./../Components/Common/Loading";
import Error from "./Common/Error";

const Persons = ({titulo, categoria}) => {

    // Petición a la API
    const [persons, fetching, error] = useFetch(categoria);

    return ( 
        <>    
            {
                // Mensaje de error si la API no devuelve info
                !persons ? <Error info={"Error al cargar los actores"}/> : (

                // Evaluar estado de loading
                fetching ? (
                    <Loading />
                ) : (
                    <div>
                        <h3 className="pt-3">{titulo}</h3>
                        <Row className="text-center row-movies p-2" style={{height: "auto"}}>
                            <div className={categoria} style={{display: "flex", flexWrap: "wrap"}}>
                                {
                                    persons.map((person) => <Person key={person.id} {...person}/>)
                                }
                            </div>
                        </Row>
                    </div>
                )
                )       
            }
        </>
    );
};

 
export default Persons;