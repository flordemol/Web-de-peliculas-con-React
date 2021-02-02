import { Route } from 'react-router-dom';
import Dashboard from './../pages/Dashboard';
import People from './../pages/People';

const PublicRoute = () => {
    return ( 
        <>
            <Route path='/' exact component={Dashboard} />
            <Route path='/actores' component={People} />
        </>
    );
}
 
export default PublicRoute;