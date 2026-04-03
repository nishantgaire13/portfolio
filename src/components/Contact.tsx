import { MdArrowOutward, MdCopyright } from "react-icons/md";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">

        {/* Top heading */}
        <div className="contact-heading">
          <p className="contact-sub">Get in touch</p>
          <h3>Let's <span>Connect</span></h3>
          <p className="contact-desc">
            Open to opportunities, collaborations, and conversations about
            finance, investing, and everything in between.
          </p>
        </div>

        {/* Social links row */}
        <div className="contact-socials-row">
          <a
            href="https://www.linkedin.com/in/nishant-gaire-98b39b239/"
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
            className="contact-social-card"
          >
            <FaLinkedinIn />
            <span>LinkedIn</span>
            <MdArrowOutward className="contact-arrow" />
          </a>
          <a
            href="https://github.com/nishantgaire13"
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
            className="contact-social-card"
          >
            <FaGithub />
            <span>GitHub</span>
            <MdArrowOutward className="contact-arrow" />
          </a>
          <a
            href="https://www.youtube.com/@nishantwho"
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
            className="contact-social-card"
          >
            <FaYoutube />
            <span>YouTube</span>
            <MdArrowOutward className="contact-arrow" />
          </a>
          <a
            href="https://www.instagram.com/nishantgaire13/"
            target="_blank"
            rel="noreferrer"
            data-cursor="disable"
            className="contact-social-card"
          >
            <FaInstagram />
            <span>Instagram</span>
            <MdArrowOutward className="contact-arrow" />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="contact-bottom">
          <p className="contact-copy">
            <MdCopyright /> 2026 Nishant Gaire
          </p>
          <p className="contact-made">
            Designed & Developed by <span>Nishant Gaire</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
