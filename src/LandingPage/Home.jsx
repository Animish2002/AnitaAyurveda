import React, { useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutUs";
import ReviewsSection from "./GoogleReviews";
import Footer from "./Footer";
import AppointmentPage from "./AppointmentPage";
import TreatmentsSection from "./TreatmentsSection";
import { motion } from "framer-motion";

const Home = () => {
  const aboutRef = useRef(null);
  const treatmentsRef = useRef(null);
  const appointmentRef = useRef(null);
  const reviewsRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.0 }}
        className="h-screen"
      >
        <Navbar
          onHomeClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onAboutClick={() => scrollToSection(aboutRef)}
          onTreatmentsClick={() => scrollToSection(treatmentsRef)}
          onAppointmentClick={() => scrollToSection(appointmentRef)}
          onReviewsClick={() => scrollToSection(reviewsRef)}
        />

        <React.Suspense fallback={<div className="h-screen" />}>
          <HeroSection />
        </React.Suspense>

        <div ref={aboutRef}>
          <React.Suspense fallback={<div className="h-screen" />}>
            <AboutSection />
          </React.Suspense>
        </div>

        <div ref={treatmentsRef}>
          <React.Suspense fallback={<div className="h-screen" />}>
            <TreatmentsSection />
          </React.Suspense>
        </div>

        <div ref={appointmentRef}>
          <React.Suspense fallback={<div className="h-screen" />}>
            <AppointmentPage />
          </React.Suspense>
        </div>

        <div ref={reviewsRef}>
          <React.Suspense fallback={<div className="h-screen" />}>
            <ReviewsSection />
          </React.Suspense>
        </div>

        <Footer />
      </motion.div>
    </>
  );
};

export default Home;

