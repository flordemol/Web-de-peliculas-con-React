import { useContext } from "react";
import { SearchContext } from "./../../context/Search";
import Movies from './../../Components/Movies';

const Dashboard = () => {

    const { search } = useContext(SearchContext);

    return ( 
        <>
        <Movies titulo={"Populares"} categoria={"populares"}/>
        <Movies titulo={"Terror"} categoria={"terror"}/>
        </>
     );
}
 
export default Dashboard;