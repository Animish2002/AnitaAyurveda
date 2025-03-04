import React, { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
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
  ChevronDown,
  CheckCircle,
  User,
  ArrowRight,
  Info,
} from "lucide-react";


const TreatmentsSection = () => {
  const [selectedDosha, setSelectedDosha] = useState("all");
  const [expandedCard, setExpandedCard] = useState(null);

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
        image: `https://res.cloudinary.com/dkv3bx51z/image/upload/v1740933327/Vamana_uud82u.jpg`,
        process: [
          "Initial consultation to determine suitability",
          "5-7 days of preparatory treatments",
          "Administration of herbal emetics with medicinal liquids",
          "Controlled therapeutic vomiting process",
          "Rest and rejuvenation period",
        ],
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
        image: `https://res.cloudinary.com/dkv3bx51z/image/upload/v1740933327/Virechana_licsss.jpg`,
        process: [
          "Preliminary assessment of Pitta imbalance",
          "Preparatory treatments with medicated oils",
          "Herbal laxative administration",
          "Controlled therapeutic purgation",
          "Post-treatment dietary regimen",
        ],
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
        image: `https://res.cloudinary.com/dkv3bx51z/image/upload/v1740935861/basti_zlc9cz.jpg`,
        process: [
          "Assessment of Vata imbalance patterns",
          "Selection of appropriate Basti type (Sneha or Niruha)",
          "Preparation of herbal decoction or medicated oils",
          "Gentle administration through rectal route",
          "Post-treatment care and dietary guidelines",
        ],
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
        image: `https://res.cloudinary.com/dkv3bx51z/image/upload/v1740933327/Nasya_obsvap.webp`,
        process: [
          "Facial massage with herbal oils",
          "Steam application to open nasal passages",
          "Administration of herbal drops through nasal pathway",
          "Gentle massage to enhance absorption",
          "Relaxation and integration period",
        ],
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
        image: `https://res.cloudinary.com/dkv3bx51z/image/upload/v1740933326/Raktamokshan_tllbu9.jpg`,
        process: [
          "Thorough assessment of blood toxicity",
          "Selection of appropriate method (needles, leeches, or suction)",
          "Preparation of the treatment area",
          "Precise and controlled blood removal",
          "Application of healing herbs and aftercare",
        ],
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
        image: `https://res.cloudinary.com/dkv3bx51z/image/upload/v1740933329/Abhyanga_ja6hok.jpg`,
        process: [
          "Selection of dosha-specific oils",
          "Warming of herbal oils to therapeutic temperature",
          "Rhythmic full-body massage techniques",
          "Special attention to marma (vital) points",
          "Gentle scalp and foot massage to complete",
        ],
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
        image: `https://res.cloudinary.com/dkv3bx51z/image/upload/v1740933342/Shirodhara_wizli9.png`,
        process: [
          "Brief head and shoulder massage to prepare",
          "Selection of appropriate herbal oil",
          "Continuous warm oil flow on the 'third eye' area",
          "Maintenance of rhythmic, meditative flow",
          "Gentle scalp massage to conclude treatment",
        ],
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
        image: `https://res.cloudinary.com/dkv3bx51z/image/upload/v1740933326/Udvartana_sjrvbz.jpg`,
        process: [
          "Application of warming herbal paste",
          "Vigorous massage with herbal powders",
          "Special focus on areas with fat accumulation",
          "Stimulation of lymphatic drainage pathways",
          "Warm shower to remove herbal residue",
        ],
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

  const doshaFilters = [
    { name: "All", value: "all" },
    { name: "Vata", value: "Vata" },
    { name: "Pitta", value: "Pitta" },
    { name: "Kapha", value: "Kapha" },
  ];

  const filterTreatmentsByDosha = (items) => {
    if (selectedDosha === "all") return items;
    return items.filter(
      (treatment) =>
        treatment.dosha === selectedDosha ||
        treatment.dosha.includes(selectedDosha) ||
        treatment.dosha === "All doshas"
    );
  };

  const toggleCardExpansion = (treatmentName) => {
    if (expandedCard === treatmentName) {
      setExpandedCard(null);
    } else {
      setExpandedCard(treatmentName);
    }
  };

  return (
    <section id="treatments" className="bg-gradient-to-b from-stone-50 to-white py-24 relative overflow-hidden">
      {/* Decorative elements */}

      <div className="absolute bottom-0 right-0 w-1/3 h-96 bg-emerald-50 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-40 left-10 w-20 h-20 bg-amber-100 rounded-full blur-xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Badge className="bg-emerald-100 text-emerald-700 mb-4 px-4 py-1 rounded-full">
            Our Specialties
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
            Traditional Ayurvedic Treatments
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Experience authentic healing therapies passed down through
            generations, now enhanced with modern wellness practices.
          </p>
        </div>

        {/* Hero Section with parallax effect */}
        <div className="mb-24 relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/60 z-10"></div>
          <div className="relative h-96 overflow-hidden">
            <img
              src="/api/placeholder/1200/600"
              alt="Ayurvedic Treatment"
              className="w-full h-full object-cover transform scale-110 hover:scale-105 transition-transform duration-3000"
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center md:p-8 py-4">
            <div className="max-w-3xl text-center">
              <h3 className="text-2xl md:text-4xl font-serif text-white mb-4 drop-shadow-md">
                {panchakarmaInfo.title}
              </h3>
              <p className="text-white/90 md:text-lg text-sm mb-8 leading-relaxed drop-shadow">
                {panchakarmaInfo.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white text-emerald-800 hover:bg-emerald-50">
                  Discover Panchakarma
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white bg-white/10 backdrop-blur-sm"
                >
                  Book a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Three stages card with visual timeline */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <Badge className="bg-amber-100 text-amber-700 mb-3 px-3 py-1 rounded-full">
              The Process
            </Badge>
            <h3 className="text-3xl font-serif text-stone-800 mb-4">
              Three Stages of Panchakarma
            </h3>
            <p className="text-stone-600 max-w-2xl mx-auto">
              A comprehensive approach to detoxification and rejuvenation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Timeline connector */}
            <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-1 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 z-0"></div>

            {panchakarmaInfo.stages.map((stage, index) => (
              <div key={index} className="relative z-10">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-stone-100 h-full">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-emerald-700 font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <h4 className="text-xl font-serif text-stone-800 mb-3 text-center">
                    {stage.name}
                  </h4>
                  <p className="text-sm text-stone-600 mb-4">
                    {stage.description}
                  </p>
                  <ul className="space-y-2">
                    {stage.steps.map((step, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-stone-700"
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Treatment tabs with dosha filter */}
        <div className="mb-24">
          <Tabs defaultValue="panchakarma" className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <TabsList className="bg-stone-100 p-1 space-x-2 rounded-full mb-4 md:mb-0">
                <TabsTrigger
                  value="panchakarma"
                  className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white px-8 py-3 rounded-full"
                >
                  Panchakarma
                </TabsTrigger>
                <TabsTrigger
                  value="massage"
                  className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white px-8 py-3 rounded-full"
                >
                  Massage Therapy
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-stone-600">Filter by Dosha:</span>
                <div className="flex space-x-1">
                  {doshaFilters.map((filter) => (
                    <button
                      key={filter.value}
                      onClick={() => setSelectedDosha(filter.value)}
                      className={`px-3 py-1 text-sm rounded-full transition-all ${
                        selectedDosha === filter.value
                          ? "bg-emerald-100 text-emerald-800 font-medium"
                          : "bg-stone-50 text-stone-600 hover:bg-stone-100"
                      }`}
                    >
                      {filter.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {Object.entries(treatments).map(([category, items]) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-3 gap-8">
                  {filterTreatmentsByDosha(items).map((treatment) => (
                    <Card
                      key={treatment.name}
                      className={`hover:shadow-xl transition-all duration-300 border-stone-200 ${
                        expandedCard === treatment.name ? "md:col-span-3" : ""
                      }`}
                    >
                      <div
                        className={`${
                          expandedCard === treatment.name
                            ? "md:grid md:grid-cols-2 md:gap-6"
                            : ""
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="relative mb-6 overflow-hidden rounded-lg">
                            <img
                              src={treatment.image}
                              alt={treatment.name}
                              className="w-full h-64 object-cover transition-transform hover:scale-105 duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <Badge className="absolute top-4 right-4 bg-white/90 text-emerald-700 backdrop-blur-sm">
                              {treatment.duration}
                            </Badge>
                            <Badge className="absolute top-4 left-4 bg-emerald-600/90 text-white backdrop-blur-sm">
                              {treatment.dosha}
                            </Badge>
                            <h3 className="absolute bottom-4 left-4 text-2xl font-serif text-white drop-shadow-md">
                              {treatment.name}
                            </h3>
                          </div>

                          <div className="space-y-4">
                            <p className="text-stone-600 text-sm leading-relaxed">
                              {treatment.description}
                            </p>

                            <div className="space-y-2">
                              <p className="text-sm font-medium text-stone-800 flex items-center gap-1">
                                <Leaf className="h-4 w-4 text-emerald-500" />
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

                          <Button
                            variant="ghost"
                            onClick={() => toggleCardExpansion(treatment.name)}
                            className="w-full mt-4 text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50"
                          >
                            {expandedCard === treatment.name
                              ? "Show Less"
                              : "Learn More"}
                            <ChevronDown
                              className={`ml-2 h-4 w-4 transition-transform ${
                                expandedCard === treatment.name
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </Button>
                        </CardContent>

                        {expandedCard === treatment.name && (
                          <CardContent className="p-6 bg-stone-50/50">
                            <h4 className="text-lg font-serif text-stone-800 mb-4 flex items-center gap-2">
                              <Info className="h-5 w-5 text-emerald-600" />
                              Treatment Process
                            </h4>
                            <ol className="space-y-3 mb-6">
                              {treatment.process.map((step, index) => (
                                <li key={index} className="flex gap-3">
                                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-sm text-emerald-700 font-medium">
                                    {index + 1}
                                  </div>
                                  <div className="text-stone-700">{step}</div>
                                </li>
                              ))}
                            </ol>

                            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
                              <h5 className="text-amber-800 font-medium mb-2 flex items-center gap-2">
                                <User className="h-4 w-4" />
                                Who is this treatment for?
                              </h5>
                              <p className="text-sm text-amber-700">
                                This treatment is especially beneficial for
                                those with {treatment.dosha} imbalances,
                                experiencing{" "}
                                {treatment.benefits.slice(0, 3).join(", ")}.
                                Always consult with our Ayurvedic specialists to
                                determine if this treatment is right for you.
                              </p>
                            </div>

                            <Button className="mt-6 bg-emerald-600 text-white hover:bg-emerald-700">
                              Book This Treatment
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </CardContent>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Benefits Section with animated counting */}
        <div className="mb-24 relative">
          <div className="absolute inset-0 bg-emerald-900/5 rounded-3xl"></div>
          <div className="relative px-8 py-16 bg-gradient-to-br from-emerald-50 to-transparent rounded-3xl border border-emerald-100">
            <h3 className="text-3xl font-serif text-stone-800 mb-8 text-center">
              Benefits of Panchakarma
            </h3>

            <div className="grid md:grid-cols-4 gap-6">
              {panchakarmaInfo.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all border border-stone-100 flex flex-col items-center text-center group hover:-translate-y-1 duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                    {index % 4 === 0 && (
                      <Leaf className="h-5 w-5 text-emerald-600" />
                    )}
                    {index % 4 === 1 && (
                      <Heart className="h-5 w-5 text-emerald-600" />
                    )}
                    {index % 4 === 2 && (
                      <Droplets className="h-5 w-5 text-emerald-600" />
                    )}
                    {index % 4 === 3 && (
                      <Star className="h-5 w-5 text-emerald-600" />
                    )}
                  </div>
                  <span className="text-stone-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Statistics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-700 mb-1">
                  5000+
                </div>
                <div className="text-sm text-stone-600">Years of tradition</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-700 mb-1">
                  98%
                </div>
                <div className="text-sm text-stone-600">
                  Client satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-700 mb-1">
                  30+
                </div>
                <div className="text-sm text-stone-600">
                  Specialized treatments
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-700 mb-1">
                  15+
                </div>
                <div className="text-sm text-stone-600">
                  Expert practitioners
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-700 to-emerald-900 rounded-2xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1000/600')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-serif mb-4">
              Begin Your Healing Journey
            </h3>
            <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
              Not sure which treatment is right for you? Our Ayurvedic experts
              can guide you to the perfect therapy for your unique constitution
              and needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-emerald-800 hover:bg-emerald-50">
                Schedule a Consultation
              </Button>
              <Button
                onClick={() =>
                  window.open("https://ayurveda.com/introduction-to-panchakarma/", "_blank")
                }
                variant="outline"
                className="border-white text-white bg-white/10 backdrop-blur-sm"
              >
                Learn More About Panchakarma
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
