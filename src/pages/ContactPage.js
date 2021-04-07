import React from "react";
import "../styles/contact.css";
import contactImg from "../images/contact.jpg";

const ContactPage = () => {
  return (
    <>
      <div className="contact__header">
        <h2>Contact Us</h2>
      </div>

      <div className="contact">
        <div className="contact__paragraph">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus ab debitis omnis accusamus earum quibusdam totam ex
            beatae repudiandae illum iste quae tempora fuga facilis ullam alias,
            quam qui numquam. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Repellendus ab debitis omnis accusamus earum
            quibusdam totam ex beatae repudiandae illum iste quae tempora fuga
            facilis ullam alias, quam qui numquam. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Repellendus ab debitis omnis accusamus
            earum quibusdam totam ex beatae repudiandae illum iste quae tempora
            fuga facilis ullam alias, quam qui numquam.
          </p>
        </div>

        <div className="contact__image">
          <img className="contact__pic" src={contactImg} alt="contact" />
        </div>
      </div>
    </>
  );
};
export default ContactPage;
