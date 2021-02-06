import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SearchProvider } from './../context/Search';
import Navegacion from './../Components/Layout/Nav';
import PrivateRoute from "./PrivateRoute";
import Footer from './../Components/Layout/Footer';
import Login from './../pages/Login';
import Dashboard from './../pages/Dashboard';
import People from './../pages/People';
import Movie from './../pages/Movie';

const AppRouter = () => {
    return ( 
        <Router>
            <Switch>
                <Route path='/login' component={Login} />
                <SearchProvider>
                    <Navegacion />
                    <PrivateRoute path='/dashboard' exact component={Dashboard} />
                    <PrivateRoute path='/dashboard/movie/:id' component={Movie} />
                    <PrivateRoute path='/actores' component={People} />
                    <Footer />
                </SearchProvider>
            </Switch>
        </Router>
     );
}
 
export default AppRouter;