import Site1 from '../assets/images/site1.png'
import Site2 from '../assets/images/site2.png'
import Site3 from '../assets/images/site3.png'

export default function Sites() {
  return (
    <div id='Sites' className='sites p-16 flex flex-col min-h-screen items-center justify-center bg-white '>
      <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal  text-[#6A7775] site-header'>Visit the Sites</h1>
      <div data-aos='fade-up' className='cards grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-7'>
        <div className='w-80 rounded-xl card text-white p-2 shadow-lg project-container'>
          <img  height={350} width={300} className='bg-white rounded-xl border-2 border-[#6A7775]' src={Site1}  alt="courses" />
          <div >
            <h2 className='text-[32px] text-[#6A7775] flex items-center justify-center'>Unleash Your <br /> Confidence</h2>
            <p className='p-2 text-gray-400'>Designed to help women discover who they are and their divine purpose. Through personalized guidance and self-discovery exercises, uncover your unique gifts and talents, and gain clarity on your path forward. </p>
          </div>
        <button className=' m-2 rounded-lg p-2 bg-[#6A7775]'><a href="#">Visit</a></button>

        </div>
        <div className='w-80 rounded-xl card text-white p-2 shadow-lg project-container'>
          <img  height={350} width={300} className='bg-white rounded-xl border-2 border-[#6A7775]' src={Site2}  alt="courses" />
          <div >
            <h2 className='text-[32px] text-[#6A7775] flex items-center justify-center'>Spiritual <br /> Development</h2>
            <p className='p-2 text-gray-400'>Deepen your spiritual connection and discover how biblical principles and effective prayer can guide you toward a life of purpose and fulfillment. Explore your faith in a supportive and empowering environment, unlocking the power of prayer to strengthen your spiritual life. </p>
          </div>
        <button className=' m-2 rounded-lg p-2 bg-[#6A7775]'><a href="#">Visit</a></button>

        </div>
        <div className='w-80 rounded-xl card text-white p-2 shadow-lg project-container'>
          <img  height={350} width={350} className='bg-white rounded-xl border-2 border-[#6A7775]' src={Site3}  alt="courses" />
          <div >
            <h2 className='text-[32px] text-[#6A7775] flex items-center justify-center'>Let's Chat</h2>
            <p className='p-2 text-gray-400'>The Let's Chat session is a one-time, one-on-one coaching session designed to help clients work through a specific challenge or goal. It offers a focused conversation and guidance to support clients in finding solutions and creating an action plan to overcome their obstacles and achieve their desired outcomes.</p>
          </div>
        <button className=' m-2 rounded-lg p-2 bg-[#6A7775]'><a href="#">Visit</a></button>

        </div>
      </div>
    </div>
  )
}
