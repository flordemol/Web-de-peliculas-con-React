import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { SearchProvider } from './../context/Search';
import Navegacion from './../Components/Layout/Nav';
import Header from './../Components/Layout/Header';
//import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Footer from './../Components/Layout/Footer';

const AppRouter = () => {
    return ( 
        <SearchProvider>
            <Router>
                <Navegacion />
                <Header/>
                <Switch>
                    <PublicRoute/>
                    {/*<PrivateRoute />*/}
                    <Redirect to="/"/>
                </Switch>
            </Router>
            <Footer />
        </SearchProvider>
     );
}
 
export default AppRouter;