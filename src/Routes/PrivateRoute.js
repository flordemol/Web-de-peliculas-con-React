import { Route } from 'react-router-dom';
import Dashboard from './../pages/Dashboard';
import People from './../pages/People';

const PrivateRoute = () => {
    return ( 
        <>
            <Route path='/dashboard' exact component={Dashboard} />
            <Route path='/actores' exact component={People} />
        </>
    );
}
 
export default PrivateRoute;