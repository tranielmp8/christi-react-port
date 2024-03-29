import { useState } from 'react';
import {Link} from 'react-scroll'
import {FaTimes} from 'react-icons/fa'
import { CiMenuFries } from "react-icons/ci"
import Cp4 from '../assets/images/cp4.png'


export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
  }
  const content = <>
    <div className='lg:hidden block absolute h-[100vh] top-16 w-full left-0 right-0 bg-[#E7DFD8] transition z-50 hamburger'>
      <ul className='text-center text-xl p-20'>
        <Link spy={true} smooth={true} to="Home">
          <li className='nav-link my-4 py-4 border-b  hover:bg-white hover:rounded'>Home</li>
        </Link>
        <Link spy={true} smooth={true} to="About">
          <li className='nav-link my-4 py-4 border-b  hover:bg-white hover:rounded'>About</li>
        </Link>
        <Link spy={true} smooth={true} to="Services">
          <li className='nav-link my-4 py-4 border-b  hover:bg-white hover:rounded'>Services</li>
        </Link>
        <Link spy={true} smooth={true} to="Projects">
          <li className='nav-link my-4 py-4 border-b  hover:bg-white hover:rounded'>Projects</li>
        </Link>
        <Link spy={true} smooth={true} to="Contact">
          <li className='nav-link my-4 py-4 border-b  hover:bg-white hover:rounded'>Contact</li>
        </Link>
       
      </ul>
    </div>
    </>
  return (
    <nav>
      <div className='h-5v nav-container flex justify-center items-center text-white lg:py-5 px-20  shadow-md'>
          {/* <a className='flex items-end rounded-full p-3  ml-10 logo' href="#">
            <h1 className=''>LOGO</h1>
          </a> */}
        <div className='lg:flex md:flex lg:  items-center justify-around font-normal hidden'>
          <div className='flex justify-center items-center'>
            <ul className='flex gap-9 mr-16 text-[16px] '>
            <Link className='' spy={true} smooth={true} to="Home">
              <li className='nav-link  transition hover:border-b-2 border-white hover:border-slate-200 cursor-pointer'>Home</li>
            </Link>
            <Link className='' spy={true} smooth={true} to="About">
              <li className='nav-link  transition hover:border-b-2 border-white hover:border-slate-300 cursor-pointer'>About</li>
            </Link>
            <Link className='' spy={true} smooth={true} to="Technology">
              <li className='nav-link  transition hover:border-b-2 border-white hover:border-slate-300 cursor-pointer'>Coaching</li>
            </Link>
            <Link className='' spy={true} smooth={true} to="Projects">
              <li className='nav-link hover:text-slate-600 transition hover:border-b-2 border-white cursor-pointer'><img src={Cp4} width={35} alt="" /></li>
            </Link>
            <Link className='' spy={true} smooth={true} to="Projects">
              <li className='nav-link  transition hover:border-b-2 border-white hover:border-slate-300 cursor-pointer'>Projects</li>
            </Link>
            <Link className='' spy={true} smooth={true} to="Contact">
              <li className='nav-link  transition hover:border-b-2 border-white hover:border-slate-300 cursor-pointer'>Contact</li>
            </Link>
            <Link className='' spy={true} smooth={true} to="Consult">
              <li className='nav-link  transition border-white cursor-pointer consult bg-[#6A7775] rounded-lg '>Free Consult</li>
            </Link>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block sm:hidden transition nav-icons' onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  )
}