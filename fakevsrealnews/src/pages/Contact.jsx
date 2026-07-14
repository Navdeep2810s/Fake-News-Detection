import Navbar from "../components/navbar/navbar";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact">

        <h1>Contact Us</h1>

        <p className="contact-text">
          Have any questions or suggestions? We'd love to hear from you.
        </p>

        <div className="contact-container">

          <div className="contact-info">

            <h2>Get in Touch</h2>

            <p><strong>Email:</strong> support@fakenewsai.com</p>

            <p><strong>Phone:</strong> +91 98xxx xxxxx</p>

            <p>
              <strong>Address:</strong><br />
              ABC....<br />
              ..., India
            </p>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>
    </>
  );
}

export default Contact;