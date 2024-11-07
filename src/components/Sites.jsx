import Site1 from "../assets/images/site1.png";
import Site2 from "../assets/images/site2.png";
import Site3 from "../assets/images/site3.png";

export default function Sites() {
  return (
    <div
      id="Services"
      className="sites p-12 flex flex-col min-h-screen items-center justify-center bg-white "
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-13 leading-normal  text-[#403234] site-header"
      >
        Services
      </h1>
      <div
        data-aos="fade-up"
        className="cards grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-[5rem]"
      >
        <div className="w-80 rounded-xl card text-white p-2 shadow-lg project-container">
          <img
            width={400}
            className="bg-white rounded-xl border-2 border-[#403234]"
            src={Site1}
            alt="courses"
          />
          <div>
            <h2 className="text-[32px] text-[#403234] flex items-center justify-center">
              Restored Warrior
            </h2>
            <p className="p-2 text-[#403234]">
              Are you feeling worn out, spiritually drained, or overwhelmed by
              life’s constant battles? Restored Warrior is a 6-week coaching
              experience designed to help you reclaim your strength, renew your
              spirit, and rise above the fatigue holding you back. Through
              one-hour weekly sessions, we’ll walk together through
              personalized, faith-based strategies to restore your resilience
              and help you step boldly into the purpose God has for you.{" "}
            </p>
          </div>
          <button className=" m-2 rounded-lg p-2 bg-[#403234]">
            <a
              href="https://app.paperbell.com/checkout/packages/71345"
              target="_blank"
            >
              Visit
            </a>
          </button>
        </div>
        <div className="w-80 rounded-xl card text-white p-2 shadow-lg project-container">
          <img
            height={350}
            width={400}
            className="bg-white rounded-xl border-2 border-[#403234]"
            src={Site2}
            alt="courses"
          />
          <div>
            <h2 className="text-[32px] text-[#403234] flex items-center justify-center">
              Enpower Your Spirit
            </h2>
            <p className="p-2 text-[#403234]">
              The Spiritual Growth package is designed to assist individuals in
              deepening their relationship with Jesus Christ and experiencing
              personal transformation through Bible study tools, transformative
              prayer life, and healing and deliverance sessions. It provides a
              comprehensive set of resources and guidance to support users on
              their spiritual journey.{" "}
            </p>
          </div>
          <button className=" m-2 rounded-lg p-2 bg-[#403234]">
            <a
              href="https://app.paperbell.com/checkout/packages/74477"
              target="_blank"
            >
              Visit
            </a>
          </button>
        </div>
        <div className="w-80 rounded-xl card text-white p-2 shadow-lg project-container">
          <img
            height={350}
            width={400}
            className="bg-white rounded-xl border-2 border-[#403234]"
            src={Site3}
            alt="courses"
          />
          <div>
            {/* <br /> */}
            <h2 className="text-[32px] text-[#403234] flex items-center justify-center">
              Let's Chat
            </h2>
            <p className="p-2 text-[#403234]">
              The Let's Chat session is a one-time, one-on-one coaching session
              designed to help clients work through a specific challenge or
              goal.
              {/* <br /> */}
              <br />
              It offers a focused conversation and guidance to support clients
              in finding solutions and creating an action plan to overcome their
              obstacles and achieve their desired outcomes.
            </p>
          </div>
          <button className=" m-2 rounded-lg p-2 bg-[#403234]">
            <a
              href="https://app.paperbell.com/checkout/packages/74286"
              target="_blank"
            >
              Visit
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
