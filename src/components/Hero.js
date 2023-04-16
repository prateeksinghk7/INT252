import "./HeroStyles.css";
import background from "../assets/background.mp4";
function Hero(){
return(
    <>
<div className="hero">
<video className="backgroundVideo" src={background} autoPlay loop muted/>


</div>
</>
)
}

export default Hero;