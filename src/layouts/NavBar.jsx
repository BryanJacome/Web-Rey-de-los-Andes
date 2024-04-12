import React, { useState } from 'react'
import logo from "../images/Logo.png"
import { ThemeSwitcher } from '../assets/ThemeSwitcher'
import MenuBar from '../assets/MenuBar';

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);

    const handleSection = (section) => {
        window.location.href = `#${section}`;
    };

    return (
        <div className={`w-full p-5 rounded-lg h-20 flex items-center justify-between fixed z-[100] ${isScrolled ?
            'm-4  ease-in duration-500 bg-[white]/80 dark:bg-[black]/80'
            : 'mt-2  fixed ease-out duration-200 bg-transparent'}`}
            style={{ width: isScrolled ? "calc(100% - 33px)" : "100%" }}
        >
            <div className='md:hidden'><MenuBar /></div>
            <img src={logo} alt='Logo rey de los andes' onClick={() => handleSection('')} className='max-w-40 cursor-pointer' />
            <ul className='hidden md:flex list-none text-center'>
                <li className='cursor-pointer mr-5 text-base hover:text-sky008' onClick={() => handleSection('')} >Inicio</li>
                <li className='cursor-pointer mr-5 text-base hover:text-sky008' onClick={() => handleSection('Nosotros')} >Nosotros</li>
                <li className='cursor-pointer mr-5 text-base hover:text-sky008' onClick={() => handleSection('Productos')}>Productos</li>
                <li className='cursor-pointer mr-5 text-base hover:text-sky008' onClick={() => handleSection('Contacto')}>Contactanos</li>
            </ul>
            <div className='order-last'><ThemeSwitcher /></div>
        </div>
    )
}
