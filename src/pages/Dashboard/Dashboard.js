import Movies from './../../Components/Movies';

const Dashboard = () => {
    return ( 
        <>
        <Movies titulo={"Populares"} categoria={"populares"}/>
        <Movies titulo={"Terror"} categoria={"terror"}/>
        </>
     );
}
 
export default Dashboard;