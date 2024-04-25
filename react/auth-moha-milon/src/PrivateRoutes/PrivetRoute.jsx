import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner loading-md"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" />
};

export default PrivetRoute;

PrivetRoute.propTypes = {
    children: PropTypes.node.isRequired,
};