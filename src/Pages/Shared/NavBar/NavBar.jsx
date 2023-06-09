import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../Provider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                localStorage.removeItem('car-access-token')
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });
    }
    const navLink = <>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Services</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Contact</Link></li>
        {
            user?. email ? <li><Link to='/bookings'>Bookings</Link></li> : <></>
        }
    </>
    return (
        <div>
            <div className="navbar bg-base-100 h-[90px]">
                <div className="navbar-start h-full">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost h-full normal-case text-xl">
                        <img className='w-full h-full' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex h-full">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end h-full">
                    {
                        user?.email ? <button onClick={handleLogOut} className='btn btn-primary'>LogOut</button> : <Link to='/login'><button className='btn btn-primary'>Login</button></Link>
                    }

                    <Link className=" ml-10 btn btn-outline btn-primary">Appointment</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;