import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {

        logOut()
            .then(() => alert('Successfully Logout'))
            .catch(err => console.log(err))
    }

    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                </div>
                <div className="flex-none gap-2">
                    <ul className="menu menu-horizontal px-1">
                        <li className='mr-5'><Link to="/">Home</Link></li>
                        <li className='mr-5'><Link to="/Login">Login</Link></li>
                        <li className='mr-5'><Link to="/Register">Register</Link></li>
                    </ul>
                    {
                        user &&
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-56">
                                <li>
                                    <a className="justify-between">
                                        {user.email}
                                        {/* <span className="badge">New</span> */}
                                    </a>
                                </li>
                                <li><a onClick={handleLogOut}>Logout</a></li>
                            </ul>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;