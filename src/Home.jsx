import React from "react";
import OurCourses from "./Components/OurCourses";
import CarouselComponent from "./Components/CarouselComponent";
import LearnSmarter from "./Components/LearnSmarter";
import Alumini from "./Components/Alumini";
import OurHiringPartners from "./Components/OurHiringPartners";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";
import Reviews from "./Components/Reviews";
import HomeSlider from "./Components/HomeSlider";
import MasterProgramCourses from "./Components/MasterProgramCourses";
import InterestForm from "./Components/IntrestForm";
import Nav2 from "./Components/Nav2"
import Nav from "./Components/Nav"
import WhyAdv from "./Components/WhyAdv"
import SocialMedia from "./Components/SocialMedia";

function Home() {
  return (
    <div className="app relative">
      <Nav />
      <HomeSlider />
      <InterestForm />
      <WhyAdv />
      <LearnSmarter />
      <MasterProgramCourses />
      <Alumini />
      <Reviews />
      <OurHiringPartners />
      <Subscribe />
      <Footer />
      <SocialMedia />
    </div>
  );
}

export default Home;