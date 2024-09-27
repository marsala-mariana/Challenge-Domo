import React, { useEffect } from "react";
import WelcomeSection from "./WelcomeSection";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Header: React.FC = () => {
   useEffect(() => {
     const handleScroll = () => {
       const footer = document.querySelector("footer");
       if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
         footer?.classList.add("show");
       } else {
         footer?.classList.remove("show");
       }
     };

     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll); 
   }, []);
  
  return (
    <div className="container-fluid  d-flex" style={{ maxHeight: "86vh" }}>
      <div
        className="row flex-grow-1"
        style={{ maxHeight: "100vh", overflow: "auto" }}
      >
        <WelcomeSection />
        <ContactForm />
        <Footer/>
      </div>
    </div>
  );
};

export default Header;
