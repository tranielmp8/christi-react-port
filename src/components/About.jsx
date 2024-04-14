import Img4 from '../assets/images/img4.png'
// import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div id="About" className="about flex flex-col items-center p-3 mb-9">
        <h1 className='text-center text-[67px] mb-7 text-[#e2c2b3]'>Coach Christi </h1>
        <div className="about-grid flex justify-center items-center bg-white w-[72%]">
            <div className='text-[57px] font-bold p-3  text-[#403234] text-center '>
                Y O U R
                <br /> 
                <p className=''>
                  E M P O W E R M E N T
                </p>
                <p className=''>
                  C O A C H
                </p>
            </div>
            <img  src={Img4} width={475} alt="Christi" className='bg-[#403234] shadow-md' />
            <div className='w-[35%] ml-4 text-[#403234] about-text ' >
                <p className=''>I wasn&#39;t always the confident, empowered woman I am today. I once found myself in the relentless grip of fear, bound by its overwhelming power and feeling held back from fully embracing my true potential and walking boldly in my calling.</p>
                <br />
                <p className=''>Yet, through the journey of faith, prayer, renewal, and inner strength, I broke free from its hold. Now, I empower women to conquer their fears and step boldly into their God-given assignments with confidence and power.&quot;</p>
            </div>
        </div>
        {/* <Link to="/about-me" > */}
        {/* <Link to="#" >
          <button className='abt-btn text-[27px] m-9 border-2 border-white   font-semibold rounded-xl hover:border-2 hover:text-[#e2c2b3] hover:border-[#e2c2b3] hover:bg-transparent'>My Story</button>
        </Link>
         */}
    </div>
  )
}
