import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { SearchProvider } from './../context/Search';
import Nav from './../Components/Layout/Nav';
import Header from './../Components/Layout/Header';
//import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


const AppRouter = () => {
    return ( 
        <SearchProvider>
            <Router>
                <Nav />
                <Header/>
                <Switch>
                    <PublicRoute/>
                    {/*<PrivateRoute />*/}
                </Switch>
                <Redirect to="/"/>
            </Router>
        </SearchProvider>
     );
}
 
export default AppRouter;