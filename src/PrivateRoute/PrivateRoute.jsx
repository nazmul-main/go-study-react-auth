/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const PrivateRoute = ({ children }) => {

    const {user, loading} = UseAuth();
    console.log(loading);

    /* wait / lodder */
    if(loading) return <h1 className="text-5xl text-center">Loading ,,,,</h1>
    
    /* __________ */

    if(!user?.email) {
        return <Navigate to='/login'></Navigate>
    }

    return children

};

export default PrivateRoute;