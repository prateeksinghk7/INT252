import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
// import image4 from "../assets/image1.jpeg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData.js"
const Destination =()=>{
    return(
<div className="destination">
<h1>Popular Destination</h1>
<p>Tours give you the opporunity to see a lot, wihtin a time frame.</p>

<DestinationData
className="first-des"
heading="Taal Volcano,agdga"
text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
img1={image1}
img2={image2}
/>
<DestinationData
className="first-des-reverse"
heading="Taal Volcano,agdga"
text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
img1={image3}
img2={image4}
/>
</div>
    );
};
export default Destination;