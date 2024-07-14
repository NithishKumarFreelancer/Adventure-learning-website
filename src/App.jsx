import React, { useEffect } from "react";
import Lenis from '@studio-freight/lenis';
import Nav from "./Components/Nav";
import Nav2 from "./Components/Nav2";
import WhyAdv from "./Components/WhyAdv";
import CarouselComponent from "./Components/CarouselComponent";
import LearnSmarter from "./Components/LearnSmarter";
import "./App.css";
import OurCourses from "./Components/OurCourses";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1, // scroll duration factor
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // custom easing function
      smoothWheel: true, // enable smooth scrolling for wheel events
      smoothTouch: false, // disable smooth scrolling for touch events
      touchMultiplier: 1.5, // factor to multiply touch scroll speed
      orientation: 'vertical', // scroll orientation
      useOverscroll: true, // enable overscroll
      useControls: true, // enable controls
      useAnchor: true, // enable anchor links
      useRaf: true, // use requestAnimationFrame for updates
      infinite: false, // disable infinite scroll
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up Lenis on component unmount
    };
  }, []);

  return (
    <div className="app">
      <CarouselComponent />
      <Nav2 />
      <Nav />
      <WhyAdv />
      <LearnSmarter />
      <OurCourses/>
    </div>
  );
}

export default App;