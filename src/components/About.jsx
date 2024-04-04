import Img4 from '../assets/images/img4.png'

export default function About() {
  return (
    <div id="About" className="about flex flex-col items-center p-3">
        <h1 className='text-center text-[48px] mb-7 text-[#6A7775]'>Meet Christi Pride</h1>
        <div className="about-grid flex justify-center items-center bg-white w-[72%]">
            <div className='text-[72px] font-bold p-3  text-[#6A7775] '>
                C O A C H 
                <br /> 
                <p className='text-[72px]'>
                  C H R I S T I
                </p>
            </div>
            <img  src={Img4} width={475} alt="Christi" className='bg-[#6A7775] shadow-md' />
            <div className='w-[30%] ml-4 text-[#6A7775] about-text ' >
                <p className=''>I wasn't always the confident, empowered woman I am today. I struggled with self-doubt, insecurity, and fear, feeling held back from fully embracing my true potential and walking boldly in my calling.</p>
                <br />
                <p className=''>However, through dedication, and perseverance, I Christi embarked on a profound journey of self-discovery and growth. I learned to challenge my limiting beliefs, embrace failure as a steppingstone to success, and cultivate resilience in the face of adversity.
                Empowering other women to find their strength and ignite their confidence. I understand the unique challenges women face in today's world and I’m committed to providing them with the tools, strategies, and support they need to overcome self-doubt, step into their power, and create a life filled with purpose and passion.</p>
            </div>
        </div>
        <button className='abt-btn text-[27px] m-7 font-semibold bg-[#E7DFD8] rounded-xl hover:border-2 hover:border-white hover:bg-transparent'>My Story</button>
        
    </div>
  )
}
