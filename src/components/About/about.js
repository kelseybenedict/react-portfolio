import React from "react";
import BioPicture from "../../images/bio.png";
import "./about.css"

function About () {
    return(
        <>
        <img src={BioPicture} alt="Me" id="bioPicture" />
        <section className="container">
           <div className="row">
             <div className="col d-flex justify-content-center">
               <div className="card">
                 <div className="card-body">
                   <p className="card-text">Welcome to my Portfolio! My name is Kelsey Benedict. I am originally from Anchorage, AK, but currently residing in Denver, CO. I have a passion for software development, but when I'm not on my computer, I'm taking my dog for a walk, baking dessert, buying new houseplants, or watching true crime shows. Feel free to use the 'Contact' page to send me a message!
                     </p>
                 </div>
               </div>
             </div>
           </div>
           </section>
           </>
    )
}

export default About;