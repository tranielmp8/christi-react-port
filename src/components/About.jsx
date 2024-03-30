import Img4 from '../assets/images/img4.png'

export default function About() {
  return (
    <div id="About" className="about flex flex-col items-center p-7">
        <h1 className='text-center text-[48px] mb-7 text-[#6A7775]'>Meet Christi Pride</h1>
        <div className="about-grid flex justify-center items-center bg-white w-[72%]">
            <div className='text-[60px] pt-9 mr-9 text-[#6A7775]'>
                C O A C H <br />C H R I S T I
            </div>
            <img  src={Img4} width={420} alt="Christi" className='bg-[#6A7775] shadow-md' />
            <div className='w-[25%] ml-12 text-[#6A7775] about-text ' >
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae repudiandae commodi natus, sed enim odio fugit? Libero consequatur accusamus id.</p>
                <br />
                <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quam quasi quis. Ab quidem dolorum porro ratione quos eaque voluptatum veniam rem.</p>
            </div>
        </div>
        <button className='abt-btn text-[27px] m-7 bg-[#E7DFD8] rounded-xl hover:border-2 hover:border-white hover:bg-transparent'>My Story</button>
        
    </div>
  )
}
