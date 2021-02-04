import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SearchProvider } from './../context/Search';
import Navegacion from './../Components/Layout/Nav';
import Header from './../Components/Layout/Header';
import PrivateRoute from "./PrivateRoute";
import Footer from './../Components/Layout/Footer';
import Login from './../pages/Login';
import Dashboard from './../pages/Dashboard';
import People from './../pages/People';

const AppRouter = () => {
    return ( 
        <Router>
            <Switch>
                <Route path='/login' component={Login} />
                <SearchProvider>
                    <Navegacion />
                    <Header/>
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                    <PrivateRoute path='/actores' component={People} />
                    <Footer />
                </SearchProvider>
            </Switch>
        </Router>
     );
}
 
export default AppRouter;