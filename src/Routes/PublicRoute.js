import { Route } from 'react-router-dom';
import Dashboard from './../pages/Dashboard';

const PublicRoute = () => {
    return ( 
        <>
            <Route path='/' exact component={Dashboard} />
        </>
    );
}
 
export default PublicRoute;