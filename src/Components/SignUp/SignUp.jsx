/* eslint-disable no-unused-vars */

import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Social/SocialLogin";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";


const SignUp = () => {

    const { createuser, handleUpdateProfile } = UseAuth();
    const navigate = useNavigate()
    const location = useLocation()


    const handleSubmit = (e) => {
        e.preventDefault();

        /* get feild values */
        const name = e.target.name.value
        const email = e.target.email.value
        const img = e.target.img.value
        const password = e.target.password.value

        console.log(name, email, password);

        /* password validation */
        if (password.length < 6) {
            toast.error('is less than 6 characters');
            return;
        }

        if (!/[A-Z]/.test(password)) {
            toast.error("don't have a capital letter");
            return;
        }

        if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            toast.error("don't have a special character");
            return;
        }

        /* creatting  user */
        createuser(email, password)
            .then(res => {
                handleUpdateProfile(name, img)
                    .then(() => {
                        toast.success('user create succesfully')
                        navigate(location?.state ? location.state : '/')
                    })

            })
            .catch(err => {
                toast.error(err.message)
            })


    
    }

    return (
        <div className="flex  flex-col md:flex-row-reverse items-center justify-center max-w-screen-xl mx-auto mt-10 px-7 py-6">
            <div className="md:w-2/4 col-span-1">
                <img src="/public/resource/undraw_Sign_up_n6im-removebg-preview.jpg" alt="" />
            </div>
            <div className="shadow-md md:w-2/3 col-span-3 mx-auto  lg:w-1/3 p-5  border rounded-md">
                <h2 className="text-3xl font-bold mb-8 text-center text-[#2C3659] ">Sign up</h2>

                <form onSubmit={handleSubmit} className="space-y-7 ">
                    <div>
                        <input
                            className="outline-none border border-[#03d5b4] w-full rounded-md py-2 px-2"
                            placeholder="Your Name "
                            type="name"
                            name="name"
                            id="" required /><br />

                    </div>
                    <div>
                        <input
                            className="outline-none border border-[#03d5b4] w-full rounded-md py-2 px-2"
                            placeholder="Email Aeddress "
                            type="email"
                            name="email"
                            id="" required /><br />
                    </div>
                    <div>
                        <input
                            className="outline-none border border-[#03d5b4] w-full rounded-md py-2 px-2"
                            placeholder="Image URL (Optional) "
                            type="text"
                            name="img"
                            id="" /><br />
                    </div>
                    <div className="relative">
                        <input
                            className="outline-none border border-[#03d5b4] w-full rounded-md py-2 px-2"
                            placeholder="Password"

                            name="password"
                            id=""
                            required
                        />

                    </div>
                    <div>
                        <input className="mr-2" type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">Accept our <a href="" className="text-[#03d5b4]">terms</a> and <a href="" className="text-[#03d5b4]">condition</a></label>
                    </div>

                    <input className="w-full btn bg-[#03d5b4] hover:bg-[#03d5b4]  font-bold text-[#2C3659]" type="submit" value="Sign Up" />

                    <p>Aready have an acount <Link className="text-[#03d5b4] font-semibold" to="/signin">Login</Link> </p>
                </form>
                <SocialLogin></SocialLogin>

            </div>
        </div>
    );
};

export default SignUp;