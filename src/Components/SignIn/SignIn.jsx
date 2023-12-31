/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Social/SocialLogin";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";

const SignIn = () => {
    const { signin } = UseAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [showPassword, setShowPassword] = useState(false);
    console.log('login page', location);


    const handleSignin = (e) => {
        e.preventDefault();

        /* get feild values */
        const email = e.target.email.value
        const password = e.target.password.value


       
        signin(email, password)
            .then(res => {
                toast.success('Log in successfully');
                navigate(location?.state ? location.state : '/')
                
            })
            .catch(err => {
                toast.error('eamil or password was wrong'); 

            });





    }
    return (
        <div>
            <div className="h-[15vh] md:h-[25vh] relative">
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="bg-[url('https://i.ibb.co/z7Sd3R9/Mass-Circles-1.png')] bg-no-repeat bg-cover h-full">
                    <div className="text-white text-center absolute inset-0 flex items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#03d5b4]"> Sign in</h1>
                    </div>
                </div>
            </div>
            <div className=" flex  flex-col md:flex-row items-center justify-center  max-w-screen-xl mx-auto mt-10 px-7 py-24">
                <div className="w-2/4 col-span-1 ">
                    <img className="" src="../resource/undraw_Login_re_4vu2-removebg-preview.jpg" alt="" />
                </div>
                <div className="shadow-md border w-2/3 col-span-3 mx-auto p-5   md:w-3/5 lg:w-1/3  rounded-md">
                    <h2 className="text-3xl font-bold text-[#2C3659] mb-8 text-center">Sign In</h2>

                    <form onSubmit={handleSignin} className="space-y-7 ">
                        <div>
                            <input
                                className="outline-none border border-[#03d5b4] w-full rounded-md py-2 px-2"
                                placeholder="Email Aeddress "
                                type="email"
                                name="email"
                                id="" required /><br />
                        </div>
                        <div className="relative">
                            <input
                                className="outline-none border border-[#03d5b4] w-full rounded-md py-2 px-2"
                                placeholder="Password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id=""
                                required
                            />
                            <span
                                className="text-[#03d5b4] absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <div>
                            <input className="mr-2" type="checkbox" name="terms" id="terms" />
                            <label htmlFor="terms text-[#2C3659]">Accept our <a href="" className="text-[#03d5b4]">terms</a>  <a href="" className="text-[#03d5b4]">and  condition</a></label>
                        </div>

                        <input className="w-full btn bg-[#03d5b4] hover:bg-[#03d5b4] text-[#2C3659] font-bold" type="submit" value="Sign In" />

                        <p>Ceate an acount ! <Link className="text-[#03d5b4] font-semibold" to="/signup">Sign Up</Link> </p>
                    </form>
                    <SocialLogin></SocialLogin>

                </div>

            </div>
        </div>
    );
};

export default SignIn;