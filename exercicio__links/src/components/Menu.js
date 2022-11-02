import React from "react";
import NavHeader from "./NavHeader";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Banner from "./Banner";
import FeaturesSection from "./FeaturesSection";
import ServicesSection from "./ServicesSection";
import PortfolioSection from "./PortfolioSection";
import TestimonialsSection from "./TestimonialsSection";
import TeamSection from "./TeamSection";

export default function Menu() {
  return (
    <div>
      <Router>
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <NavHeader />
            <div className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link exact to="/">Banner</Link>
                </li>
                <li>
                  <Link to="/features">Features</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/portifolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link to="/team">Team</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/features" element={<FeaturesSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/portifolio" element={<PortfolioSection />} />
          <Route path="/testimonials" element={<TestimonialsSection />} />
          <Route path="/team" element={<TeamSection />} />
        </Routes>
      </Router>
    </div>
  );
}
