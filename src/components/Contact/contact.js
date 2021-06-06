import React from "react";

function Contact (){
    return(
        <>
        <section className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Email:</h5>
                  <p className="card-text">kelseybenedict26@gmail.com</p>
                  <h5 className="card-title">Phone:</h5>
                  <p className="card-text">(503) 990-2739</p>
                  <a href="https://github.com/kelseybenedict" target="_blank" rel="noopener noreferrer"><h5 className="card-title">GitHub</h5></a>
                  <a href="https://www.linkedin.com/in/kelsey-benedict-8396581a2/" target="_blank" rel=" noopener noreferrer"><h5 className="card-title">LinkedIN</h5></a>
                </div>
              </div>
            </div>
          </div>  
        </section>
        </>
    )
}
export default Contact;