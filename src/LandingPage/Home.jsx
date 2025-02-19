import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutUs";
import ReviewsSection from "./GoogleReviews";
import Footer from "./Footer";
import AppointmentPage from "./AppointmentPage";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ReviewsSection />
      <AppointmentPage />
      <Footer />
    </>
  );
};

export default Home;
