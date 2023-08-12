import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';

const NavBar = () => {
    const { handleLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    const HandleLogOutButton = (e) => {
        e.preventDefault();
        handleLogout();
        localStorage.removeItem('userdata');
        navigate('/login');
    }

  return (
    <div>
        <div className="navbar bg-base-100 w-1/3 fixed z-20">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl">Chatlingo</Link>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                </div>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 flex rounded-full text-center justify-center items-center">
                    <img src="https://img.icons8.com/fluency/48/000000/user-female-circle.png" alt="user-female-circle" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {/* <li>
                    <Link className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </Link>
                    </li>
                    <li><Link>Settings</Link></li> */}
                    <li><button onClick={HandleLogOutButton}>Logout</button></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar