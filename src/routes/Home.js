import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
function Home(){
return(
<>
<Hero
cName="hero"
heroImg="https://images.pexels.com/photos/4588746/pexels-photo-4588746.jpeg?auto=format&fit=crop&w=870&q=80"
title="Your Journey Your Story"
text="Choose Your Favourite Destination"
buttonText="Travel Plan"
url="/"
btnClass="show"
/>
<Navbar/>

</>
)
}

export default Home;