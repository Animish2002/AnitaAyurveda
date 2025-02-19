import React from 'react';
import { Star, Clock, Phone, Mail, MapPin, ChevronRight, Instagram, Facebook, Twitter } from 'lucide-react';
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
              Discover the power of Ayurvedic healing at our state-of-the-art wellness center. 
              Our experienced practitioners combine traditional methods with modern care.
            </p>
            <div className="flex gap-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Book Consultation
              </Button>
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-emerald-100 p-8">
              <img 
                src="/api/placeholder/600/600"
                alt="Ayurvedic Treatment"
                className="rounded-full object-cover"
              />
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
      </div>
    </div>
  );
};

export default HeroSection;