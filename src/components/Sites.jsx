import Site1 from '../assets/images/site1.jpg'

export default function Sites() {
  return (
    <div id='Sites' className='sites p-16 flex flex-col min-h-screen items-center justify-center bg-white '>
      <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-[#6A7775] site-header'>Visit the Sites</h1>
      <div data-aos='fade-up' className='cards grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-7'>
        <div className='w-72 rounded-xl card text-white p-2 shadow-lg project-container'>
          <img  height={350} width={300} className='bg-white rounded-xl border-2 border-[#6A7775]' src={Site1}  alt="courses" />
          <div >
            <h2 className='text-[32px] text-[#6A7775] flex items-center justify-center'>Arise&Shine</h2>
            <p className='p-2 text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam sunt eligendi quas, adipisci blanditiis odio in nulla, ducimus itaque, eos doloribus. </p>
          </div>
        <button className=' m-2 rounded-lg p-2 bg-[#6A7775]'><a href="#">Visit</a></button>

        </div>
        <div className='w-72 rounded-xl card text-white p-2 shadow-lg project-container'>
          <img  height={350} width={300} className='bg-white rounded-xl border-2 border-[#6A7775]' src={Site1}  alt="courses" />
          <div >
            <h2 className='text-[32px] text-[#6A7775] flex items-center justify-center'>Arise&Shine</h2>
            <p className='p-2 text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam sunt eligendi quas, adipisci blanditiis odio in nulla, ducimus itaque, eos doloribus. </p>
          </div>
        <button className=' m-2 rounded-lg p-2 bg-[#6A7775]'><a href="#">Visit</a></button>

        </div>
        <div className='w-72 rounded-xl card text-white p-2 shadow-lg project-container'>
          <img  height={350} width={300} className='bg-white rounded-xl border-2 border-[#6A7775]' src={Site1}  alt="courses" />
          <div >
            <h2 className='text-[32px] text-[#6A7775] flex items-center justify-center'>Arise&Shine</h2>
            <p className='p-2 text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam sunt eligendi quas, adipisci blanditiis odio in nulla, ducimus itaque, eos doloribus. </p>
          </div>
        <button className=' m-2 rounded-lg p-2 bg-[#6A7775]'><a href="#">Visit</a></button>

        </div>
      </div>
    </div>
  )
}
