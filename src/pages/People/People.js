import { useContext } from "react";
import { SearchContext } from "./../../context/Search"; //VER!!!
import Persons from './../../Components/Persons';
import Head from './../../Components/Common/Head';

const People = () => {

    const { search } = useContext(SearchContext);

    return ( 
        <>
            <Head title="Actores" description="Encontrá tu actor favorito" />
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