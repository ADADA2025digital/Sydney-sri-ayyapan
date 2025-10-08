import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../assets/images/Logo.png";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  // Navigation links data
  const navigationLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/event", label: "Events" },
    { to: "/deities", label: "Deities" },
    { to: "/contactus", label: "Contact" },
  ];

  // Contact information data
  const contactInfo = [
    {
      icon: FaPhoneAlt,
      label: "Talk to us",
      value: "+61 2 9631 2800",
      href: "tel:+61296312800",
      className: "text-start"
    },
    {
      icon: FaEnvelope,
      label: "Email to us",
      value: "info@sydneysriayyappa.com",
      href: "mailto:info@sydneysriayyappa.com",
      className: ""
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "1 Perry Street, Wentworthville, NSW, Australia",
      href: "https://www.google.com/maps/place/Sydney+Sri+Ayyappa+Swami+Centre/@-33.8106082,150.9655676,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12bd63e38aea17:0xe10180d0690ad68f!8m2!3d-33.8106083!4d150.9704385!16s%2Fg%2F11xk3why1?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D",
      className: "text-start",
      target: "_blank",
      rel: "noopener noreferrer"
    }
  ];

  // Handle navbar scroll fix
  useEffect(() => {
    const onScroll = () => setIsFixed(window.scrollY > 150);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle screen resize
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleOffcanvasToggle = () => setShowOffcanvas((prev) => !prev);
  const handleOffcanvasClose = () => setShowOffcanvas(false);

  return (
    <div className="container-fluid p-0 bg-white ">
      {/* Top contact strip (desktop only) */}
      <div className="d-none d-lg-block py-2 container ">
        <div className="row col-12 ">
          <div className=" d-flex justify-content-between align-items-center">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <div key={index} className="col d-flex col-4">
                  <IconComponent className="me-2 icon-style heading rounded-3 p-2 mt-2" />
                  <div className="contact-info">
                    <a 
                      href={contact.href} 
                      className={contact.className}
                      target={contact.target}
                      rel={contact.rel}
                    >
                      <span className="text-muted small">{contact.label}</span>
                      <br />
                      <span className="text-dark small">{contact.value}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className={`full-width-background ${isFixed ? "fixed-navbar" : ""}`}>
        <div className="container d-flex justify-content-between align-items-center col-12 d-lg-block">
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center d-block d-lg-none py-2"
          >
            <img
              src={Logo}
              alt="Sydney Sri Ayyappa Swami Centre"
              className="logo"
            />
          </Link>

          <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <button
              className="navbar-toggler d-flex align-items-end justify-content-end d-block d-lg-none border-0 "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#responsive-navbar"
              aria-controls="responsive-navbar"
              onClick={handleOffcanvasToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* MOBILE: Offcanvas menu */}
            {isMobile ? (
              <div
                className={`offcanvas offcanvas-end offcanvas-custom text-white d-flex flex-column justify-content-center align-items-center text-center text-white nav-link-custom w-100 fw-bold  ${
                  showOffcanvas ? "show" : ""
                }`}
                id="responsive-navbar"
                tabIndex="-1"
                aria-labelledby="offcanvasNavbarLabel"
                aria-hidden={!showOffcanvas}
              >
                <div className="offcanvas-header ">
                  <button
                    type="button"
                    className="btn-close btn-close-white fs-1 mt-1 ms-1"
                    onClick={handleOffcanvasClose}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body d-flex flex-column justify-content-center text-white nav-link-custom lh-lg">
                  {/* Links */}
                  {navigationLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className="nav-link-custom text-white nav-link-custom "
                      onClick={handleOffcanvasClose}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                  <NavLink
                    to="/donation"
                    className="btn btn-warning rounded-5 px-3 py-3 text-dark fw-bold donation-btn"
                    onClick={handleOffcanvasClose}
                  >
                    Donation
                  </NavLink>
                </div>
              </div>
            ) : (
              // DESKTOP: Collapse menu
              <div
                className="collapse navbar-collapse container p-0"
                id="responsive-navbar"
              >
                <div className="col-12 d-flex justify-content-between align-items-center nav-links  ">
                  <div className="d-flex align-items-center justify-content-start col-4">
                    <Link
                      to="/"
                      className="navbar-brand d-flex align-items-center"
                    >
                      <img
                        src={Logo}
                        alt="Sydney Sri Ayyappa Swami Centre"
                        className="logo"
                      />
                    </Link>
                  </div>

                  {navigationLinks.map((link) => (
                    <NavLink 
                      key={link.to} 
                      to={link.to} 
                      className="text-white nav-link-custom"
                    >
                      {link.label}
                    </NavLink>
                  ))}
                  <NavLink
                    to="/donation"
                    className="btn btn-warning px-4 py-2 hover-button text-white fw-bold border-0 position-relative rounded-5"
                  >
                    Donation
                  </NavLink>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
