import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import image from "../assets/contactUs.jpeg";
import Footer from "../components/Footer";
import ServicesComp from "../components/ServicesComp";
import comm from "../assets/service.jpeg";
import design from "../assets/design.jpg";
import happy from "../assets/happy.avif";
import "./ServiceStyles.css"

function Service(){
    return(
    <>
    <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={image}
        title="Our Features & Services"
        />
        <div className="maindiv">
        <ServicesComp
        img={comm}
        head="Communication"
        text="Active listening and timely response. Clear, concise, and jargon-free language. Empathy and customer-centric approach. Varied and accessible communication channels. Follow-up and timely updates for customer satisfaction. "
        />
        <ServicesComp
        img={design}
        head="Inspired Design"
        text="Creative and innovative design concepts.Unique and captivating visual aesthetics. Thoughtful and intentional use of color, typography, and imagery. Attention to detail and meticulous craftsmanship. Designs that evoke emotion, provoke thought, and inspire action."
        />
        <ServicesComp
        img={happy}
        head="Happy Customers"
        text="Satisfied with products or services. Positive feedback and testimonials. Repeat business and customer loyalty. Advocacy and referrals. Increased sales and business success."
        />
        </div>
        <Footer/>
    </>
    )
    }
    

    export default Service;