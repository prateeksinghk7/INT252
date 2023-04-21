import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import video_name from "../assets/background.mp4";
function Contact(){
    return(
    <>
   <Navbar/>
        <Hero
        cName="hero-mid"
        vid={video_name}
        title="Contact"
      
 
        />
    </>
    )
    }

    
    export default Contact;