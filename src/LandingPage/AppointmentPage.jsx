import React from 'react';
import { MapPin, Clock, Phone, Calendar, User } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const AppointmentPage = () => {
  return (
    <div className="bg-stone-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-serif text-stone-800 mb-4">
            Schedule Your Appointment
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Take the first step towards holistic wellness. Book your consultation with our 
            experienced Ayurvedic practitioners.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Booking Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif text-stone-800">Book Your Visit</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter first name"
                        className="border-stone-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter last name"
                        className="border-stone-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      className="border-stone-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter phone number"
                      className="border-stone-200"
                    />
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="treatment">Treatment Type</Label>
                    <Select>
                      <SelectTrigger className="border-stone-200">
                        <SelectValue placeholder="Select treatment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation">Initial Consultation</SelectItem>
                        <SelectItem value="panchakarma">Panchakarma</SelectItem>
                        <SelectItem value="massage">Ayurvedic Massage</SelectItem>
                        <SelectItem value="followup">Follow-up Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input 
                        id="date" 
                        type="date"
                        className="border-stone-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select>
                        <SelectTrigger className="border-stone-200">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9">9:00 AM</SelectItem>
                          <SelectItem value="10">10:00 AM</SelectItem>
                          <SelectItem value="11">11:00 AM</SelectItem>
                          <SelectItem value="14">2:00 PM</SelectItem>
                          <SelectItem value="15">3:00 PM</SelectItem>
                          <SelectItem value="16">4:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Any specific concerns or requirements..."
                      className="border-stone-200 h-24"
                    />
                  </div>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Book Appointment
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map and Contact Info */}
          <div className="space-y-6">
            {/* Map */}
            <div className="rounded-lg overflow-hidden h-[300px] bg-white shadow-lg">
              <img 
                src="/api/placeholder/800/300"
                alt="Location Map"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contact Information */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-stone-800 mb-6">Clinic Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-medium text-stone-800">Location</p>
                      <p className="text-stone-600">123 Healing Street, Wellness City, ST 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-medium text-stone-800">Working Hours</p>
                      <p className="text-stone-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-medium text-stone-800">Contact</p>
                      <p className="text-stone-600">+1 234 567 8900</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-emerald-50 border-emerald-100">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-emerald-800 mb-2">Need Urgent Care?</h3>
                <p className="text-emerald-600 mb-4">Our practitioners are available for emergency consultations.</p>
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-100">
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;