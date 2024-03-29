

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col justify-center items-center mt-9 p-5">
        <h1 className="text-[62px] mb-5  ">C O N T A C T</h1>
        <form action="" className="flex flex-col border-4 border-white p-5 rounded-lg">
            <label htmlFor="" className="text-2xl p-1">Full Name:</label>
            <input 
                type="text" 
                name="name"
                className="text-lg text-black p-1"
             />
            <label htmlFor="" className="text-2xl p-1">Email:</label>
            <input 
                type="email" 
                name="email" 
                className="text-lg text-black p-1"
            />
            <label htmlFor="" className="text-2xl p-1">Message:</label>
            <textarea 
                name="" 
                id="" 
                cols="30" rows="7"
                placeholder="Type message here"
                className="text-lg text-black p-1 rounded-lg"
            ></textarea>
            <button className="text-2xl text-[#6A7775] bg-white rounded-lg mt-5 transition-all hover:bg-[#6A7775] hover:text-white hover:border-2 hover:border-white" >Submit</button>
        </form>
    </div>
  )
}
