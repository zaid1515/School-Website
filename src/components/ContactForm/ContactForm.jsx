import React from "react";
import "./ContactForm.css";

export default function contactForm() {
    return (
        <form>
            <div>
                <label for="message">Enter Message</label>
                <textarea id="message"></textarea>
                {/* <label for="textAreaHeading">Enter Message</label>
                <textarea id="txtarea" name="myArea" rows={5} cols={15}></textarea> */}

                <label>Enter Name</label>
                <input type="text" placeholder="Enter Name" value="Default Value"></input>

                <label>Enter Email</label>
                <input type="text" placeholder="Enter Your Email" value="Default Value"></input>

                <label>Enter Subject</label>
                <input type="text" placeholder="Enter Subject" value="Default Value"></input>

                <div class="form-group">
                    <button>Send</button>
                </div>

            </div>
        </form>
    )
}