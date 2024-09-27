import React, { useEffect } from "react";
import WelcomeSection from "./WelcomeSection";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Header: React.FC = () => {
 const handleScroll = () => {
   const footer = document.querySelector("footer");
   const atBottom =
     window.scrollY + window.innerHeight >= document.body.scrollHeight;

   if (atBottom) {
     footer?.classList.add("show");
   } else {
     footer?.classList.remove("show");
   }
 };

 useEffect(() => {
   window.addEventListener("scroll", handleScroll);
   return () => window.removeEventListener("scroll", handleScroll);
 }, []);
  
  return (
    <div className="container-fluid  d-flex" style={{ maxHeight: "100vh" }}>
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
