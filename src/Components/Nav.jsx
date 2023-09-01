import {headerLogo} from '../assets/images'
import {close, hamburger} from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'

export default function Nav() {
    const [showNav, setShowNav] = useState(false)
    const navHandler = () =>{
        setShowNav(prev => !prev)
        console.log(showNav)
    }

  return (
    <header className='padding-x py-8
    absolute z-10 w-full'>
        <nav className='flex justify-between
         items-center max-container'>
            <a href="/">
                <img src={headerLogo}
                 alt="Logo"
                 width={130}
                 height={29} />
            </a>
            <ul className='flex-1 flex justify-center
            items-center gap-16 max-lg:hidden
             '>
                {navLinks.map((item) =>(
                    <li key={item.label}>
                        <a href={item.href}
                        className='font-montserrat
                        leading-normal text-lg
                        text-slate-gray'>
                             {item.label}   
                        </a>
                    </li>
                ))}
            </ul>
            <div>
                <img className='hidden 
                max-lg:block cursor-pointer'
                 src={hamburger} 
                alt="hamburger"
                width={25}
                height={25} 
                onClick={navHandler}
                />
            </div>
            <div className={`absolute top-0 left-0 w-full bg-white  list-none 
                    p-7 flex flex-col gap-8 transform translate-y-[-100%]  
                ${showNav ? 'translate-y-[0%] shadow-2xl': ''} transition-all text-center  min-[1024px]:hidden`}>
                    {navLinks.map((item) =>(
                        <li key={item.label} className='hover:scale-110 transform transition-all font-bold'>
                            <a href={item.href}
                            className='font-montserrat
                            leading-normal text-lg
                            text-slate-600'>
                                {item.label}   
                            </a>
                        </li>
                    ))}
                    <img className=' 
                     cursor-pointer absolute right-7 top-7'
                    src={close} 
                    alt="close"
                    width={20}
                    height={20} 
                    onClick={navHandler}
                    />
            </div>
        </nav>
    </header>
  )
}
