import { useState } from "react";
import Headroom from "react-headroom";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // NavLinks
    const navLinks = <>
        <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#04111D] font-semibold' : 'text-[#4F4F4F] font-semibold'}>Home</NavLink>
        <NavLink to={"/features"} className={({ isActive }) => isActive ? 'text-[#04111D] font-semibold' : 'text-[#4F4F4F] font-semibold'}>Features</NavLink>
        <NavLink to={'/team'} className={({ isActive }) => isActive ? 'text-[#04111D] font-semibold' : 'text-[#4F4F4F] font-semibold'}>Team</NavLink>
        <NavLink to={'/about'} className={({ isActive }) => isActive ? 'text-[#04111D] font-semibold' : 'text-[#4F4F4F] font-semibold'}>About</NavLink>

        <NavLink to={'/contact'} className={({ isActive }) => isActive ? 'text-[#04111D] font-semibold' : 'text-[#4F4F4F] font-semibold'}>Contact</NavLink>
        <hr />
        <NavLink to={'/login'} className={({ isActive }) => isActive ? 'text-[#04111D] block md:hidden font-bold' : 'text-[#4F4F4F] font-bold md:hidden'}>Sign In</NavLink>
        <NavLink to={'/register'} className={({ isActive }) => isActive ? 'text-[#04111D] font-bold md:hidden' : 'text-[#4F4F4F] font-bold md:hidden'}>Sign Up</NavLink>
    </>

    return (
        <div className="shadow-sm ">
            {/* Header */}
            <Headroom className=""> <nav className=" border-b relative px-4 py-4 flex justify-between items-center bg-white">
                <a className="text-3xl font-bold leading-none flex items-center" href="#">
                    {/*  logo SVG goes here */}
                    <span className="w-[28px] h-[50px] bg-[#FFE900] z-[1]"></span>
                    <h1 className="-ml-2 text-[#022C54]">RapidLink</h1>
                </a>

                {/* Burger menu for small screens */}
                <div className="lg:hidden">
                    <button
                        className="navbar-burger flex items-center text-blue-600 p-3"
                        onClick={toggleMenu}
                    >
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>

                {/* Regular navigation links */}
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                    {/* Your navigation links go here */}
                    {navLinks}
                </ul>

                {/* Sign-in and Sign-up buttons */}
                <a
                    className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-3 text-sm text-gray-900 font-bold  rounded-xl transition cursor-pointer duration-200"

                >
                    Sign In
                </a>
                <Link to={'/register'}
                    className="hidden transition-all lg:inline-block py-1 px-2 hover:bg-[#FFE900] cursor-pointer border border-[#FFE900] mr-6 text-sm text-gray-900 font-bold rounded-md  duration-200"
                >
                    Sign up
                </Link>
            </nav></Headroom>

            {/* Mobile menu */}
            <div className={`navbar-menu relative  z-50 ${isMenuOpen ? '' : 'hidden'}`}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={toggleMenu}></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col max-w-sm py-6 space-y-2 px-6 bg-white border-r overflow-y-auto w-1/2">
                    {/* Mobile menu content */}
                    {navLinks}
                    {/* ... */}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
