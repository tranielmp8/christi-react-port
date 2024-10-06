import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Sites from "../components/Sites";
import Subscribe from "../components/Empower";
import Testimonial from "../components/Testimonial";
import FlodeskForm from "../components/FlodeskForm";
import Popup from "../components/Popup";

export default function Home() {
  return (
    <div id="home" className="home">
      <Popup />
      <Hero />
      <Banner />
      <About />
      <Subscribe />
      <Testimonial />
      <Sites />
      <FlodeskForm />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
