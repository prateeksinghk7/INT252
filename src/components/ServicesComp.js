import "./ServicesCompStyles.css";

const ServicesComp=(props)=>{
    return(<>
   
        <div className="card1">
            <img id="service" src={props.img} alt="not found"/>
            <h2>{props.head}</h2>
            <p>{props.text}</p>
            <button>MORE</button>
        </div>

    </>);
}

export default ServicesComp;