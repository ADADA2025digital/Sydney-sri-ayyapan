import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/Style.css";

// Layout
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

// Pages
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Event from "./Pages/Event";
import Deities from "./Pages/Deities";
import Donation from "./Pages/Donation";
import ServiceDetails from "./Pages/ServiceDetails";
import Services from "./Pages/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/deities" element={<Deities />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/event" element={<Event />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:serviceId" element={<ServiceDetails />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
