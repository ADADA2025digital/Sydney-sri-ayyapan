import React from "react";
import { motion } from "framer-motion";
import Banner from "../Components/Banner";
import { events, eventImages, eventPageData } from "../Constants/Data.jsx";
import { Helmet } from "react-helmet-async";

const Event = () => {
  const combinedEvents = events.map((evt, index) => ({
    ...evt,
    image: eventImages[index % eventImages.length],
    venue:
      eventPageData.details?.venue || "Sydney Sri Ayyappa Swami Centre, NSW",
    time: eventPageData.details?.time || "6:00 PM",
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
        <Banner bannerData={eventPageData} />

        {/* Event Sections */}
        <section>
          <div className="container">
            <h4 className="fw-bold my-5 text-md-start fs-1 heading">
              {eventPageData.mainHeading}
            </h4>
            {combinedEvents.map((ev, idx) => (
              <motion.div
                key={`${ev.title}-${idx}`}
                className="py-5 bg-white"
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
                        src={ev.image}
                        alt={ev.title}
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
                      <div className="mb-4 text-md-start">
                        <div className="mb-3">
                          <span className="fw-bold me-2">Event:</span>
                          <span>{ev.title}</span>
                        </div>
                        <div className="mb-3">
                          <span className="fw-bold me-2">Venue:</span>
                          <span>{ev.venue}</span>
                        </div>
                        <div>
                          <span className="fw-bold me-2">Time:</span>
                          <span className="me-3">{ev.time}</span>
                          <span className="fw-bold me-2">Date:</span>
                          <span>{ev.date}</span>
                        </div>
                      </div>
                      <p className="mb-4 fs-5 text-muted lh-sm">
                        {eventPageData.content.paragraph2}
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

export default Event;
