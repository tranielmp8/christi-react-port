import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Sites from "../components/Sites";
import Subscribe from "../components/Empower";
import Testimonial from "../components/Testimonial";


export default function Home() {
  return (
    <div id="home" className="home">
        <Hero />
        <Banner />
        <About />
        <Subscribe />
        <Testimonial />
        <Sites />
        <Contact />
        <Footer />

    </div>
  )
}
