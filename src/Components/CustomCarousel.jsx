import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Mousewheel, Navigation } from "swiper/modules";

function CustomCarousel({ items, speed = 3000 }) {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1600) {
        setSlidesPerView(6);
      } else if (width >= 1280) {
        setSlidesPerView(5);
      } else if (width >= 1024) {
        setSlidesPerView(4);
      } else if (width >= 800) {
        setSlidesPerView(3);
      } else if (width >= 600) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const swiperInstance = swiperRef.current;
    if (!swiperInstance) return;

    const handleMouseEnter = () => {
      swiperInstance.autoplay.stop();
    };

    const handleMouseLeave = () => {
      swiperInstance.autoplay.start();
    };

    const swiperEl = swiperInstance.el;

    swiperEl.addEventListener("mouseenter", handleMouseEnter);
    swiperEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      swiperEl.removeEventListener("mouseenter", handleMouseEnter);
      swiperEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="w-screen max-w-full py-4 bg-[#0c0c0c] relative">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={500}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        modules={[Autoplay, Mousewheel, Navigation]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        className="mySwiper px-3 py-0"
      >
        {repeatedItems.map((item, index) => (
          <SwiperSlide
            key={index}
            className="overflow-hidden rounded-5"
          >
            {typeof item === "string" ? (
              <img
                src={item}
                alt={`Slide ${index + 1}`}
                className="rounded-4"
                style={{
                  width: "95%",
                  height: "400px",
                  objectFit: "cover",
                }}
              />
            ) : (
              <div className="flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.title || `Slide ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CustomCarousel;
