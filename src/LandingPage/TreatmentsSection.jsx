import React from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Calendar,
  Clock,
  GraduationCap,
  Star,
  Book,
  Leaf,
  Heart,
  Clock4,
  ScrollText,
  Droplets,
} from "lucide-react";
import Vamana from "../assets/Vamana.jpg";
import Virechana from "../assets/Virechana.jpeg";
import Nasya from "../assets/Nasya.png";
import Raktamokshan from "../assets/Raktamokshan.jpg";
import Abhyanga from "../assets/Abhyanga.jpg";
import Shirodhara from "../assets/Shirodhara.png";
import Udvartana from "../assets/Udvartana.jpg";
import Basti from "../assets/Basti.jpg";

const TreatmentsSection = () => {
  const treatments = {
    panchakarma: [
      {
        name: "Vamana",
        description:
          "A therapeutic cleansing treatment that removes excess Kapha from the body through controlled therapeutic vomiting. After proper preparation through purva karma for 5-7 days, emetic herbs are administered orally along with medicinal liquids.",
        duration: "90 mins",
        benefits: [
          "Respiratory health",
          "Bronchial asthma",
          "Sinusitis",
          "Cough",
          "Psoriasis",
          "Eczema",
        ],
        dosha: "Kapha",
        image: `${Vamana}`,
      },
      {
        name: "Virechana",
        description:
          "A purification therapy that eliminates excess Pitta from the body through therapeutic purgation. After 5-7 days of preparation, laxative herbs are administered orally to cleanse the digestive tract and remove toxins.",
        duration: "120 mins",
        benefits: [
          "Skin diseases",
          "Acne",
          "Hyperacidity",
          "High blood pressure",
          "Depression",
        ],
        dosha: "Pitta",
        image: `${Virechana}`,
      },
      {
        name: "Basti",
        description:
          "A specialized treatment focusing on Vata disorders through medicated enema therapy. Available as Sneha vasti (oil enema) and Niruha vasti (decoction enema) to nourish tissues and remove accumulated toxins from the colon.",
        duration: "60 mins",
        benefits: [
          "Arthritis",
          "Constipation",
          "Neurological ailments",
          "Paralysis",
          "Lower backache",
          "Sciatica",
        ],
        dosha: "Vata",
        image: `${Basti}`,
      },
      {
        name: "Nasya",
        description:
          "Administration of medicine through the nasal route. Includes facial massage with herbal oils and steam inhalation to open nasal channels before medicine administration. Cleanses and strengthens nasal passages.",
        duration: "45 mins",
        benefits: [
          "Headaches",
          "Sinusitis",
          "Allergies",
          "Migraine",
          "Facial paralysis",
          "Earache",
        ],
        dosha: "All doshas",
        image: `${Nasya}`,
      },
      {
        name: "Raktamokshan",
        description:
          "Blood purification therapy used for diseases resulting from aggravated toxins in the blood. Performed using specialized techniques with needles, leeches, or suction cups.",
        duration: "60 mins",
        benefits: [
          "Eczema",
          "Psoriasis",
          "Infections",
          "Gout",
          "Sciatica",
          "Local inflammation",
        ],
        dosha: "Pitta",
        image: `${Raktamokshan}`,
      },
    ],
    massage: [
      {
        name: "Abhyanga",
        description:
          "Traditional full-body massage with herbal oils, promoting relaxation and rejuvenation. Part of the pre-operative procedure (Purva karma) of Panchakarma that helps prepare the body for main treatments.",
        duration: "60 mins",
        benefits: [
          "Deep relaxation",
          "Better circulation",
          "Skin nourishment",
          "Toxin mobilization",
        ],
        dosha: "All doshas",
        image: `${Abhyanga}`,
      },
      {
        name: "Shirodhara",
        description:
          "Continuous flow of warm oil on forehead, excellent for stress relief and mental clarity. The gentle stream of oil creates a meditative state and balances the nervous system.",
        duration: "45 mins",
        benefits: [
          "Stress relief",
          "Better sleep",
          "Mental peace",
          "Anxiety reduction",
        ],
        dosha: "Vata and Pitta",
        image: `${Shirodhara}`,
      },
      {
        name: "Udvartana",
        description:
          "Powder massage that helps in weight management and improving skin texture. Uses herbal powders to exfoliate the skin and stimulate lymphatic drainage.",
        duration: "45 mins",
        benefits: [
          "Weight management",
          "Skin texture",
          "Circulation",
          "Cellulite reduction",
        ],
        dosha: "Kapha",
        image: `${Udvartana}`,
      },
    ],
  };

  const panchakarmaInfo = {
    title: "Panchakarma: The Ultimate Detox Therapy",
    description:
      "Panchakarma is the most definitive mind-body-spirit healing experience for purifying the body, strengthening the immune system, restoring balance and well-being. In Sanskrit, it means 'five actions' or 'five treatments' - a process that cleanses the body of toxic materials and builds immunity against infections.",
    stages: [
      {
        name: "Purva Karma (Pre-operative)",
        description:
          "Preparatory procedures that ready the body for the main treatments:",
        steps: [
          "Pachan Karma - Improves digestion with herbs to properly digest the ghee",
          "Snehan Karma - Medicated ghee given in increasing doses to liquefy fat-soluble toxins",
          "Swedan Karma - Full-body steam bath to open body channels and facilitate toxin movement",
        ],
      },
      {
        name: "Pradhan Karma (Main Procedure)",
        description:
          "Core panchakarma treatments to remove toxins that were liquefied during preparation:",
        steps: [
          "Vamana - Therapeutic vomiting for kapha disorders",
          "Virechana - Therapeutic purgation for pitta disorders",
          "Basti - Enema therapy for vata disorders",
          "Nasya - Nasal administration of medicines",
          "Raktamokshan - Blood purification therapy",
        ],
      },
      {
        name: "Paschat Karma (Post-operative)",
        description: "Aftercare procedures to maximize benefits:",
        steps: [
          "Sansarjan Karma - Food therapy after detoxification",
          "Rasayan Therapy - Rejuvenating treatments",
          "Shaman Chikitsa - Pacification therapy with herbs and lifestyle management",
        ],
      },
    ],
    benefits: [
      "Restores metabolic fire (Agni)",
      "Eliminates toxins (Ama) and strengthens tissues",
      "Balances all three doshas",
      "Improves diet and lifestyle habits",
      "Reduces stress and improves relaxation",
      "Slows the aging process",
      "Boosts immunity levels",
      "Improves strength, endurance, and vitality",
    ],
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
            Experience authentic healing therapies passed down through
            generations, now enhanced with modern wellness practices.
          </p>
        </div>

        {/* Panchakarma Introduction Card */}
        <Card className="mb-16 border-stone-200 bg-gradient-to-r from-emerald-50 to-stone-50">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-serif text-stone-800 mb-4">
                  {panchakarmaInfo.title}
                </h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {panchakarmaInfo.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {panchakarmaInfo.benefits
                    .slice(0, 4)
                    .map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Leaf className="text-emerald-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-stone-700">
                          {benefit}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden border border-stone-200 bg-white p-6 h-full">
                  <h4 className="text-xl font-serif text-stone-800 mb-4">
                    Three Stages of Panchakarma
                  </h4>

                  <div className="space-y-4">
                    {panchakarmaInfo.stages.map((stage, index) => (
                      <div
                        key={index}
                        className="border-l-2 border-emerald-500 pl-4"
                      >
                        <h5 className="font-medium text-stone-800">
                          {stage.name}
                        </h5>
                        <p className="text-sm text-stone-600 mt-1">
                          {stage.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

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
                  <Card
                    key={treatment.name}
                    className="hover:shadow-xl transition-all duration-300 border-stone-200"
                  >
                    <CardContent className="p-6">
                      <div className="relative mb-6">
                        <img
                          src={treatment.image}
                          alt={treatment.name}
                          className="rounded-lg w-full object-cover mb-4"
                        />
                        <Badge className="absolute top-4 right-4 bg-white/90 text-emerald-700 backdrop-blur-sm">
                          {treatment.duration}
                        </Badge>
                        <Badge className="absolute top-4 left-4 bg-emerald-600/90 text-white backdrop-blur-sm">
                          {treatment.dosha}
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-serif text-stone-800 mb-2">
                            {treatment.name}
                          </h3>
                          <p className="text-stone-600 text-sm leading-relaxed">
                            {treatment.description}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm font-medium text-stone-800">
                            Key Benefits:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {treatment.benefits.map((benefit) => (
                              <Badge
                                key={benefit}
                                variant="outline"
                                className="bg-stone-50 border-stone-200 text-stone-600"
                              >
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

        {/* Benefits Section */}
        <div className="mt-16 bg-stone-50 rounded-xl p-8 border border-stone-200">
          <h3 className="text-2xl font-serif text-stone-800 mb-6 text-center">
            Benefits of Panchakarma
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {panchakarmaInfo.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-white rounded-lg border border-stone-100"
              >
                <div className="bg-emerald-100 rounded-full p-2 text-emerald-600">
                  {index % 4 === 0 && <Leaf className="h-5 w-5" />}
                  {index % 4 === 1 && <Heart className="h-5 w-5" />}
                  {index % 4 === 2 && <Droplets className="h-5 w-5" />}
                  {index % 4 === 3 && <Star className="h-5 w-5" />}
                </div>
                <span className="text-sm text-stone-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-600 mb-6">
            Not sure which treatment is right for you?
          </p>
          <Button
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 mr-4"
          >
            Schedule a Consultation
          </Button>
          <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
            Learn More About Panchakarma
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsSection;
