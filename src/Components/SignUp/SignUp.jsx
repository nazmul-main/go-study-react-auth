
import { Link } from "react-router-dom";
import SocialLogin from "../Social/SocialLogin";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";


const SignUp = () => {

    const { createuser } = UseAuth();
    const handleSubmit = (e) => {
        e.preventDefault();

        /* get feild values */
        const name = e.target.name.value
        const email = e.target.email.value
        const img = e.target.img.value
        const password = e.target.password.value

        console.log(name ,email ,password);

        /* password validation */
        if (password.length < 6) {
            toast.error('is less than 6 characters');
            return;
        }
        
        if (!/[A-Z]/.test(password)) {
            toast.error("don't have a capital letter");
            return;
        }
        
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)){
            toast.error("don't have a special character");
            return;
        }

    }

    return (
        <div className="max-w-screen-xl mx-auto mt-10 px-7">
            <div className=" mx-auto md:w-3/5 lg:w-1/3 p-5 bg-slate-200 rounded-md">
                <h2 className="text-3xl font-semibold mb-8 text-center">Sign up</h2>

                <form onSubmit={handleSubmit} className="space-y-7 ">
                    <div>
                        <input
                            className="outline-none border border-blue-700 w-full rounded-md py-2 px-2"
                            placeholder="Your Name "
                            type="name"
                            name="name"
                            id="" required /><br />
                            
                    </div>
                    <div>
                        <input
                            className="outline-none border border-blue-700 w-full rounded-md py-2 px-2"
                            placeholder="Email Aeddress "
                            type="email"
                            name="email"
                            id="" required /><br />
                    </div>
                    <div>
                        <input
                            className="outline-none border border-blue-700 w-full rounded-md py-2 px-2"
                            placeholder="Image URL (Optional) "
                            type="text"
                            name="img"
                            id="" /><br />
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

                    <p>Aready have an acount <Link className="text-blue-800 font-semibold" to="/signin">Login</Link> </p>
                </form>
                <SocialLogin></SocialLogin>

            </div>
        </div>
    );
};

export default SignUp;