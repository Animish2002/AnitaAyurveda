import React from "react";
import {
  Star,
  Clock,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const AboutSection = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img
                src="/api/placeholder/600/400"
                alt="Our Clinic"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-emerald-50 p-8 rounded-2xl">
              <h3 className="text-3xl font-serif text-emerald-600 mb-2">25+</h3>
              <p className="text-stone-600">Years of Experience</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-serif text-stone-800 mb-6">
              Holistic Healing Rooted in Ancient Wisdom
            </h2>
            <p className="text-stone-600 mb-6">
              Our clinic combines centuries-old Ayurvedic practices with modern
              wellness approaches. We believe in treating not just symptoms, but
              the whole person - body, mind, and spirit.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-medium text-stone-800 mb-2">
                  Expert Practitioners
                </h4>
                <p className="text-stone-600 text-sm">
                  Certified Ayurvedic doctors with extensive experience
                </p>
              </div>
              <div>
                <h4 className="font-medium text-stone-800 mb-2">
                  Natural Treatments
                </h4>
                <p className="text-stone-600 text-sm">
                  100% natural herbs and traditional methods
                </p>
              </div>
              <div>
                <h4 className="font-medium text-stone-800 mb-2">
                  Modern Facility
                </h4>
                <p className="text-stone-600 text-sm">
                  State-of-the-art treatment rooms and equipment
                </p>
              </div>
              <div>
                <h4 className="font-medium text-stone-800 mb-2">
                  Personalized Care
                </h4>
                <p className="text-stone-600 text-sm">
                  Customized treatment plans for each patient
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
            >
              Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
