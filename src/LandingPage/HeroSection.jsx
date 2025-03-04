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

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="relative bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
              Experience Natural Healing Through Ancient Wisdom
            </h1>
            <p className="text-lg text-stone-600 mb-8">
              Discover the power of Ayurvedic healing at our Ayurveda wellness
              center. Our experienced practitioners combine traditional methods
              with modern care.
            </p>
            <div className="flex gap-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Book Consultation
              </Button>
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-emerald-100 p-8">
              <div className="w-full h-full overflow-hidden rounded-full">
                <img
                  src="https://res.cloudinary.com/dkv3bx51z/image/upload/v1741078368/ProfilePhotoNew2_q8w4hq.jpg"
                  alt="Ayurvedic Treatment"
                  className="rounded-full object-contain"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400 fill-yellow-400" />
                <span className="font-medium">4.9/5 Rating</span>
              </div>
              <p className="text-sm text-stone-600">Based on 200+ reviews</p>
            </div>
          </div>
        </div>

        {/* About the Doctor Section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center gap-6">
            <Avatar className="w-30 h-30 object-contain">
              <AvatarImage src="https://res.cloudinary.com/dkv3bx51z/image/upload/v1741078374/ProfilePhotoNew_gx3abq.jpg" />
              <AvatarFallback>Dr. A</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-3xl font-serif text-stone-800">
                Dr. Ankita Nikhil Chopade Manave
              </h2>
              <p className="text-lg text-stone-600">
                MD in Dravyaguna | Ayurveda Practitioner
              </p>
            </div>
          </div>
          <p className="mt-6 text-stone-600 text-lg">
            Hello everyone, I am Dr. Ankita Nikhil Chopade Manave. Here, I want
            to share my journey of “Being a Vaidya” (Ayurveda practitioner). I
            graduated from Yashwant Ayurveda College, Kodoli, one of the best
            Ayurveda colleges, where I gained extensive knowledge of both
            Ayurveda and allopathy medicine.
          </p>
          <p className="mt-4 text-stone-600 text-lg">
            After completing my BAMS, I pursued post-graduation at the Institute
            of Teaching and Research in Ayurveda, University in Jamnagar,
            Gujarat, a WHO-recognized center for traditional medicines.
            Specializing in Dravyaguna (MD), I deepened my understanding of
            Ayurvedic principles, treatments, and therapies, enhancing my
            clinical skills and knowledge.
          </p>
          <p className="mt-4 text-stone-600 text-lg">
            Under the guidance of my mentor, Vd. Bhupesh Patel, I gained
            confidence and courage to practice Ayurveda. Additionally, I trained
            in Panchkarma therapy under the expertise of Joshi Sir and Ma’am in
            Dhule, where I received practical and theoretical insights that
            greatly benefit my current practice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
