/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {

    const {googleLogin} = useContext(AuthContex)
    const navigate = useNavigate()
    const location = useLocation()

 
     const handleSocialLogin = (media) => {
        media()
        .then(res => {
            toast.success('user create succesfully')
            navigate(location?.state ? location.state : '/')
        })
        .catch(err => {
            toast.error(err.message)
        })
     }





    return (
        <div>
            <div className='divider'>  Continue With </div>
            <div>
                <button  onClick={() => handleSocialLogin(googleLogin)} className='btn'>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;