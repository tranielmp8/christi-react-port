import Img5 from '../assets/images/img5.png'

export default function Subscribe() {
  return (
    <div>
        <div className="subscribe-container flex items-center justify-end">
            <div className="left-subscribe mr-9">
            <h2 className='text-[48px] mb-9 text-[#E7DFD8]'>Vision and Purpose</h2>
            <div className='ml-2 border-l-8 border-[#E7DFD8] subscribe-text'>
                <p className='mb-5 text-[22px] pl-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, tempore.</p>
                <p className='mb-5 pl-2 text-[18px] text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla dolores minima facilis in esse deserunt voluptatem laboriosam ipsum reiciendis blanditiis, perferendis amet alias. Possimus aliquid minima, quidem ullam laudantium quos.</p>
                <p className='mb-5 pl-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iure.</p>
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
