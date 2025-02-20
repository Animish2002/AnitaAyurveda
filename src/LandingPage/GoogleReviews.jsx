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

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      review:
        "Exceptional care and attention to detail. The Panchakarma treatment transformed my health completely.",
      image: "/api/placeholder/40/40",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      review:
        "Dr. Sharma's expertise in Ayurvedic medicine is outstanding. Highly recommended for chronic conditions.",
      image: "/api/placeholder/40/40",
    },
    {
      id: 3,
      name: "Emma Thompson",
      rating: 5,
      review:
        "A serene environment and highly professional staff. The herbal treatments were very effective.",
      image: "/api/placeholder/40/40",
    },
  ];

  return (
    <div className="bg-stone-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-stone-800 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-stone-600">
            Don't just take our word for it - hear from our valued patients
          </p>
        </div>
        <div className="w-full">

          <script
            src="https://static.elfsight.com/platform/platform.js"
            async
          ></script>
          <div
            class="elfsight-app-a29d2f33-254a-47d7-90a9-75e39f0f877e"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
