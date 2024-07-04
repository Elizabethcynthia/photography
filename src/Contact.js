import { useState } from "react";
import "./Contact.css";

export default function Contact () {
    const [textarea, setTextarea] = useState('');
    const ClearOutputs = (event) => {
        Array.from(event.target).forEach((e) => e.value = "");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        ClearOutputs(event);
        setTextarea('');
        console.log(textarea)
    }

    return(
        <div id="contact">
           <br></br>
        <h3 style={{fontSize: '4rem', paddingLeft: '550px'}}>Contact Us</h3>
        <p style={{fontSize: '2rem', paddingLeft: '350px', color: 'whitesmoke'}}>In case of anything you can contact us through the below form</p>
        <br></br>
        <div id="overall-contact">
        
        <div className="contact1.">
           <form onSubmit={handleSubmit}>
               <div className="first-contact">
                   <label htmlFor="name"><h4>NAME:</h4></label>
                   <input type="text" id="name"></input>

                   <label htmlFor="email address"><h4>EMAIL:</h4></label>
                   <input type="text" id="email"></input>
               
               <br></br>
               <h4>MESSAGE:</h4>
               <textarea value={textarea} onChange={(e) => setTextarea(e.target.value)}></textarea>
               <br></br>
                <button type="submit">Submit</button>
                <br></br>
                </div>
           </form>
        </div>

        <div className="contact2">
           <h4>EMAIL:</h4>
           <p>elizabethcynthia265@gmail.com</p>
           <br></br>
           <h4>TELEPHONE:</h4>
           <p>+254113526325</p>
           <br></br>
           <h4>SKYPE:</h4>
           <p>elizabethcynthia265</p>
           <br></br>
           <h4>ADDRESS:</h4>
           <p>Style LTD</p>
           <p>National Archives</p>
           <p>Nairobi</p>
           <p>Company No. 01066523</p>
        </div>
        </div>
        </div>
    )
}