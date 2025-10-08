import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/Images/about.png";
import TempleServices from "../Components/TempleServices";
import Banner from "../Components/Banner";
import { servicesData, aboutUsPageData } from "../Constants/Data.jsx";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
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
        <Banner bannerData={aboutUsPageData} />

        {/* About Section - Image and Text */}
        <section>
          <motion.div
            className="py-5 bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="container">
              <div className="row align-items-center">
                {/* Left Side  Image */}
                <motion.div
                  className="col-lg-6 mb-4 mb-lg-0"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  <div>
                    <img
                      src={AboutImg}
                      alt="Ayyappa Swami Temple"
                      className="img-fluid rounded shadow-lg w-100"
                    />
                  </div>
                </motion.div>

                {/* Right Side Text Content */}
                <motion.div
                  className="col-lg-6 ps-lg-5"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  <div>
                    <motion.h2
                      className="fw-bold mb-4 text-center text-md-start heading fs-1"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.6,
                        ease: "easeOut",
                      }}
                    >
                      {aboutUsPageData.mainHeading}
                    </motion.h2>

                    <motion.p
                      className="mb-4 fs-5 text-muted text-center text-md-start lh-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.8,
                        ease: "easeOut",
                      }}
                    >
                      {aboutUsPageData.description1}
                    </motion.p>

                    <motion.p
                      className="mb-4 fs-5 text-muted text-center text-md-start lh-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 1.0,
                        ease: "easeOut",
                      }}
                    >
                      {aboutUsPageData.description2}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        <section>
          {/* Full Paragraph Section */}
          <motion.div
            className="py-5 bg-light"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  >
                    <motion.h3
                      className="fw-bold mb-4 text-center text-md-start heading fs-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      {aboutUsPageData.legacyTitle}
                    </motion.h3>

                    <motion.p
                      className="fs-5 text-muted mb-4 text-center text-md-start lh-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.6,
                        ease: "easeOut",
                      }}
                    >
                      {aboutUsPageData.legacyParagraph1}
                    </motion.p>

                    <motion.p
                      className="fs-5 text-muted mb-4 text-center text-md-start lh-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.8,
                        ease: "easeOut",
                      }}
                    >
                      {aboutUsPageData.legacyParagraph2}
                    </motion.p>

                    <motion.p
                      className="fs-5 text-muted text-center text-md-start lh-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 1.0,
                        ease: "easeOut",
                      }}
                    >
                      {aboutUsPageData.legacyParagraph3}
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section>
          {/* Temple Service */}
          <TempleServices services={servicesData} />
        </section>
      </div>
    </>
  );
};

export default AboutUs;
