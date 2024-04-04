import Img5 from '../assets/images/img5.png'

export default function Subscribe() {
  return (
    <div>
        <div className="subscribe-container flex items-center justify-end">
            <div className="left-subscribe mr-9">
              <h2 className='text-[48px] mb-9 text-center text-[#E7DFD8]'>EmpowerHer 
                <p className='text-[35px] sub-header'>
                Be Bold | Be Confident | Be Powerful
                </p>
              </h2>
            <div className='ml-2 border-l-8 border-[#E7DFD8] subscribe-text'>
                <p className='mb-5 pl-2 text-[18px] text-white'>Committing to improving confidence is indeed a powerful journey that starts with self-awareness and a determination to grow personally. It's about recognizing your own worth and refusing to settle for anything less than you deserve. It's about realizing that you have the power to shape your own destiny and to pursue your dreams with unwavering determination.</p>
                <p className='mb-5 pl-2 text-white'>
                Are you ready to step into a life filled with confidence, purpose, and spiritual abundance? Let's embark on this journey together. Schedule your complimentary consultation today and take the first step toward becoming the best version of yourself.</p>
                <button className='subscribe-btn ml-2 rounded-xl text-2xl hover:border-2 hover:border-white hover:bg-transparent' >Subscribe</button>
                </div>
            </div>

            <div className="right-subscribe border-3 ">
                <img width={600} src={Img5} alt="Full Christi" />
            </div>
            
        </div>
    </div>
  )
}
