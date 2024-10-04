import Img4 from "../assets/images/img4.png";
// import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div id="About" className="about flex flex-col items-center p-3 mb-9">
      <h1 className="text-center text-[67px] mb-7 text-[#e2c2b3]">
        Coach Christi{" "}
      </h1>
      <div className="about-grid flex justify-center items-center bg-white w-[93%]">
        <div className="text-[50px] font-bold p-3  text-[#403234] text-center ">
          Y O U R
          <br />
          <p className="">E M P O W E R M E N T</p>
          <p className="">C O A C H</p>
        </div>
        <img
          src={Img4}
          width={475}
          alt="Christi"
          className="bg-[#403234] shadow-md"
        />
        <div className="w-[35%] ml-4 text-[#403234] about-text p-2">
          <p className="">
            I have experienced battle fatigue from all the hats I wear—wife,
            mother, entrepreneur, and minister. Through this revelation, God
            gave me strategic methods to overcome that fatigue, helping me find
            balance and renewal. Because I know I’m not alone in this struggle,
            “Empowered to Overcome Life Coaching” is designed to help women like
            you conquer battle fatigue, reclaim your energy, and live a life
            rooted in purpose and faith.
          </p>
          <br />
          <p className="">
            EmpowerHer Section: Embarking on a journey to overcome battle
            fatigue is a transformative commitment rooted in God’s strength,
            self-awareness, and unwavering faith. It's about recognizing the
            incredible value God has placed within you and refusing to settle
            for anything less than His best. Through Christ, you hold the power
            to rise above every challenge and step boldly into your God-given
            purpose.
          </p>
          <br />
          <p className="">
            Are you ready to step into a life overflowing with confidence,
            divine purpose, and spiritual abundance? Let’s walk this empowering
            journey together. Book your complimentary coaching session today and
            take your first faith-filled step towards unlocking your full
            potential in Christ! "Those who hope in the Lord will renew their
            strength. They will soar on wings like eagles..." (Isaiah 40:31).
          </p>
        </div>
      </div>
      {/* <Link to="/about-me" > */}
      {/* <Link to="#" >
          <button className='abt-btn text-[27px] m-9 border-2 border-white   font-semibold rounded-xl hover:border-2 hover:text-[#e2c2b3] hover:border-[#e2c2b3] hover:bg-transparent'>My Story</button>
        </Link>
         */}
    </div>
  );
}
