import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate(); // Hook to programmatically navigate

    const handleLoginClick = () => {
        navigate('/login');
        setIsMenuOpen(false); // Close the menu after navigation
    };

    return (
        <div className='sticky top-0 bg-white shadow-md z-10'>
            <div className='relative flex justify-between items-center mx-2 p-4 shadow-md'>
                <div>
                    <h1 className='text-3xl font-extrabold'>
                        Shop<span className='text-yellow-500'>IT</span>
                    </h1>
                </div>
                <div className='hidden md:flex gap-4 mt-2 items-center'>
                    <ul className='flex gap-4'>
                        <Link to={'/'}><li className='hover:text-yellow-500 cursor-pointer'>Home</li></Link>
                        <Link to={'/about'}><li className='hover:text-yellow-500 cursor-pointer'>About</li></Link>
                        <Link to={'/contact'}><li className='hover:text-yellow-500 cursor-pointer'>Contact</li></Link>
                        <Link to={'/product'}><li className='hover:text-yellow-500 cursor-pointer'>Products</li></Link>
                        <Link to={'/cart'}><li className='hover:text-yellow-500 cursor-pointer'>Cart</li></Link>
                    </ul>
                    <button 
                        onClick={handleLoginClick}
                        className='px-4 py-2 rounded-md bg-yellow-600 text-white hover:bg-yellow-800 duration-300 cursor-pointer hover:text-xl'>
                        Login
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden flex items-center'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-2xl'>
                        {isMenuOpen ? <IoMdClose /> : <AiOutlineMenu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className='bg-white absolute top-16 right-2 w-48 rounded-md shadow-lg md:hidden'>
                        <ul className='flex flex-col gap-4 p-4'>
                            <Link to={'/'}><li className='hover:text-yellow-500 cursor-pointer'>Home</li></Link>
                            <Link to={'/about'}><li className='hover:text-yellow-500 cursor-pointer'>About</li></Link>
                            <Link to={'/contact'}><li className='hover:text-yellow-500 cursor-pointer'>Contact</li></Link>
                            <Link to={'/product'}><li className='hover:text-yellow-500 cursor-pointer'>Products</li></Link>
                            <li>
                                <button 
                                    onClick={handleLoginClick} 
                                    className='w-full px-4 py-2 rounded-md bg-yellow-600 text-white hover:bg-yellow-800 duration-300 cursor-pointer'>
                                    Login
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
