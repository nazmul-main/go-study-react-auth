import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";

const SocialLogin = () => {

    const {googleLogin} = useContext(AuthContex)

 
     const handleSocialLogin = (media) => {
        media()
        .then(res => console.log(res))
        .catch(err => console.log(err))
     }





    return (
        <div>
            <div className='divider'>  Continue With </div>
            <div>
                <button onClick={() => handleSocialLogin(googleLogin)} className='btn'>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;