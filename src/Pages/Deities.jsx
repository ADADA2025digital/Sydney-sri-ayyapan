import React from "react";
import { motion } from "framer-motion";
import Banner from "../Components/Banner";
import { deities, deitiesImages, deitiesPageData } from "../Constants/data.jsx";
import { Helmet } from "react-helmet-async";

const Deities = () => {
  const combinedDeities = deities.map((deity, index) => ({
    ...deity,
    image: deitiesImages[index % deitiesImages.length],
    venue:
      deitiesPageData.details?.venue || "Sydney Sri Ayyappa Swami Centre, NSW",
    time: deitiesPageData.details?.time || "All Day",
  }));

  
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
        <Banner bannerData={deitiesPageData} />

        {/* Deities Sections */}
        <section>
          <div className="container">
            <h4 className="fw-bold mt-5 text-center text-md-start fs-1 heading">
              {deitiesPageData.mainHeading}
            </h4>
            {combinedDeities.map((deity, idx) => (
              <motion.div
                key={`${deity.title}-${idx}`}
                className="py-2 py-md-4 bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    {/* Image */}
                    <motion.div
                      className="col-12 col-lg-4 mb-4 mb-lg-0"
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <img
                        src={deity.image}
                        alt={deity.title}
                        className="img-fluid rounded shadow-lg"
                      />
                    </motion.div>
                    {/* Text */}
                    <motion.div
                      className="col-12 col-lg-8"
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <p className="mb-3 fs-5 text-muted lh-sm text-center text-md-start">
                        {deity.description}
                      </p>
                      <p className="mb-4 fs-5 text-muted lh-sm text-center text-md-start">
                        {deity.description2}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Deities;
