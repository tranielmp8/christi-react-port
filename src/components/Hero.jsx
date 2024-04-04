import Img1 from '../assets/images/img1.png'
// import Img2 from '../assets/images/img2.png'
import Img3 from '../assets/images/img3.png'


export default function Hero() {
  return (
    <div id="Hero" className="hero h-screen mt-7">
        <div className="hero-container flex  items-center gap-8 mt-7">
          <div className="image-container flex justify-start p-12 ">
            <img width={720} className='' src={Img1} alt="laptop with coffee" />
            <img 
            src={Img3} 
            alt="teacher" 
            width={525}
            className='teacher bg-[#E7DFD8] absolute p-1'
            />
          </div>
          
          <div className="hero-text flex flex-col ml-96">
            <div className=''>
              <h1 className="text-[56px] mb-2 text-[#E7DFD8]">Unleash Your <br />Confidence</h1>
              <div className='text-container text-xl ml-5'>
                <p>Discover Your Strength <br /> Ignite Your Confidence</p>
              </div>
            </div>
            <button className='mt-7 p-2 bg-[#E7DFD8] rounded-lg text-white text-[22px] hover:border-2 hover:border-white hover:bg-transparent'>Signup Now!</button>
          </div>
        </div>
    </div>
  )
}
