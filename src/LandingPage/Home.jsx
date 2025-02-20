import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutUs";
import ReviewsSection from "./GoogleReviews";
import Footer from "./Footer";
import AppointmentPage from "./AppointmentPage";
import TreatmentsSection from "./TreatmentsSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TreatmentsSection />
      <AppointmentPage />
      <ReviewsSection />
      <Footer />
    </>
  );
};

export default Home;
