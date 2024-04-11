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
                <p className='mb-5 pl-2 text-[18px] text-white'>Embarking on the journey of empowerment is a transformative commitment, rooted inself-awareness and an unwavering dedication to personal growth. It&#39;s about recognizing your inherent value and refusing to settle for anything less than what you deserve. You hold the power to shape your own destiny and pursue your dreams with relentless
determination.</p>
                <p className='mb-5 pl-2 text-white'>
                Are you ready to step into a life overflowing with confidence, purpose, and spiritual abundance? Let&#39;s embark on this empowering journey together. Book your complimentary coaching session today and take the first empowering step towards unlocking your full potential Sites section.</p>
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
