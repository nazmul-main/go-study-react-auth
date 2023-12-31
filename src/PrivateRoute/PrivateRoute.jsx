/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const PrivateRoute = ({ children }) => {

    const {user, loading} = UseAuth();
   const location = useLocation()
   console.log(location.pathname);



    /* wait / lodder */
    if(loading) return <h1 className="text-5xl text-center h-[40vh]">Loading ,,,,</h1>

    if (user) {
        return children
    }
    
    /* __________ */

    // if(!user?.email) {
        return <Navigate state={location.pathname} to='/signin'></Navigate>
    // }

};

export default PrivateRoute;