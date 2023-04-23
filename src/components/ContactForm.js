import "./ContantFormStyles.css";

function ContactUs(){
    return(
        <div className="from-container">
<h1>Send a message to us</h1>
<form>
<input type="text" placeholder="Name" required></input>
<input type="email" placeholder="Email" required></input>
<input type="text" placeholder="Subject" required maxLength={20}></input>
    <textarea placeholder="Message" rows="4" maxLength={200}></textarea>
    <button className="contactus">Send Message</button>
    </form>
    

        </div>
    );
}
export default ContactUs;