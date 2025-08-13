import React, { useEffect, useState } from 'react'
import { TiHeart } from "react-icons/ti";
import { HiShoppingBag } from "react-icons/hi";
import { IoSearch, IoMenu } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from 'react-icons/tb';

const Nav_bar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [iscrolled, setiscrolled] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    useEffect(() => {
        const handleScroll = () => {
            setiscrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll) }
    }, []);


    return (
        <div>
            <header className={`fixed w-full backdrop-blur-sm z-20 ${iscrolled ? 'shadow-lg' : ''} bg-white/50`}>
                <nav className='max-w-[1400px] md:h-[14vh] h-[12vh] px-10 mx-auto flex items-center justify-between'>

                    {/* NAV LOGO */}
                    <a href="#" className='text-3xl font-semibold'><span className='text-orange-500 uppercase'>B.B</span>uddy</a>

                    {/* Home Menu */}
                    <ul className='gap-x-10 items-center md:flex hidden'>
                        <li><a href="#" className='font-semibold tracking-wider text-orange-500 hover:text-orange-500'>Home</a></li>
                        <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About us</a></li>
                        <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
                        <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact us</a></li>
                    </ul>

                    {/* Right Nav Bar */}
                    <div className='items-center gap-5 flex'>

                        {/* Search bar */}
                        <div className='hidden md:flex p-1 border-2 border-orange-500 rounded-full'>
                            <input type="text" placeholder='Search....' autoComplete='off'
                                className='flex-1 h-[5vh] px-3 focus:outline-none' />
                            <button className='bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-[5vh] justify-center items-center flex rounded-full text-xl'>
                                <IoSearch />
                            </button>
                        </div>

                        <a href="#" className='text-zinc-800 text-2xl'><TiHeart /></a>
                        <a href="#" className='text-zinc-800 text-2xl'><HiShoppingBag /></a>

                        {/* Hamburger Icon */}
                        <button className='text-zinc-800 text-2xl md:hidden' onClick={toggleMenu}>{showMenu ? <TbMenu3 /> : <TbMenu2 />}</button>

                        {/* Mobile Menu */}
                        <ul className={`flex-col flex gap-y-4 items-center md:hidden absolute bg-orange-500/50 shadow-xl backdrop-blur-2xl backdrop-brightness-90 backdrop-contrast-125 rounded-xl top-14 transform -translate-x-1/2 transition-all duration-300 ${showMenu ? 'left-1/2' : '-left-full'}`}>

                            <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Home</a></li>
                            <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About us</a></li>
                            <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
                            <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact us</a></li>
                            <li className='md:hidden flex p-1 border-2 border-orange-500 rounded-full'>
                                <input type="text" placeholder='Search....' autoComplete='off'
                                    className='flex-1 h-[5vh] px-3 focus:outline-none' />
                                <button className='bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 justify-center items-center flex rounded-full text-xl'>
                                    <IoSearch />
                                </button>
                            </li>
                        </ul>

                    </div>

                </nav>
            </header>

            {/* Spacer */}
            <nav className='w-full md:h-[14vh] h-[12vh]'></nav>
        </div>
    )
}

export default Nav_bar;
