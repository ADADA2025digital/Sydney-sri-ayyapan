import React, { useState } from "react";
import Banner from "../Components/Banner";
import { contactPageData } from "../Constants/Data.jsx";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    // First Name validation (only letters)
    const nameRegex = /^[A-Za-z]+$/;
    if (!formData.firstName) {
      newErrors.firstName = "First Name is required.";
      valid = false;
    } else if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = "First Name can only contain letters.";
      valid = false;
    }

    // Last Name validation (only letters)
    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required.";
      valid = false;
    } else if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = "Last Name can only contain letters.";
      valid = false;
    }

    // Email validation (basic format)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    // Phone validation (only numbers and length of 10)
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
      valid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (10 digits).";
      valid = false;
    }

    // Message validation (minimum 10 characters)
    if (!formData.message) {
      newErrors.message = "Message is required.";
      valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", formData);
    }
  };

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Sydney Sri Ayyappa Swami Centre</title>
        <meta
          name="description"
          content="Get personalized diet plans, expert tips, and nutritional guidance from certified dietitians. Start your health journey today!"
        />
        <meta
          name="keywords"
          content="Tamildietitian, Dietitian Anu, Gut Detox, Gut Expert, Collagen Expert, Nutrition, Detox Diet, Anti-inflammatory diet, Holistic health, Wellness retreat, Cellular Nutrition, Cellular Detox, Gut health"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Dietitian Anu - Your Weight Loss Mentor & Gut Health Advocate."
        />
        <meta
          property="og:description"
          content="Your Weight Loss Mentor & Gut Health Advocate."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dietitiananu.com.au" />
        <meta
          property="og:image"
          content="https://dietitiananu.com.au/assets/image1-BSFppmib.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dietitian Anu - Your Weight Loss Mentor & Gut Health Advocate."
        />
        <meta
          name="twitter:description"
          content="Your Weight Loss Mentor & Gut Health Advocate."
        />
        <meta
          name="twitter:image"
          content="https://dietitiananu.com.au/assets/image1-BSFppmib.png"
        />
        <meta name="twitter:site" content="@anu_collagen24" />
        <meta name="twitter:creator" content="@anu_collagen24" />
      </Helmet>
      <div className="container-fluid p-0">
        {/* Banner Section */}
        <Banner bannerData={contactPageData} />

        <section>
          {/* Contact Information Cards */}
          <div className="mt-0 mt-md-5 pt-5">
            <div className="container">
              <div className="row">
                <div className="col-4 mb-0 md-mb-3">
                  <a
                    href="mailto:info@sydneysriayyappa.com"
                    className="card contact-card h-100 p-3 shadow-sm-md-up text-decoration-none text-reset"
                  >
                    <div className="d-flex justify-content-center mt-3">
                      <i className="bi bi-envelope-fill display-3 heading"></i>
                    </div>
                    <h5 className="text-center mt-2 text-dark d-none d-md-block">
                      Email US
                    </h5>
                    <h5 className="text-center mt-2 text-dark small d-md-none ">
                      Email US
                    </h5>
                    <p className="text-center text-muted mt-2 d-none d-lg-block">
                      info@sydneysriayyappa.com
                    </p>
                  </a>
                </div>

                <div className="col-4 mb-0 md-mb-3">
                  <a
                    href="tel:+61296312800"
                    className="card contact-card h-100 p-3 shadow-sm-md-up text-decoration-none text-reset"
                  >
                    <div className="d-flex justify-content-center mt-3">
                      <i className="bi bi-telephone-fill display-3 heading"></i>
                    </div>
                    <h5 className="text-center mt-2 text-dark d-none d-md-block">
                      Phone
                    </h5>
                    <h5 className="text-center mt-2 text-dark small d-md-none ">
                      Phone
                    </h5>
                    <p className="text-center text-muted mt-2 d-none d-lg-block">
                      +61 2 9631 2800
                    </p>
                  </a>
                </div>

                <div className="col-4 mb-0 md-mb-3">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=1%20Perry%20Street%2C%20Wentworthville%2C%20NSW%2C%20Australia%2C%20New%20South%20Wales"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card contact-card h-100 p-3 shadow-sm-md-up text-decoration-none text-reset"
                  >
                    <div className="d-flex justify-content-center mt-3">
                      <i className="bi bi-geo-alt-fill display-3 heading"></i>
                    </div>
                    <h5 className="text-center mt-2 text-dark d-none d-md-block">
                      Address
                    </h5>
                    <h5 className="text-center mt-2 text-dark small d-md-none ">
                      Address
                    </h5>
                    <p className="text-center text-muted mt-2 d-none d-lg-block">
                      1 Perry Street, Wentworthville,
                      <br /> NSW, Australia, New South Wales
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          {/* Contact Form */}
          <div className="container pt-5 mt-0 mt-md-5 pb-5">
            <form onSubmit={handleSubmit}>
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="First Name*"
                  />
                  {errors.firstName && (
                    <small className="text-danger">{errors.firstName}</small>
                  )}
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Last Name*"
                  />
                  {errors.lastName && (
                    <small className="text-danger">{errors.lastName}</small>
                  )}
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Email Address*"
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Phone Number*"
                  />
                  {errors.phone && (
                    <small className="text-danger">{errors.phone}</small>
                  )}
                </div>
              </div>

              <div className="mb-5 md-mb-3 position-relative col-12">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control py-3"
                  rows="4"
                  placeholder="Write your complaints or suggestions..."
                  style={{ height: "150px" }}
                ></textarea>
                {errors.message && (
                  <small className="text-danger">{errors.message}</small>
                )}

                <button
                  type="submit"
                  className="btn btn-warning hover-button text-white fw-bold border-0 position-absolute text-white px-5 responsive-position rounded-5"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </section>

        <section>
          {/* Map Section */}
          <div className="col-md-12">
            <div className="map-container w-100" style={{ height: "400px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.066233039712!2d150.96786357649273!3d-33.81060381604827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bd63e38aea17%3A0xe10180d0690ad68f!2sSydney%20Sri%20Ayyappa%20Swami%20Centre!5e0!3m2!1sen!2slk!4v1733479979243!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ boxShadow: "0 0 8px #a79d9d" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
