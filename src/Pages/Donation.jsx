import React from "react";
import { motion } from "framer-motion";
import Banner from "../Components/Banner";
import payImage from "../assets/images/pay.png";
import { donationPageData } from "../Constants/Data.jsx";
import { Helmet } from "react-helmet-async";

const Donation = () => {
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
        <Banner bannerData={donationPageData} />

        {/* Donation Content */}
        <section>
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 ">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h1 className="fw-bold mb-4 heading">Support Our Temple</h1>
                  <p className="fs-5 text-muted mb-5">
                    Your generous donations help us maintain and improve our
                    temple facilities, conduct daily prayers, and organize
                    spiritual events for the community.
                  </p>
                </motion.div>

                <motion.div
                  className="row g-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  {/* Bank Transfer */}
                  <div className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body text-center p-4">
                        <div className="mb-3 mt-3">
                          <i className="bi bi-bank text-warning display-3"></i>
                        </div>
                        <h5 className="card-title fw-bold mb-3 mt-3">
                          Bank Transfer
                        </h5>
                        <div className="text-start ">
                          <p className="mb-3">
                            <strong>Bank:</strong> [Bank Name]
                          </p>
                          <p className="mb-3">
                            <strong>Account Name:</strong> Sydney Sri Ayyappa
                            Swami Centre
                          </p>
                          <p className="mb-3">
                            <strong>BSB:</strong> [BSB Number]
                          </p>
                          <p className="mb-3">
                            <strong>Account Number:</strong> [Account Number]
                          </p>
                          <p className="mb-0">
                            <strong>Reference:</strong> Your Name
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Online Donation */}
                  <div className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body text-center p-4">
                        <div className="mb-3 mt-3">
                          <i className="bi bi-credit-card-fill text-warning display-3"></i>
                        </div>
                        <h5 className="card-title fw-bold mb-2">
                          Online Donation
                        </h5>
                        <p className="text-muted mb-1">
                          Make a secure online donation using your credit card
                          or PayPal.
                        </p>
                        <div className="mb-2">
                          <img
                            src={payImage}
                            alt="Payment"
                            className="text-warning"
                            style={{ width: "250px", height: "120px" }}
                          />
                        </div>
                        <button className="btn btn-warning px-4 py-2 hover-button text-white fw-bold border-0 position-relative rounded-5">
                          Donate Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="mt-5 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                >
                  <h4 className="fw-bold mb-3 heading">
                    Other Ways to Support
                  </h4>
                  <div className="row g-4">
                    <div className="col-md-4">
                      <div className="card h-10 shadow-sm contact-card">
                        <div className="card-body text-center p-4">
                          <div className="mb-3">
                            <i className="bi bi-gift text-warning display-5"></i>
                          </div>
                          <h6 className=" mb-3 fw-bold ">Material Donation</h6>
                          <p className="text-muted">
                            Flowers, fruits, and other items for daily prayers
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card h-100 shadow-sm contact-card">
                        <div className="card-body text-center p-4">
                          <div className="mb-3">
                            <i className="bi bi-clock text-warning display-5"></i>
                          </div>
                          <h6 className="mb-3 fw-bold ">Volunteer Time</h6>
                          <p className="text-muted  ">
                            Help with temple activities and events
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card h-100 shadow-sm contact-card ">
                        <div className="card-body text-center p-4">
                          <div className="mb-3">
                            <i className="bi bi-people-fill text-warning display-5"></i>
                          </div>
                          <h6 className="mb-3 fw-bold">Prayer Requests</h6>
                          <p className="text-muted">
                            Special prayers for your family and loved ones
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="mt-5 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                >
                  <div className="bg-light p-4 rounded">
                    <h5 className="fw-bold mb-3 heading">
                      Contact for More Information
                    </h5>
                    <p className="text-muted mb-3">
                      If you have any questions about donations or would like to
                      discuss specific ways to support our temple, please
                      contact us.
                    </p>
                    <a
                      href="/contactus"
                      className="btn btn-warning px-4 py-2 hover-button text-white fw-bold border-0 position-relative rounded-5"
                    >
                      Contact Us
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Donation;
