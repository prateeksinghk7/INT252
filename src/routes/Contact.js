import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import img9 from "../assets/image9.jpeg";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactForm";
function Contact(){
    return(
    <>
   <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={img9}
        title="Contact"
        />
        <ContactUs/>
        <Footer/>
    </>
    )
    }

    
    export default Contact;