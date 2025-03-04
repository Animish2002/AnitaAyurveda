import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutUs";
import ReviewsSection from "./GoogleReviews";
import Footer from "./Footer";
import AppointmentPage from "./AppointmentPage";
import TreatmentsSection from "./TreatmentsSection";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.3 }}
        className=" h-screen"
      >
        <Navbar />
        <HeroSection />
        <AboutSection />
        <TreatmentsSection />
        <AppointmentPage />
        <ReviewsSection />
        <Footer />
      </motion.div>
    </>
  );
};

export default Home;
