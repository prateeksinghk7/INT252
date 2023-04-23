import "./AboutStyles.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import image from "../assets/backgroundImg.jpg"
import Footer from "../components/Footer";
import img1 from "../assets/meimage.jpg";
function About(){
    return(
        <>
        <Navbar/>
        <div className="colorit">
        <Hero
        cName="hero-mid"
        heroImg={image}
        title="About"
  /></div>
  <div className="container">
    <div className="image">
        <img src={img1} alt="not found"/>
    </div>
        <h2>Hey! I'am <span>Prateek Singh</span></h2>
    <p>- a CS undergrad in Lovely Professional Univeristy, India wiht keen interest in Front End Development using React Js </p>
    
  </div>
  <Footer/>
        </>
    );
    }
    
    export default About;