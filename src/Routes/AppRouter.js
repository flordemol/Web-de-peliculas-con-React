import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Nav from './../Components/Layout/Nav';
import Header from './../Components/Layout/Header';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


const AppRouter = () => {
    return ( 
        <Router>
            <Nav />
            <Header/>
            <Switch>
                <PublicRoute/>
                {/*<PrivateRoute />*/}
            </Switch>
            <Redirect to="/"/>
        </Router>
     );
}
 
export default AppRouter;