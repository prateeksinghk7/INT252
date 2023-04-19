import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import image from "../assets/contactUs.jpeg";
function Contact(){
    return(
    <>
   <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={image}
        title="Contact"
      
 
        />
    </>
    )
    }

    
    export default Contact;