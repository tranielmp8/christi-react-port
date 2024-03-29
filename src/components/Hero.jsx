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
            className='teacher bg-[#6A7775] absolute p-1'
            />
          </div>
          
          <div className="hero-text flex flex-col ml-80">
            <div className=''>
              <h1 className="text-[56px] mb-2 text-[#6A7775]">Life <br />Coaching</h1>
              <div className='text-container'>
                <p className="text-white text-lg mb-2">Enpowering Women <br /> to Discover Their Divine Purpose <br /> and Walk Boldy in Confidence</p>
              </div>
            </div>
            <button className='mt-7 p-2 bg-[#6A7775] rounded-lg text-white text-[22px]'>Signup Now!</button>
          </div>
        </div>
    </div>
  )
}
