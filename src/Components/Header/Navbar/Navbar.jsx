import { Link, NavLink } from "react-router-dom"


const Navbar = () => {

    const navLink = <>


        <li><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}> HOME</NavLink>
        </li>
        <li><NavLink to="/courses" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}> Courses</NavLink>
        </li>
        <li><NavLink to="/blog" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}> Blog</NavLink>
        </li>
        <li><NavLink to="/contact" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}> Concant</NavLink>
        </li>
       

    </>



    return (
        <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul  className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-700 w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">GoStudy</a>
            </div>
            <div className="navbar-center hidden lg:flex items-start">
                <ul className="menu menu-horizontal px-1">
                    {navLink}

                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/signin' className=" px-4 py-1 rounded-md bg-red-500 text-white ">Login</Link>
            </div>
            
        </div>
    );
};

export default Navbar;