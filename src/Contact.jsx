import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Confetti from "react-confetti";
import WhyAdvButton from "./atomicComponents/WhyAdvButton";
import Nav2 from "./Components/Nav2";
import Nav from "./Components/Nav";
import Location from "./Components/Location";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import DemoComponent from "./Components/DemoComponent";
import CarouselComponent from "./Components/CarouselComponent";

function Contact() {
  return (
    <div>
      <Nav />
      <ContactForm />
      <Location />
      <DemoComponent/>
      <Footer />
    </div>
  );
}

export default Contact;
