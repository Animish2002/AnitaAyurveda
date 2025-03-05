import React from "react";
import {
  Star,
  BookOpen,
  GraduationCap,
  Stethoscope,
  BookOpenCheck,
  CheckCircle,
  Award,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle home scroll
  const handleHomeScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-white">
      {/* Initial Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-6">
            <div className="bg-emerald-100/50 inline-block px-4 py-2 rounded-full">
              <div className="flex items-center space-x-2 text-emerald-800">
                <Award size={20} />
                <span className="text-sm font-medium">
                  Certified Ayurvedic Wellness Center
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-stone-900 leading-tight">
              Holistic Healing through{" "}
              <span className="text-emerald-600">Ayurvedic Wisdom</span>
            </h1>

            <p className="md:text-xl text-base text-stone-600 leading-relaxed">
              Transform your health journey with personalized Ayurvedic
              treatments that harmonize body, mind, and spirit. Our expert
              practitioners combine time-honored traditional techniques with
              modern, evidence-based approaches.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("#appointment")}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <BookOpen className="mr-2" /> Book Consultation
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center">
                <Star className="text-yellow-400 fill-yellow-400" />
                <span className="ml-2 font-semibold text-stone-700">
                  4.9/5 Rating
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-emerald-500" />
                <span className="ml-2 text-stone-600">200+ Happy Patients</span>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-lg aspect-square">
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-100 rounded-full blur-xl opacity-70"></div>
                <div className="relative z-10 aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl">
                  <img
                    src="https://res.cloudinary.com/dkv3bx51z/image/upload/v1741078368/ProfilePhotoNew2_q8w4hq.jpg"
                    alt="Dr. Ankita Nikhil Chopade Manave"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute bottom-4 right-4 z-20">
                  <Card className="w-64 shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src="https://res.cloudinary.com/dkv3bx51z/image/upload/v1741109346/doctor_llxdmc.png"
                          alt="Doctor Avatar"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-bold text-stone-800">
                            Dr. Ankita Chopade
                          </h4>
                          <p className="text-sm text-stone-600">
                            Ayurveda Specialist
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Doctor's Background Section */}
      <section id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-center text-stone-800 mb-8">
              Meet Dr. Ankita Nikhil Chopade Manave
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-4 bg-emerald-50 p-6 rounded-lg">
                  <GraduationCap
                    className="text-emerald-600 flex-shrink-0"
                    size={40}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">
                      Educational Journey
                    </h3>
                    <p className="text-stone-600">
                      Graduated from Yashwant Ayurveda College, Kodoli—a premier
                      institution covering both Ayurveda and allopathy medicine.
                      This foundational experience was crucial in shaping my
                      professional growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-emerald-50 p-6 rounded-lg">
                  <BookOpenCheck
                    className="text-emerald-600 flex-shrink-0"
                    size={40}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">
                      Advanced Specialization
                    </h3>
                    <p className="text-stone-600">
                      Completed MD in Dravyaguna from the Institute of Teaching
                      and Research in Ayurveda, Jamnagar, Gujarat. This
                      WHO-collaborative program deepened my understanding of
                      Ayurvedic principles and clinical practices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 bg-emerald-50 p-6 rounded-lg">
                  <Stethoscope
                    className="text-emerald-600 flex-shrink-0"
                    size={40}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">
                      Current Practice
                    </h3>
                    <p className="text-stone-600">
                      Practicing at Anita Ayurveda Clinic & Panchakarma Center,
                      Bakewadi. Dedicated to providing holistic consultations
                      that restore balance to mind, body, and spirit.
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-100 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-stone-800 mb-4">
                    Comprehensive Panchakarma Services
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-stone-700">
                    {[
                      "Snehan",
                      "Swedan",
                      "Basti",
                      "Vaman",
                      "Virechan",
                      "Pind Sweda",
                      "Shirodhara",
                    ].map((service) => (
                      <li key={service} className="flex items-center">
                        <CheckCircle
                          className="text-emerald-600 mr-2"
                          size={16}
                        />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <blockquote className="text-2xl italic text-stone-700 max-w-2xl mx-auto">
                "Ayurveda has given us a new vision—one that not only elevates
                us but also deepens our understanding of health. Ayurveda first
                heals you, then empowers you to heal the world."
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
