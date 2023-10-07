import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";

const SocialLogin = () => {

    const {user, googleLogin} = useContext(AuthContex)

 
     const handleSocialLogin = (media) => {
        media()
     }





    return (
        <div>
            <div className='divider'>  Continue With </div>
            <div>
                <button className='btn'>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;