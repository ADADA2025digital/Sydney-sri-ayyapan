import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import AboutImg from "../assets/images/about.png";
import CustomCarousel from "../Components/CustomCarousel";
import TempleServices from "../Components/TempleServices";
import EventCard from "../Components/EventCard";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import { Helmet } from "react-helmet-async";
import {
  poojaImages,
  poojas,
  eventImages,
  images,
  events,
  servicesData,
  heroContent,
  aboutContent,
  specialPoojasContent,
  upcomingEventsContent,
  visualJourneyContent,
  carouselSettings,
} from "../Constants/Data.jsx";
import HeroVideo from "../assets/Videos/video.mp4";

const Home = ({
  items = poojaImages,
  interval = carouselSettings.defaultInterval,
}) => {
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = (direction) => {
    if (direction === "left") {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Check if device mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Special poojas
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setSlidesToShow(3);
    } else if (width >= 768) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(slideInterval);
  }, [activeIndex, interval]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % poojas.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + poojas.length) % poojas.length
    );
  };

  // Touch scroll functionality for special poojas
  const [poojatouchStart, setPoojatouchStart] = useState(null);
  const [poojatouchEnd, setPoojatouchEnd] = useState(null);

  const onPoojaTouchStart = (e) => {
    setPoojatouchEnd(null);
    setPoojatouchStart(e.targetTouches[0].clientX);
  };

  const onPoojaTouchMove = (e) => {
    setPoojatouchEnd(e.targetTouches[0].clientX);
  };

  const onPoojaTouchEnd = () => {
    if (!poojatouchStart || !poojatouchEnd) return;

    const distance = poojatouchStart - poojatouchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Upcoming Events carousel state
  const [visibleEventsCount, setVisibleEventsCount] = useState(4);
  const [eventStartIndex, setEventStartIndex] = useState(0);

  const updateVisibleEventsCount = () => {
    const width = window.innerWidth;
    let desired = 1;
    if (width >= 1200) desired = 4; // xl+
    else if (width >= 992) desired = 3; // lg
    else if (width >= 768) desired = 2; // md
    else desired = 1; // sm/xs
    setVisibleEventsCount(Math.min(desired, events.length));
  };

  useEffect(() => {
    updateVisibleEventsCount();
    window.addEventListener("resize", updateVisibleEventsCount);
    return () => window.removeEventListener("resize", updateVisibleEventsCount);
  }, []);

  const handleEventsNext = () => {
    setEventStartIndex((prev) => (prev + 1) % events.length);
  };

  const handleEventsPrev = () => {
    setEventStartIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  // Touch scroll functionality for upcoming events
  const [eventTouchStart, setEventTouchStart] = useState(null);
  const [eventTouchEnd, setEventTouchEnd] = useState(null);

  const onEventTouchStart = (e) => {
    setEventTouchEnd(null);
    setEventTouchStart(e.targetTouches[0].clientX);
  };

  const onEventTouchMove = (e) => {
    setEventTouchEnd(e.targetTouches[0].clientX);
  };

  const onEventTouchEnd = () => {
    if (!eventTouchStart || !eventTouchEnd) return;

    const distance = eventTouchStart - eventTouchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleEventsNext();
    } else if (isRightSwipe) {
      handleEventsPrev();
    }
  };

  const getCurrentPoojas = () => {
    const length = poojas.length;
    const currentItems = [];
    for (let i = 0; i < slidesToShow; i++) {
      currentItems.push(poojas[(activeIndex + i) % length]);
    }
    return currentItems;
  };

  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
      <div className="container-fluid p-0 ">
        {/* Hero Section */}
        <section className=" position-relative text-white d-flex align-items-center justify-content-center overflow-hidden text-center py-5 vh-100">
          {/* Video Background */}
          <div className="video-background position-absolute w-100 h-100 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-100 h-100 object-fit-cover"
              poster="../assets/images/video-poster.jpg"
            >
              <source src={HeroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Overlay for better readability */}
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
          </div>

          <motion.div
            className="container d-flex flex-column justify-content-center align-items-center position-relative z-3 hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="col-md-8 text-center flex-column">
              <motion.h1
                className="display-3 fw-bold mb-3 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              >
                {heroContent.title}
              </motion.h1>

              <motion.p
                className="lead mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                {heroContent.description}
              </motion.p>

              <div className="d-flex justify-content-center gap-3 mt-5">
                <a
                  href="/contactus"
                  className="btn btn-warning px-4 py-2 hover-button text-white fw-bold border-0 position-relative rounded-5"
                >
                  Contact Us
                </a>
                <a
                  href="/about"
                  className="btn btn-warning px-4 py-2 hover-button text-white fw-bold border-0 position-relative rounded-5"
                >
                  About Us
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className=" bg-white py-5">
              <div className="container">
                <div className="row d-flex align-items-center">
                  <motion.div
                    className="col-md-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  >
                    <div className="image-container">
                      <img
                        src={AboutImg}
                        alt="Ayyappa Swami Temple"
                        className="img-fluid rounded about-image d-flex align-items-center"
                        style={{ minHeight: "400px" }}
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    className="col-md-6 d-flex flex-column  text-center text-md-start justify-content-between"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  >
                    <div>
                      <motion.h4
                        className="heading flex-grow-1 mb-3 mt-5 mt-md-0 fw-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: 0.2,
                          ease: "easeOut",
                        }}
                      >
                        {aboutContent.title}
                      </motion.h4>
                      <motion.h2
                        className="about-heading flex-grow-1 mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: 0.2,
                          ease: "easeOut",
                        }}
                      >
                        {aboutContent.heading}
                      </motion.h2>
                      <motion.p
                        className="about-description flex-grow-1 mb-4 fs-5 lh-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: 0.4,
                          ease: "easeOut",
                        }}
                      >
                        {aboutContent.description}
                      </motion.p>
                      <motion.h3
                        className="schedule-title flex-grow-1 mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: 0.6,
                          ease: "easeOut",
                        }}
                      >
                        {aboutContent.scheduleTitle}
                      </motion.h3>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: 0.8,
                          ease: "easeOut",
                        }}
                      >
                        <div className="row">
                          <div className="col-xs-12 col-md-6 mb-3">
                            <div>
                              <h4 className="heading mb-2">
                                {aboutContent.weekdays.title}
                              </h4>
                              <p className="schedule-time mb-1">
                                {aboutContent.weekdays.morning}
                              </p>
                              <p className="schedule-time">
                                {aboutContent.weekdays.evening}
                              </p>
                            </div>
                          </div>
                          <div className="col-xs-12 col-md-6 mb-3">
                            <div>
                              <h4 className="heading mb-2">
                                {aboutContent.weekends.title}
                              </h4>
                              <p className="schedule-time mb-1">
                                {aboutContent.weekends.morning}
                              </p>
                              <p className="schedule-time">
                                {aboutContent.weekends.evening}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Temple Service */}
        <section>
          <TempleServices services={servicesData} />
        </section>

        {/* Special Poojas */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className=" py-5 bg-white">
              <div className="row align-items-center">
                <motion.div
                  className="col-md-6 mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-end justify-content-end"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  <div className=" d-flex flex-column align-items-center align-items-md-start justify-content-start col-12 col-md-10 ">
                    <motion.h4
                      className="heading text-center text-,d-start fw-bold heading text-uppercase mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      {specialPoojasContent.subtitle}
                    </motion.h4>
                    <motion.h2
                      className="mb-4 fw-bold text-start"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.6,
                        ease: "easeOut",
                      }}
                    >
                      {specialPoojasContent.title}
                    </motion.h2>
                    <motion.p
                      className="mb-3 text-muted text-center text-md-start fs-5"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.8,
                        ease: "easeOut",
                      }}
                    >
                      {specialPoojasContent.description1}
                    </motion.p>
                    <motion.p
                      className="mb-4 text-muted text-center text-md-start fs-5"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 1.0,
                        ease: "easeOut",
                      }}
                    >
                      {specialPoojasContent.description2}
                    </motion.p>
                  </div>
                </motion.div>
                <motion.div
                  className="col-md-6 p-0"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  <Carousel
                    indicators={false}
                    controls={false}
                    interval={null}
                    className="mt-4"
                  >
                    <Carousel.Item>
                      <div
                        className="d-flex justify-content-center justify-content-lg-start gap-5"
                        onTouchStart={onPoojaTouchStart}
                        onTouchMove={onPoojaTouchMove}
                        onTouchEnd={onPoojaTouchEnd}
                        style={{ touchAction: "pan-y" }}
                      >
                        {getCurrentPoojas().map((item, index) => (
                          <motion.div
                            key={index}
                            className="d-flex flex-column align-items-start position-relative"
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="rounded-3 carousel-image"
                              style={{
                                objectFit: "cover",
                              }}
                            />
                            <div className="carousel-overlay p-3 bg-white position-absolute text-center rounded-3">
                              <p className="fs-6 text-secondary">
                                {item.schedule}
                              </p>
                              <h5 className="fs-6 fw-bold text-dark">
                                {item.title}
                              </h5>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </motion.div>
                {/* Arrows */}
                <motion.div
                  className="d-flex align-items-center justify-content-center gap-2 mt-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                >
                  <motion.div
                    className="custom-border d-flex align-items-center justify-content-center rounded-circle"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowLeft
                      onClick={handlePrev}
                      ref={prevRef}
                      className="cursor-pointer fs-4 heading"
                    />
                  </motion.div>
                  <motion.div
                    className="custom-border d-flex align-items-center justify-content-center rounded-circle"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight
                      onClick={handleNext}
                      ref={nextRef}
                      className="cursor-pointer fs-4 heading"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Upcoming Events */}
        <section className="upcoming-events">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-center py-5 container">
              <motion.h4
                className="text-uppercase heading fw-bold mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                {upcomingEventsContent.subtitle}
              </motion.h4>
              <motion.h2
                className="mb-5 fw-bold "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                {upcomingEventsContent.title}
              </motion.h2>

              <div className="position-relative d-flex align-items-center justify-content-center">
                <div className=" overflow-x-hidden w-100">
                  <div
                    className="d-flex align-items-center justify-content-center justify-content-md-between d-flex col-12"
                    onTouchStart={onEventTouchStart}
                    onTouchMove={onEventTouchMove}
                    onTouchEnd={onEventTouchEnd}
                    style={{ touchAction: "pan-y" }}
                  >
                    {Array.from({ length: visibleEventsCount }).map((_, i) => {
                      const event =
                        events[(eventStartIndex + i) % events.length];
                      const img =
                        eventImages[(eventStartIndex + i) % eventImages.length];
                      return (
                        <EventCard
                          key={`${event.title}-${i}`}
                          event={event}
                          image={img}
                          index={i}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              <motion.div
                className="d-flex align-items-center justify-content-center gap-2 mt-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="custom-border d-flex align-items-center justify-content-center rounded-circle"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowLeft
                    onClick={handleEventsPrev}
                    ref={prevRef}
                    className="cursor-pointer fs-4 heading"
                  />
                </motion.div>
                <motion.div
                  className="custom-border d-flex align-items-center justify-content-center rounded-circle"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight
                    onClick={handleEventsNext}
                    ref={nextRef}
                    className="cursor-pointer fs-4 heading"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Visual Journey */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="visual-journey-container text-center my-5 w-100 bg-white">
              <motion.h4
                className="text-uppercase heading mb-4 fw-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                {visualJourneyContent.subtitle}
              </motion.h4>
              <motion.h2
                className="fw-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                {visualJourneyContent.title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <CustomCarousel
                  items={images}
                  speed={carouselSettings.carouselSpeed}
                />
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Home;
