import { Link, NavLink } from "react-router-dom"
import UseAuth from "../../../Hooks/UseAuth";

const navLink = <>


    <li><NavLink to="/" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-red-500 font-semibold underline" : "hover:text-red-500 font-semibold"}> Home</NavLink>
    </li>
    <li><NavLink to="/courses" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-red-500 font-semibold underline" : "hover:text-red-500 font-semibold"}> Courses</NavLink>
    </li>
    <li><NavLink to="/blog" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-red-500 font-semibold underline" : "hover:text-red-500 font-semibold"}> Blog</NavLink>
    </li>
    <li><NavLink to="/contact" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-red-500 font-semibold underline" : "hover:text-red-500 font-semibold"}> Concant</NavLink>
    </li>


</>
const Navbar = () => {
    const { user, logout } = UseAuth()

    return (
        <div className="navbar bg-base-100 max-w-screen-xl mx-auto my-4 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-sm lg:hidden mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul className="  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-700 w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to={'/'} className="normal-case text-xl">
                    <img className=" w-32 md:w-40" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQVRnblhtYIoKaKF5HD1G3bW1-mbyvKzdprZ6jj5GILrpXqHhjX" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex items-start">
                <ul className=" gap-10 menu-horizontal px-1">
                    {navLink}

                </ul>
            </div>
            {
                user?.email ? <div className="navbar-end">
                    <div className="dropdown dropdown-end mr-4">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt={user.displayName} />
                            </div>
                        </label>
                        <ul tabIndex={0} className=":  dropdown-content mt-3 z-[1] p-2 shadow bg-green-200 rounded-b-full rounded-l-full py-2 px-4">
                            <li>
                                <h3 className=" font-semibold "> {user.displayName
                                }</h3>

                            </li>
                            <li>
                                <h3 className="font-semibold  ">{user.email
                                }</h3>

                            </li>
                        </ul>

                    </div>
                    <Link onClick={logout} className=" px-4 py-1 rounded-md bg-red-500 text-white ">Logout</Link>
                </div> : <div className="navbar-end">
                    <Link to='/signin' className=" px-4 py-1 rounded-md bg-red-500 text-white ">Login</Link>
                </div>
            }

        </div>
    );
};

export default Navbar;
