import Img5 from '../assets/images/img5.png'

export default function Empower() {
  return (
    <div>
        <div id='Empower' className="empower-container flex items-center justify-center ">
            <div className="left-empower mr-9">
              <h2 className='text-[48px] mb-9 text-center text-[#e2c2b3]'>EmpowerHer 
                <p className='text-[35px] sub-header'>
                Bold | Confident | Powerful
                </p>
              </h2>
            <div className='ml-2 border-l-8 border-[#e2c2b3] empower-text'>
                <p className='mb-5 pl-2  text-white'>Embarking on the journey of empowerment is a transformative commitment, rooted inself-awareness and an unwavering dedication to personal growth. It&#39;s about recognizing your inherent value and refusing to settle for anything less than what you deserve. You hold the power to shape your own destiny and pursue your dreams with relentless
determination.</p>
                <p className='mb-5 pl-2 text-white'>
                Are you ready to step into a life overflowing with confidence, purpose, and spiritual abundance? Let&#39;s embark on this empowering journey together. Book your complimentary coaching session today and take the first empowering step towards unlocking your full potential Sites section.</p>
                <button className='empower-btn ml-2 rounded-xl text-2xl border-2 border-white hover:border-[#e2c2b3] hover:text-[#e2c2b3] hover:bg-transparent' >
                  <a href="https://app.paperbell.com/checkout/bookings/new?package_id=74288" target='_blank'> Free Consult
                  </a>
                </button>
                </div>
            </div>

            <div className="right-empower border-3  ">
                <img width={600} src={Img5} alt="Full Christi" />
            </div>
            
        </div>
    </div>
  )
}
