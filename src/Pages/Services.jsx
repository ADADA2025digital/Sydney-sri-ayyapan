import React from "react";
import { motion } from "framer-motion";
import Banner from "../Components/Banner";
import ServicesDisplay from "../Components/ServicesDisplay";
import { servicesData, servicesPageData } from "../Constants/Data.jsx";
import { Helmet } from "react-helmet-async";

const Services = () => {
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
        <Banner bannerData={servicesPageData} />

        {/* Services Display Component */}
        <ServicesDisplay services={servicesData} />
      </div>
    </>
  );
};

export default Services;
