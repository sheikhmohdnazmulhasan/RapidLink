import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const User = ({ children }) => {
    const { isLoading, user } = useContext(AuthContext);

    if (isLoading) {
        return <p>Loading...</p>

    } else if (!isLoading && user) {
        return children;

    } else {
        <Navigate to={'/login'} />
    }

};

export default User;