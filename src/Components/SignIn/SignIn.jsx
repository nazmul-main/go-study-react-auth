import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-10 ">
            <div className=" mx-auto w-1/3 p-5 bg-slate-200 rounded-md">
                <h2 className="text-3xl font-semibold mb-8 text-center">Sign In</h2>

                <form className="space-y-7 ">
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

            </div>
        </div>
    );
};

export default SignIn;