import TripData from "./TripData";
import "./TripStyles.css";
import img1 from "../assets/image5.jpeg";
import img2 from "../assets/image6.jpeg";
import img3 from "../assets/image7.jpeg";
import img4 from "../assets/image8.jpeg";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p> You can discover unique destination using Google Maps.</p>
           <div className="tripcard">
           <TripData
           image={img1}
           heading="Trip to Mountains"
           text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
           />
           <TripData
           image={img2}
           heading="Trip to Mountains"
           text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
           />
           <TripData
           image={img3}
           heading="Trip to Mountains"
           text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
           />
           <TripData
           image={img4}
           heading="Trip to Mountains"
           text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
           />
           
           </div>
           

        </div>
    );
}
export default Trip;