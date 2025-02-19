import React from 'react';
import { Star, Clock, Phone, Mail, MapPin, ChevronRight, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const Footer = () => {
    return (
      <footer className="bg-stone-900 text-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-serif">A</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-white font-serif">Ayurveda Wellness</h3>
                  <p className="text-emerald-400 text-sm">Holistic Healing Center</p>
                </div>
              </div>
              <p className="text-sm">
                Combining ancient wisdom with modern wellness practices for holistic healing.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Treatments</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-emerald-400" />
                  <span>123 Healing Street, Wellness City</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-emerald-400" />
                  <span>+1 234 567 8900</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-emerald-400" />
                  <span>care@ayurvedawellness.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-emerald-400" />
                  <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
              <div className="mt-6">
                <Button className="bg-emerald-600 hover:bg-emerald-700 w-full">
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()}Anita Ayurveda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;