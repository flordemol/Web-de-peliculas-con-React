import { useContext } from "react";
import { SearchContext } from "./../../context/Search";
import Movies from './../../Components/Movies';
import Head from './../../Components/Layout/Head';

const Dashboard = () => {

    const { search } = useContext(SearchContext);

    return ( 
        <>
            <Head title="Bienvenidos a Lumière" description="Accedé a todos los éxitos del cine y clásicos de siempre." />
            {
                (search === "") ? (
                    [<Movies titulo={"Populares"} categoria={"populares"} key={"populares"}/>,
                    <Movies titulo={"Terror"} categoria={"terror"} key={"terror"}/>,
                    <Movies titulo={"Familiar"} categoria={"familiar"} key={"familiar"}/>,
                    <Movies titulo={"Fantasía"} categoria={"fantasia"} key={"fantasia"}/>,
                    <Movies titulo={"Ciencia Ficción"} categoria={"cienciaFiccion"} key={"cienciaFiccion"}/>]
                ) : (
                    <Movies titulo={`Buscaste: ${search}`} categoria={"search"} key={"search"}/>
                )
            
            }
               
            

            
        </>
     );
}
 
export default Dashboard;