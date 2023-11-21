import { Link, NavLink } from "react-router-dom";
import userDefault from '../../assets/userDefault.png';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/price'}>Price</NavLink></li>
        <li><NavLink to={'/pastEvents'}>Past Events</NavLink></li>
    </>

    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(userCredential => {
                console.log(userCredential.user)
            })
            .catch(error => {
                console.error(error);
            })
    }
    
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="border-2 border-teal-800 rounded-full">
                                
                                <FaUserAlt className="text-4xl p-1"></FaUserAlt>
                            </div>
                        </label>
                    </div>
                    {
                        user ?
                            <button onClick={handleLogout} className="btn">sign out</button>
                            :
                            <Link to={'/login'}>
                                <button className="btn">Log in / Register</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;