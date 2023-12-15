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
            <section class="contact-form page-section primary-section">
            <h2 class="section-heading">Contact Us</h2>
            <p>Please use the form below to contact us</p>
  
            <form>
                <div class="form-group">
                <label for="name" class="form-label">Name</label>
                <input
                    id="name"
                    type="text"
                    class="form-control"
                    placeholder="Enter Name"
                />
                </div>
                <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input
                    id="email"
                    type="text"
                    class="form-control"
                    placeholder="Enter Email"
                />
                </div>
                <div class="form-group">
                <label for="phone" class="form-label">Phone Number</label>
                <input
                    id="phone"
                    type="text"
                    class="form-control"
                    placeholder="Enter Phone Number"
                />
                </div>
                <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea
                    id="message"
                    rows="3"
                    placeholder="Enter Message"
                    class="form-control"
                ></textarea>
                </div>
                <div class="form-group">
                <button class="btn btn-dark d-block">Send</button>
                </div>
            </form>
            </section>
        </div>
    )
}