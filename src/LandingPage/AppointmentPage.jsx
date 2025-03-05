import React, { useState } from "react";
import { MapPin, Clock, Phone, Calendar, User } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
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
import { Toaster, toast } from "sonner";
import axios from "axios";

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    treatment: "",
    date: "",
    time: "",
    notes: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  // Handle treatment selection
  const handleTreatmentChange = () => {
    setFormData((prev) => ({
      ...prev,
      treatment: value,
    }));
  };

  // Handle time selection
  const handleTimeChange = () => {
    setFormData((prev) => ({
      ...prev,
      time: value,
    }));
  };

  // Send Telegram notification
  const sendTelegramNotification = async () => {
    const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    // Construct message
    const message = `
📅 New Appointment Booking 📅

Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phoneNumber}
Treatment: ${formData.treatment}
Date: ${formData.date}
Time: ${formData.time || "Not Selected"}

Additional Notes:
${formData.notes || "No additional notes"}
    `;

    try {
      await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }
      );
      return true;
    } catch (error) {
      console.error("Failed to send Telegram notification", error);
      return false;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send Telegram notification
      const telegramSent = await sendTelegramNotification();

      if (telegramSent) {
        // Success toast notification
        toast.success("Appointment Booked Successfully!", {
          description: `Your appointment for ${formData.treatment} has been scheduled on ${formData.date} at ${formData.time}:00 AM.`,
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          treatment: "",
          date: "",
          time: "",
          notes: "",
        });
      } else {
        // Error toast if Telegram notification fails
        toast.error("Booking Failed", {
          description: "Unable to book appointment. Please try again.",
        });
      }
    } catch (error) {
      console.error("Submission error", error);
      toast.error("Error", {
        description: "An unexpected error occurred. Please try again.",
      });
    }
  };

  return (
    <section id="appointment">
      <div className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-serif text-stone-800 mb-4">
              Schedule Your Appointment
            </h1>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Take the first step towards holistic wellness. Book your
              consultation with our experienced Ayurvedic practitioners.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Booking Form */}

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-stone-800">
                  Book Your Visit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="Enter first name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="border-stone-200"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Enter last name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="border-stone-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <Input
                        id="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                        className="border-stone-200"
                        required
                      />
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="treatment"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Treatment Type
                      </label>
                      <select
                        id="treatment"
                        value={formData.treatment}
                        onChange={handleInputChange}
                        className="mt-0 block w-full rounded-md border border-stone-300 bg-white px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        required
                      >
                        <option value="">Select treatment</option>
                        <option value="consultation">
                          Initial Consultation
                        </option>
                        <option value="panchakarma">Panchakarma</option>
                        <option value="massage">Ayurvedic Massage</option>
                        <option value="followup">Follow-up Consultation</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className="border-stone-200"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="time"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Preferred Time
                        </label>
                        <select
                          id="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className="mt-0 block w-full rounded-md border border-stone-300 bg-white px-3 py-1.5 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        >
                          <option value="">Select time</option>
                          <option value="9">9:00 AM</option>
                          <option value="10">10:00 AM</option>
                          <option value="11">11:00 AM</option>
                          <option value="14">2:00 PM</option>
                          <option value="15">3:00 PM</option>
                          <option value="16">4:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Any specific concerns or requirements..."
                        className="border-stone-200 h-24"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                  >
                    Book Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Contact Info */}
            <div className="space-y-6">
              {/* Map */}
              <div className="rounded-lg overflow-hidden h-[300px] bg-white shadow-lg">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.494757215129!2d73.76888166959277!3d18.57498417015168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e70a2bfab1%3A0xa80bc92fd30a3d8!2zQW5pdGEgQXl1cnZlZGEgJiBQYW5jaGthcm1hLCDgpIbgpK_gpYHgpLDgpY3gpLXgpYfgpKYg4KSG4KSj4KS_IOCkquCkguCkmuCkleCksOCljeCkriDgpJrgpL_gpJXgpL_gpKTgpY3gpLjgpL4!5e0!3m2!1sen!2sin!4v1740051805370!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Contact Information */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl text-stone-800 mb-6">
                    Clinic Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-emerald-600" />
                      <div>
                        <p className="font-medium text-stone-800">Location</p>
                        <p className="text-stone-600">
                          Shop no 1, ground floor, Moze College, Plot no 2627,
                          Balewadi, Pune, Maharashtra 411045
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-emerald-600" />
                      <div>
                        <p className="font-medium text-stone-800">
                          Working Hours
                        </p>
                        <p className="text-stone-600">
                          Monday - Saturday: 9:00 AM - 7:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-emerald-600" />
                      <div>
                        <p className="font-medium text-stone-800">Contact</p>
                        <p className="text-stone-600">+91 8459582371</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Toaster
        position="top-right" // Choose your preferred position
        richColors
        expand={true} // Optional: makes toasts more prominent
        pauseWhenHovered={true} // Optional: pause timer when hovering
      />
    </section>
  );
};

export default AppointmentPage;
