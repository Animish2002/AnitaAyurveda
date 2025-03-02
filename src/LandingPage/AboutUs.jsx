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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";

const AboutSection = () => {
  // Example media items - replace with your actual content
  const mediaItems = [
    {
      type: "image",
      src: "https://res.cloudinary.com/dkv3bx51z/image/upload/v1740933262/Shirodhara_p67uau.jpg",
      alt: "Our Clinic",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkv3bx51z/image/upload/v1740933268/Medicines_aslbo2.jpg",
      alt: "Our Clinic",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkv3bx51z/image/upload/v1740933271/SuvarnaPrashan_nagmrq.jpg",
      alt: "Treatments",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkv3bx51z/image/upload/v1740933276/SuvarnaPrashan4_azj0rw.jpg",
      alt: "Treatments",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkv3bx51z/image/upload/v1740933272/SuvarnaPrashan3_xx4glf.jpg",
      alt: "Treatments",
    },
    {
      type: "video",
      src: "https://res.cloudinary.com/dkv3bx51z/video/upload/v1740933270/Shirodhara_h6wcuh.mp4",
      alt: "Clinic Tour",
    },
    {
      type: "video",
      src: "https://res.cloudinary.com/dkv3bx51z/video/upload/v1740933279/Jalu_rvsufb.mov",
      alt: "Clinic Tour",
    },
    {
      type: "video",
      src: "https://res.cloudinary.com/dkv3bx51z/video/upload/v1740933324/Snigdha_dagdha_eljyvx.mp4",
      alt: "Clinic Tour",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkv3bx51z/image/upload/v1740933267/ClinicImage_rxvzwu.jpg",
      alt: "Facilities",
    },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Carousel
              className="w-full rounded-2xl overflow-hidden"
              opts={{ loop: true, align: "start", autoplay: true }}
            >
              <CarouselContent>
                {mediaItems.map((item, index) => (
                  <CarouselItem key={index} className="flex justify-center">
                    <div className="h-96 flex items-center justify-center">
                      {item.type === "image" ? (
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="max-h-full max-w-full object-contain"
                        >
                          <source src={item.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            <div className="absolute -bottom-8 -right-8 bg-emerald-50 p-8 rounded-2xl">
              <h3 className="text-3xl font-serif text-emerald-600 mb-2">5+</h3>
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
