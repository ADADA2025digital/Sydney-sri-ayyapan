import React from "react";
import { motion } from "framer-motion";
import Banner from "../Components/Banner";
import { useParams, Link } from "react-router-dom";
import { servicesData, serviceDetailsPageData } from "../Constants/data.jsx";
import { Helmet } from "react-helmet-async";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = servicesData.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="container py-5 text-center">
        <h2>Service not found</h2>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    );
  }

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
        <Banner bannerData={service} />

        {/* First Section - Image and Content */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="about-section bg-white py-5">
              <div className="container">
                <div className="row align-items-start">
                  <motion.div
                    className="col-lg-6 "
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  >
                    <div
                      className="image-container"
                      style={{ minHeight: "400px" }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="img-fluid rounded about-image w-100"
                        style={{
                          height: "600px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    className="col-lg-6 d-flex flex-column  text-center text-md-start mt-0 mt-md-4 "
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  >
                    <motion.h2
                      className="heading fw-bold mb-4 text-center text-md-start mt-5 mt-md-0"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: "easeOut",
                      }}
                    >
                      {service.mainHeading}
                    </motion.h2>
                    <motion.p
                      className="mb-3 lh-lg fs-5"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      {service.description1}
                    </motion.p>
                    <motion.p
                      className="mb-0 lh-lg fs-5"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.6,
                        ease: "easeOut",
                      }}
                    >
                      {service.description2}
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Full Paragraph Section  */}
        <section>
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
                      {service.scheduleTitle}
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
                      {service.id === "daily-poojas" &&
                        service.morning.activities}
                      {service.id === "educational-programs" &&
                        service.workshops.activities}
                      {service.id === "special-sevas" &&
                        service.abhishekam.activities}
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
                      {service.id === "daily-poojas" &&
                        service.afternoon.activities}
                      {service.id === "educational-programs" &&
                        service.yoga.activities}
                      {service.id === "special-sevas" &&
                        service.archana.activities}
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
                      {service.id === "daily-poojas" &&
                        service.evening.activities}
                      {service.id === "educational-programs" &&
                        service.study.activities}
                      {service.id === "special-sevas" &&
                        service.annadanam.activities}
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetails;
