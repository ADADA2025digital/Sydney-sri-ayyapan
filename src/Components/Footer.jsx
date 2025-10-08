import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../assets/images/footer-logo.png";

const Footer = () => {
  return (
    <footer className="footer-section position-relative text-center text-white position-relative py-5">
      <div className="container mt-4">
        <img src={Logo} alt="Ayyappa Swami Logo" className="footer-logo mb-3" />
        <div className="row text-center" style={{ paddingTop: "50px" }}>
          <div className="col-md-4">
            <h4 className="footer-heading text-white fw-bold mb-3">Location</h4>
            <p>
              <a
                href="https://www.google.com/maps/place/Sydney+Sri+Ayyappa+Swami+Centre/@-33.8106082,150.9655676,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12bd63e38aea17:0xe10180d0690ad68f!8m2!3d-33.8106083!4d150.9704385!16s%2Fg%2F11xk3why1?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reset text-decoration-none"
              >
                1 Perry Street, Wentworthville,
                <br />
                NSW, Australia, New South Wales
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="footer-heading text-white fw-bold mb-3">
              Opening Hours
            </h4>
            <p>Weekdays</p>
            <p> 7:30 AM - 11:00 AM & 5:30 PM - 8:00 PM</p>
            <p>Weekend</p>
            <p>7:30 AM - 11:00 AM & 5:30 PM - 8:00 PM</p>
          </div>
          <div className="col-md-4">
            <h4 className="footer-heading text-white fw-bold mb-3">Contact</h4>
            <p>
              <a
                href="mailto:secretary@sydneysriayyappa.com"
                className="text-reset text-decoration-none"
              >
                secretary@sydneysriayyappa.com
              </a>
              <br />
              <a
                href="tel:+11234567999"
                className="text-reset text-decoration-none"
              >
                (+1) 123-4567-999
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="social-icons gap-3 mb-3 py-3 d-flex justify-content-center mb-5 pb-5">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="social-icon text-white display-5 rounded-circle p-2 facebook-icon" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="social-icon text-white display-5 rounded-circle p-2 instagram-icon" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="social-icon text-white display-5 rounded-circle p-2 youtube-icon" />
        </a>
      </div>

      <div className="footer-bottom text-center w-100 position-absolute start-0 bottom-0 py-3">
        <p className="mb-0">
          {" "}
          © {new Date().getFullYear()} Sydney Sri Ayyappa. All Rights Reserved.
        </p>
        <p className="mb-0">
          Website design and IT Solution :
          <a
            href="https://www.adada.com.au/"
            className="text-white fw-bold text-decoration-none"
          >
            {" "}
            ADADA Digital
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
