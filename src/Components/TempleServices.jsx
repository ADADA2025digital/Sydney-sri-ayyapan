import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
 
const TempleServices = ({ services }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const servicesRef = useRef(null);
 
  const handleServiceClick = (serviceId) => {
    navigate(`/service/${serviceId}`);
  };
 
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
 
    checkMobile();
    window.addEventListener("resize", checkMobile);
 
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
 
  // Handle next service
  const handleNext = () => {
    if (isMobile) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }
  };
 
  // Handle previous service
  const handlePrev = () => {
    if (isMobile) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + services.length) % services.length
      );
    }
  };
 
  // Touch scroll functionality
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
 
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
 
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
 
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
 
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
 
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };
 
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        className="container-fluid text-center py-5 TempleServices"
        style={{ backgroundColor: "#fce4e4" }}
      >
        <motion.h4
          className="text-uppercase heading fw-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          Enhancing Lives with Spiritual Guidance
        </motion.h4>
        <motion.h1
          className="my-3 service-title fw-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          Connecting Devotees Through Spiritual Temple Services
        </motion.h1>
 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <div className="position-relative">
            {/* Mobile Services Display */}
            {isMobile ? (
              <div
                className="d-flex justify-content-center"
                ref={servicesRef}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                style={{ touchAction: "pan-y" }}
              >
                <motion.div
                  key={currentIndex}
                  className="col-12"
                  style={{ maxWidth: "450px" }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div   style={{ height: "380px" }}   >
                    <div
                      className="card shadow-sm p-3 mb-5 bg-white h-100 border-0 rounded-5 cursor-pointer "  
                             
                      onClick={() =>
                        handleServiceClick(services[currentIndex].id)
                      }
                    >
                      <img
                        className="card-img-top rounded-5"
                        src={services[currentIndex].image}
                        style={{
                          height: "200px",
                          objectFit: "cover",
                        }}
                        alt={services[currentIndex].title}
                      />
                      <div className="card-body d-flex flex-column">
                        <h4 className="card-title text-center fw-bold mt-2">
                          {services[currentIndex].title}
                        </h4>
                        <p className="card-text text-center flex-grow-1">
                          {services[currentIndex].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : (
              /* Desktop Services Display */
              <div className="row mt-4 justify-content-center align-items-stretch">
                {services.map((service, index) => (
                  <motion.div
                    className="col-md-4 d-flex"
                    style={{ maxWidth: "450px" }}
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <div className="w-100">
                      <div
                        className="card shadow-sm p-3 mb-5 bg-white h-100"
                        style={{
                          border: "none",
                          borderRadius: "25px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleServiceClick(service.id)}
                      >
                        <img
                          className="card-img-top"
                          src={service.image}
                          style={{
                            borderRadius: "15px",
                            height: "200px",
                            objectFit: "cover",
                          }}
                          alt={service.title}
                        />
                        <div className="card-body d-flex flex-column">
                          <h4 className="card-title text-center text-md-start fw-bold mt-2">
                            {service.title}
                          </h4>
                          <p className="card-text text-center text-md-start flex-grow-1">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
 
            {/* Mobile Arrows - Only show on mobile */}
            {isMobile && (
              <motion.div
                className="d-flex align-items-center justify-content-center gap-2 mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="custom-border d-flex align-items-center justify-content-center rounded-circle cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={handlePrev}
                >
                  <ArrowLeft className="fs-4 heading" />
                </motion.div>
                <motion.div
                  className="custom-border d-flex align-items-center justify-content-center rounded-circle cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleNext}
                >
                  <ArrowRight className="fs-4 heading" />
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
 
export default TempleServices;