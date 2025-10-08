import React from "react";


const EventCard = ({ event, image, index = 0, className = "event-card border-0" }) => {
  return (
    <div
      className={`card ${className}`}
      style={{ height: "330px", minWidth: "300px" }}
      key={`${event.title}-${index}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <div className="card-body">
        <img
          src={image}
          alt={event.title}
          className="w-100 rounded"
          style={{
            height: "150px",
            objectFit: "cover",
          }}
        />
        <h5 className="fw-bold heading my-3">{event.title}</h5>
        <h6 className="fw-semibold heading">{event.subtitle}</h6>
        <p className="card-text">{event.date}</p>
      </div>
    </div>
  );
};

export default EventCard;
