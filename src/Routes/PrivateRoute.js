import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./../context/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { auth } = useContext(AuthContext);
    if (!!auth) {
        return <Route {...rest} component={Component} />;
    } else {
        return <Redirect to="/login" />;
    }
}

export default PrivateRoute;