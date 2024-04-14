

export default function Contact() {


  return (
    <div id="contact" className="flex flex-col justify-center items-center mt-4 p-1">
        <h1 className="text-[62px] mb-3 text-[#e2c2b3] ">Subscribe</h1>
        <form action="" className="flex  gap-3  p-5 rounded-lg items-center">
            <label htmlFor="" className="text-xl p-1 text-[#e2c2b3]">Full Name:</label>
            <input 
                type="text" 
                name="name"
                className="text-lg text-black p-1"
             />
            <label htmlFor="" className="text-2xl p-1 text-[#e2c2b3]">Email:</label>
            <input 
                type="email" 
                name="email" 
                className="text-lg text-black p-1"
            />
            <label htmlFor="" className="text-xl p-1 text-[#e2c2b3]">Message:</label>
            <input
                name="message"
                placeholder="Type message here"
                className="text-lg text-black p-1 rounded-lg"
            />
            <button className="text-xl text-[#403234] bg-white rounded-lg  transition-all hover:bg-[#403234] hover:text-white hover:border-2 hover:border-white p-2" >Submit</button>
        </form>
    </div>
  )
}
