import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import Hamburger from "hamburger-react";
import logo from '../assets/logo.png';
import profilePhoto from '../assets/others/profile.png'


const NavBar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className='bg-[#FFF9F9] border-gray-200'>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 md:px-16 lg:px-0">
                <Link to='/home/all-group'>
                    <img src={logo} alt="" />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="z-20 inline-flex items-center ml-3 text-sm text-gray-800 rounded-lg md:hidden border-2 border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false" onClick={() => { setOpen(!isOpen) }}>
                    <Hamburger size={25}></Hamburger>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex items-center p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <NavLink to='/home/group' className={({ isActive }) => isActive ? 'text-[#38406E] font-medium' : 'text-gray-800'}>
                            <li>Availability</li>
                        </NavLink>
                        <NavLink to='/integration' className={({ isActive }) => isActive ? 'text-[#38406E] font-medium' : 'text-gray-800'}>
                            <li>Integration</li>
                        </NavLink>
                        <NavLink to='/home/group-dashboard' className={({ isActive }) => isActive ? 'text-[#38406E] font-medium' : 'text-gray-800'}>
                            <li>Community</li>
                        </NavLink>
                        <li className="relative -mr-4 cursor-pointer">
                            <span className="border border-black p-2 rounded-full flex"><FaRegBell size={22} /></span>
                            <p className="absolute top-0 right-0">
                                <span className="bg-blue-500 text-white p-1 rounded-full text-sm">3</span>
                            </p>
                        </li>
                        <li>
                            <img className='w-10 h-10 object-cover rounded-full cursor-pointer' src={profilePhoto} alt="User" />
                        </li>
                    </ul>
                </div>
                <ul className={`font-medium p-4 pt-3 grid gap-4 w-44 border text-center border-gray-300 rounded-lg bg-[#FFF9F9] md:hidden absolute duration-500 z-10 ${isOpen ? 'right-2 top-20' : 'right-2 -top-64'}`}>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#38406E] font-medium' : 'text-gray-800'}>
                        <li>Availability</li>
                    </NavLink>
                    <NavLink to='/instructors' className={({ isActive }) => isActive ? 'text-[#38406E] font-medium' : 'text-gray-800'}>
                        <li>Integration</li>
                    </NavLink>
                    <NavLink to='/classes' className={({ isActive }) => isActive ? 'text-[#38406E] font-medium' : 'text-gray-800'}>
                        <li>Community</li>
                    </NavLink>
                    <li className="relative mx-auto inline-block">
                        <span className="border border-black p-2 rounded-full flex"><FaRegBell size={22} /></span>
                        <p className="absolute top-0 right-0">
                            <span className="bg-blue-500 text-white p-1 rounded-full text-sm">3</span>
                        </p>
                    </li>
                    <li>
                        <img className='w-10 h-10 object-cover rounded-full cursor-pointer mx-auto' src={profilePhoto} alt="User" />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;