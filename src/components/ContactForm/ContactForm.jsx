import React from "react";
import "./ContactForm.css";

export default function contactForm() {
    return (
        // <form>
        //     <div>
        //         <label for="message">Enter Message</label>
        //         <textarea id="message"></textarea>
        //         {/* <label for="textAreaHeading">Enter Message</label>
        //         <textarea id="txtarea" name="myArea" rows={5} cols={15}></textarea> */}

        //         <label>Enter Name</label>
        //         <input type="text" placeholder="Enter Name" value="Default Value"></input>

        //         <label>Enter Email</label>
        //         <input type="text" placeholder="Enter Your Email" value="Default Value"></input>

        //         <label>Enter Subject</label>
        //         <input type="text" placeholder="Enter Subject" value="Default Value"></input>

        //         <div class="form-group">
        //             <button>Send</button>
        //         </div>

        //     </div>
        // </form>
        <div id="contact">
            <section className="contact-form page-section primary-section">
            <h2 className="section-heading">Contact Us</h2>
            <p>Please use the form below to contact us</p>
  
            <form>
                <div className="form-group">
                {/* <label htmlFor="message" className="form-label">Message</label> */}
                <textarea
                    id="message"
                    rows="3"
                    placeholder="Enter Message"
                    className="form-control"
                ></textarea>
                </div>
                <div className="form-group">
                {/* <label htmlFor="name" className="form-label">Name</label> */}
                <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                />
                </div>
                <div className="form-group">
                {/* <label htmlFor="email" className="form-label">Email</label> */}
                <input
                    id="email"
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                />
                </div>
                <div className="form-group">
                {/* <label htmlFor="phone" className="form-label">Phone Number</label> */}
                <input
                    id="subject"
                    type="text"
                    className="form-control"
                    placeholder="Enter Subject"
                />
                </div>
               
                <div className="form-group">
                <button className="btn boxed-btn d-block">Send</button>
                </div>
            </form>
            </section>
        </div>

    );
}