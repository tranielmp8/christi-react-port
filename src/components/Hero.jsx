import Img1 from '../assets/images/words1.png'
// import Img2 from '../assets/images/img2.png'
import Img13 from '../assets/images/13.png'


export default function Hero() {
  return (
    <div id="Hero" className="hero  mt-3 mb-8">
        <div className="hero-container flex   gap-8 mt-3  justify-center">
          <div className="image-container flex justify-start  ">
            <img width={550} className='hero-img' src={Img13} alt="Christi" />
            
          </div>
          
          <div className="hero-text flex flex-col mt-7">
            <div className='hero-header'>
              <h1 className="text-[72px] mb-2 text-white 
              text-center font-light">EMPOWERED <br /> TO  OVERCOME
              
              </h1>
              <div className='text-container '>
               <img width={450} src={Img1} alt="Hero text" />
              </div>
              
            </div>
            <p className='text-[25px] text-white ml-36'>Empowering Women <br /> to Discover Their Divine Purpose <br /> and Walk Boldly in Confidence</p>
            {/* <button className='mt-7 p-2 bg-[#E7DFD8] rounded-lg text-white text-[22px] hover:border-2 hover:border-white hover:bg-transparent'>Signup Now!</button> */}
          </div>
        </div>
    </div>
  )
}
