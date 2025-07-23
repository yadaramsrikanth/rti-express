// src/components/About/About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About RTI Express / గురించి</h1>

      <div className="about-content">
        <p>
          <strong>RTI Express</strong> is an independent media platform focused on empowering the public through information, transparency, and truth.
        </p>
        <p>
          <strong>RTI ఎక్స్ప్రెస్</strong> ఒక స్వతంత్ర మీడియా వేదికగా సమాచారాన్ని ప్రజల చేతికి అందించడమే మా ప్రధాన లక్ష్యం.
        </p>

        <h2>Contact Us / సంప్రదించండి</h2>
        <ul>
          <li><strong>Email:</strong> hello@rtiexpress.com</li>
          <li><strong>Phone:</strong> +91-98765-43210</li>
          <li><strong>Location:</strong> Hyderabad, Telangana, India</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
