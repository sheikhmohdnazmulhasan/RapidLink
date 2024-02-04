import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const User = ({ children }) => {
    const { isLoading, user } = useContext(AuthContext);
    const location = useLocation();

    if (isLoading) {
        return <p>Loading...</p>

    } else if (!isLoading && user) {
        return children;

    } else {
        return <Navigate state={location.pathname} to={'/login'} />
    }

};

export default User;