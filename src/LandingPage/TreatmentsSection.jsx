import React from 'react';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Calendar, Clock, GraduationCap, Star, Book, Leaf, Heart, Clock4 } from 'lucide-react';

const TreatmentsSection = () => {
  const treatments = {
    panchakarma: [
      {
        name: "Vamana",
        description: "A therapeutic cleansing treatment that removes excess Kapha from the body, beneficial for respiratory and digestive issues.",
        duration: "90 mins",
        benefits: ["Respiratory health", "Digestive wellness", "Mental clarity"],
       
      },
      {
        name: "Virechana",
        description: "A purification therapy that eliminates excess Pitta from the body, helping with skin conditions and liver function.",
        duration: "120 mins",
        benefits: ["Liver detox", "Skin health", "Blood purification"],
        
      },
      {
        name: "Basti",
        description: "A specialized treatment focusing on Vata disorders, beneficial for joint pain and nervous system disorders.",
        duration: "60 mins",
        benefits: ["Joint health", "Nervous system", "Digestive balance"],
       
      }
    ],
    massage: [
      {
        name: "Abhyanga",
        description: "Traditional full-body massage with herbal oils, promoting relaxation and rejuvenation.",
        duration: "60 mins",
        benefits: ["Deep relaxation", "Better circulation", "Skin nourishment"],
       
      },
      {
        name: "Shirodhara",
        description: "Continuous flow of warm oil on forehead, excellent for stress relief and mental clarity.",
        duration: "45 mins",
        benefits: ["Stress relief", "Better sleep", "Mental peace"],
       
      },
      {
        name: "Udvartana",
        description: "Powder massage that helps in weight management and improving skin texture.",
        duration: "45 mins",
        benefits: ["Weight management", "Skin texture", "Circulation"],
       
      }
    ]
  };

  return (
    <div className="bg-gradient-to-b from-stone-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-emerald-100 text-emerald-700 mb-4 px-4 py-1">
            Our Specialties
          </Badge>
          <h2 className="text-4xl font-serif text-stone-800 mb-6">
            Traditional Ayurvedic Treatments
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Experience authentic healing therapies passed down through generations, 
            now enhanced with modern wellness practices.
          </p>
        </div>

        <Tabs defaultValue="panchakarma" className="mb-12">
          <TabsList className="w-full max-w-7xl mx-auto justify-center mb-12 bg-stone-100 p-1 space-x-2">
            <TabsTrigger 
              value="panchakarma" 
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white px-8 py-3"
            >
              Panchakarma
            </TabsTrigger>
            <TabsTrigger 
              value="massage" 
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white px-8 py-3"
            >
              Massage Therapy
            </TabsTrigger>
          </TabsList>
          
          {Object.entries(treatments).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-3 gap-8">
                {items.map((treatment) => (
                  <Card key={treatment.name} className="hover:shadow-xl transition-all duration-300 border-stone-200">
                    <CardContent className="p-6">
                      <div className="relative mb-6">
                        <img 
                          src="/api/placeholder/400/250"
                          alt={treatment.name}
                          className="rounded-lg w-full object-cover mb-4"
                        />
                        <Badge className="absolute top-4 right-4 bg-white/90 text-emerald-700 backdrop-blur-sm">
                          {treatment.duration}
                        </Badge>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-serif text-stone-800 mb-2">{treatment.name}</h3>
                          <p className="text-stone-600 text-sm leading-relaxed">
                            {treatment.description}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm font-medium text-stone-800">Key Benefits:</p>
                          <div className="flex flex-wrap gap-2">
                            {treatment.benefits.map((benefit) => (
                              <Badge key={benefit} variant="outline" className="bg-stone-50 border-stone-200 text-stone-600">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-stone-600 mb-6">
            Not sure which treatment is right for you?
          </p>
          <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsSection;