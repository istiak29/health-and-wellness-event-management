import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation()
    console.log(location)

    if (loading) {
        return <span className="loading loading-spinner text-warning loading-lg"></span>
    }

    if (user) {
        return children
    }

    // else {
    //     alert('Log in first')
    // }

    return (
        <Navigate state={location.pathname} to={'/login'}></Navigate>
    );
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node
}