
import { FaTiktok, FaInstagram, FaFacebook, FaYoutube} from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import CPBrown from '../assets/images/cpbrown.png'

export default function Footer() {
  return (
    <footer id='Footer' className='bg-white  text-[#403234]   mt-7  flex flex-col'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 items-center mr-8'>
        {/* <div className='mb-4 md:mb-0'>
          <span className='text-3xl font-semibold text-red-800 py-2 uppercase'>Logo</span>
          <p className='text-[16px] py-4 my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, laudantium.</p>
        </div> */}
        <div>
          <img src={CPBrown} alt="" className='' width={100} />
        </div>
        <div className='md:mb-0'>
          <h2 className='text-[27px] font-semibold text-[#403234] py-2 uppercase'>Contact</h2>
          <p className='text-[16px] text-[#403234] my-1 flex gap-2 items-center'>
           <span className='text-[22px]' ><MdOutlineMail /></span> 
            christi@christipride.com</p>
        </div>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-[22px] font-semibold text-[#403234] ml-4 py-2 uppercase'>Follow Me</h2>
          <div className='flex space-x-4 my-4'>
            <a className='foot-icon  text-xl text-[#403234] rounded-full p-2  shadow-lg transition-all duration-150 ease-in-out' href="https://www.tiktok.com/@christipride" target='_blank'>
              <FaTiktok />
            </a>
            <a className='foot-icon text-xl text-[#403234] rounded-full p-2 shadow-lg  transition-all duration-150 ease-in-out' href="https://www.instagram.com/christipride/" target='_blank'>
              <FaInstagram />
            </a>
            <a className='foot-icon text-xl text-[#403234] rounded-full p-2 shadow-lg  transition-all duration-150 ease-in-out' href="https://www.facebook.com/profile.php?id=61556236876257  " target='_blank'>
              <FaFacebook />
            </a>
            <a className='foot-icon text-xl text-[#403234] rounded-full p-2 shadow-lg  transition-all duration-150 ease-in-out' href="https://www.youtube.com/channel/UC6oKD84O8hr5FJGoVlTtnmA/videos" target='_blank'>
              <FaYoutube />
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
