import { ArrowRightIcon } from "@primer/octicons-react";
import React from "react";
import { Button } from "react-bootstrap";

const WelcomeSection: React.FC = () => {
  return (
    <div className="col-md-6 welcome-section">
      <span className="custom-badge mb-2">Welcome to Businezz X</span>
      <h1 className="welcome-title mb-3" style={{ textAlign: "start" }}>
        Join us in growing <br />
        your <span className="business-highlight">business</span>.
      </h1>
   
      <div className="line" />
      <p className="welcome-paragraph mb-4">
        Elevate your business with Businezz X, a <br />
        professional Webflow template.
      </p>
      <Button variant="light" size="lg" className="welcome-button mt-3">
        Contact us <ArrowRightIcon size={20} className="arrow-style" />
      </Button>
    </div>
  );
};

export default WelcomeSection;
