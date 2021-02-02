import { useContext } from "react";
import { SearchContext } from "./../../context/Search"; //VER!!!
import Persons from './../../Components/Persons';

const People = () => {

    const { search } = useContext(SearchContext);

    return ( 
        <>
            {
                (search === "") ? (
                    <Persons titulo={"¡Conocelos!"} categoria={"actores"} key={"actores"}/>
                ) : (
                   <Persons titulo={`Buscaste: ${search}`} categoria={"searchPeople"} key={"searchPeople"}/> 
                )
            }
        </>
     );
}
 
export default People;