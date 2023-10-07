/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Social/SocialLogin";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";

const SignIn = () => {
    const { signin } = UseAuth()
    const navigate = useNavigate()


    const handleSignin = (e) => {
        e.preventDefault();

        /* get feild values */
        const email = e.target.email.value
        const password = e.target.password.value


        /* validation */
        /*  if (password.length < 6) {
             toast.error('password must be at least 6 characters');
             return
         } */


        /* creatting a new user */
        signin(email, password)
            .then(res => {
                toast.success('Log in successfully');
                navigate('/')
            })
            .catch(err => {
                toast.error(err.message); // Log the error message for debugging
                
            });





    }
    return (
        <div className="max-w-screen-xl mx-auto mt-10 px-7">
            <div className=" mx-auto p-5   md:w-3/5 lg:w-1/3 bg-slate-200 rounded-md">
                <h2 className="text-3xl font-semibold mb-8 text-center">Sign In</h2>

                <form onSubmit={handleSignin} className="space-y-7 ">
                    <div>
                        <input
                            className="outline-none border border-blue-700 w-full rounded-md py-2 px-2"
                            placeholder="Email Aeddress "
                            type="email"
                            name="email"
                            id="" required /><br />
                    </div>
                    <div className="relative">
                        <input
                            className="outline-none border border-blue-700 w-full rounded-md py-2 px-2"
                            placeholder="Password"

                            name="password"
                            id=""
                            required
                        />

                    </div>
                    <div>
                        <input className="mr-2" type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">Accept our <a href="" className="text-blue-700">terms</a> and <a href="" className="text-blue-700">condition</a></label>
                    </div>

                    <input className="w-full btn bg-blue-800 hover:bg-blue-600 text-white font-semibold" type="submit" value="Sign Up" />

                    <p>Ceate an acount ! <Link className="text-blue-800 font-semibold" to="/signup">Sign Up</Link> </p>
                </form>
                <SocialLogin></SocialLogin>

            </div>
        </div>
    );
};

export default SignIn;