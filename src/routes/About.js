import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import image from "../assets/backgroundImg.avif"
function About(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={image}
        title="About"
      
 
        />
        </>
    )
    }
    
    export default About;