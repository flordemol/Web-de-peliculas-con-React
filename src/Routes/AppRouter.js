import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { SearchProvider } from './../context/Search';
import Navegacion from './../Components/Layout/Nav';
import Header from './../Components/Layout/Header';
import PrivateRoute from "./PrivateRoute";
import Footer from './../Components/Layout/Footer';
import Login from './../pages/Login';

const AppRouter = () => {
    return ( 
        <Router>
            <Switch>
                <Route path='/login' exact component={Login} />
                <SearchProvider>
                    <Navegacion />
                    <Header/>
                    <PrivateRoute />
                    <Footer />
                </SearchProvider>
            </Switch>
            {/*<Redirect to="/login"/>*/}
        </Router>
     );
}
 
export default AppRouter;