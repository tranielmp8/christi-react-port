
import { FaGithub, FaDiscord, FaLinkedinIn } from 'react-icons/fa'
import cp6 from '../assets/images/cp6.png'

export default function Footer() {
  return (
    <footer id='Footer' className='bg-white  text-[#687775]   mt-7  flex flex-col'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 items-center mr-8'>
        {/* <div className='mb-4 md:mb-0'>
          <span className='text-3xl font-semibold text-red-800 py-2 uppercase'>Logo</span>
          <p className='text-[16px] py-4 my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, laudantium.</p>
        </div> */}
        <div>
          <img src={cp6} alt="" className='' width={100} />
        </div>
        <div className='md:mb-0'>
          <h2 className='text-[22px] font-semibold text-[#6A7775] py-2 uppercase'>Contact</h2>
          <p className='text-[16px] text-[#6A7775] my-4'>Email: mrs.christipride@gmail.com</p>
        </div>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-[22px] font-semibold text-[#6A7775] py-2 uppercase'>Follow Me</h2>
          <div className='flex space-x-4 my-4'>
            <a className='foot-icon  text-xl text-[#6a7775] rounded-full p-2  shadow-lg hover:text-gray-500 transition-all duration-150 ease-in-out' href="https://github.com/tranielmp8" target='_blank'>
              <FaGithub />
            </a>
            <a className='foot-icon text-xl text-[#6a7775] rounded-full p-2 shadow-lg hover:text-gray-500 transition-all duration-150 ease-in-out' href="https://www.linkedin.com/in/traniel-pride/" target='_blank'>
              <FaLinkedinIn />
            </a>
            
            <a className='foot-icon text-xl text-[#6a7775] rounded-full p-2 shadow-lg hover:text-gray-500 transition-all duration-150 ease-in-out' href="#footer" onClick={() => alert('My Discord Alias: kakashi_sensei#8333')}>
              <FaDiscord />
              {}
            </a>
          </div>
        </div>
        
      </div>
      <h3 className='text-2xl flex items-center justify-center pb-5 footer-copy'>
        ChristiPride - &#169; 2024 -
        </h3>
    </footer>
  )
}
