import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import NewPgImg from '../../components/NewPgImg/NewPgImg';

export default function Contact() {
     return (
          <div className="contact-pg">
          <NewPgImg name="Contact Us"/>
          <ContactForm></ContactForm>
          </div>
     )
}