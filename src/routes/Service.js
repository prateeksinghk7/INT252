import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import image from "../assets/contactUs.jpeg";
function Service(){
    return(
    <>
    <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={image}
        title="Services"
      
 
        />
    </>
    )
    }
    

    export default Service;