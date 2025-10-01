import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Heart,
  Shield,
  Leaf,
  Users,
  Award,
  Stethoscope,
  Zap,
  Droplets,
  Activity,
  TreePine,
  Beaker,
  Target
} from "lucide-react";

export default function Treatments() {
  const treatments = [
    {
      title: "Natural Cancer Treatment",
      description: "Integrative approaches to cancer care that support the body's immune system while addressing root causes. Combining conventional wisdom with natural therapies for comprehensive care.",
      href: "/treatments/natural-cancer",
      icon: Shield,
      category: "Oncology Support"
    },
    {
      title: "Autoimmunity Support",
      description: "Comprehensive protocols for autoimmune conditions using functional medicine principles to reduce inflammation and restore immune system balance.",
      href: "/treatments/autoimmunity",
      icon: Heart,
      category: "Immune Support"
    },
    {
      title: "Hormone Testing & Balancing",
      description: "Advanced diagnostic testing and natural hormone optimization protocols to restore vitality, energy, and overall hormonal health.",
      href: "/treatments/hormone-testing",
      icon: Leaf,
      category: "Hormone Health"
    },
    {
      title: "Hyperbaric Oxygen Therapy",
      description: "High-pressure oxygen therapy that enhances healing, reduces inflammation, and supports cellular regeneration for various health conditions.",
      href: "/treatments/hyperbaric-oxygen",
      icon: Users,
      category: "Oxygen Therapy"
    },
    {
      title: "EBOO Therapy",
      description: "Extracorporeal Blood Oxygenation and Ozonation - advanced blood purification and oxygenation therapy for detoxification and healing.",
      href: "/treatments/eboo-therapy",
      icon: Award,
      category: "Blood Therapy"
    },
    {
      title: "Long Covid & Vaccine Injury",
      description: "Specialized treatment protocols designed to address persistent symptoms and support recovery from Long Covid and vaccine-related injuries.",
      href: "/treatments/long-covid",
      icon: Stethoscope,
      category: "Recovery Support"
    },
    {
      title: "Vitamin C Therapy",
      description: "High-dose intravenous vitamin C therapy to boost immune function, support cancer treatment, and enhance overall cellular health.",
      href: "/treatments/vitamin-c",
      icon: Droplets,
      category: "IV Therapy"
    },
    {
      title: "PEMF Therapy",
      description: "Pulsed Electromagnetic Field therapy that supports cellular repair, reduces inflammation, and promotes natural healing processes.",
      href: "/treatments/pemf",
      icon: Zap,
      category: "Energy Medicine"
    },
    {
      title: "Methylene Blue Therapy",
      description: "Advanced therapy using methylene blue for its antimicrobial, antioxidant, and mitochondrial support properties.",
      href: "/treatments/methylene-blue",
      icon: Beaker,
      category: "Advanced Therapy"
    },
    {
      title: "Mistletoe Injections",
      description: "European mistletoe therapy used as an adjunctive cancer treatment to support immune function and overall well-being.",
      href: "/treatments/mistletoe",
      icon: TreePine,
      category: "Plant Medicine"
    },
    {
      title: "Rife Therapy",
      description: "Frequency-based therapy using specific electromagnetic frequencies to support the body's natural healing processes.",
      href: "/treatments/rife",
      icon: Activity,
      category: "Frequency Medicine"
    }
  ];

  const categories = [
    {
      name: "IV & Injection Therapies",
      description: "Direct delivery of nutrients and therapeutic compounds for maximum bioavailability and effectiveness."
    },
    {
      name: "Oxygen & Blood Therapies",
      description: "Advanced oxygenation and blood purification treatments that enhance cellular function and healing."
    },
    {
      name: "Energy & Frequency Medicine",
      description: "Cutting-edge therapies that use electromagnetic fields and frequencies to support natural healing."
    },
    {
      name: "Integrative Cancer Support",
      description: "Comprehensive approaches that complement conventional cancer care with natural immune support."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Treatment Modalities
            </h1>
            <p className="text-xl text-sage-700 mb-4 font-medium">
              Advanced Integrative Therapies for Optimal Health
            </p>
            <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
              Our comprehensive range of treatment modalities combines cutting-edge medical
              technology with time-tested natural therapies to support your body&apos;s innate
              healing capacity and restore optimal health.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
              Our Treatment Categories
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed">
              We organize our treatments into specialized categories, each designed to address
              specific aspects of health and healing through different therapeutic approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="border-sage-200 bg-sage-50">
                <CardHeader>
                  <CardTitle className="text-sage-800">{category.name}</CardTitle>
                  <CardDescription className="text-sage-600 leading-relaxed">
                    {category.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Treatments */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
              All Treatment Modalities
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed">
              Explore our complete range of integrative therapies. Each treatment is
              carefully selected and personalized to support your unique health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => {
              const IconComponent = treatment.icon;
              return (
                <Card key={index} className="border-sage-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 bg-sage-100 rounded-lg">
                        <IconComponent className="h-6 w-6 text-sage-600" />
                      </div>
                      <span className="text-xs text-sage-500 bg-sage-100 px-2 py-1 rounded-full">
                        {treatment.category}
                      </span>
                    </div>
                    <CardTitle className="text-sage-800 text-lg">{treatment.title}</CardTitle>
                    <CardDescription className="text-sage-600 leading-relaxed text-sm">
                      {treatment.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full border-sage-600 text-sage-700 hover:bg-sage-50"
                    >
                      <Link href={treatment.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Personalized Care Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="h-16 w-16 text-sage-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
              Personalized Treatment Plans
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed mb-8">
              Every individual is unique, and so is their healing journey. We don&apos;t believe
              in one-size-fits-all approaches. Instead, we carefully assess your specific
              needs, health history, and goals to create a customized treatment plan that
              may incorporate multiple modalities for optimal results.
            </p>
            <div className="bg-sage-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-sage-800 mb-4">Our Approach Includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-sage-800">Comprehensive Assessment</h4>
                    <p className="text-sage-600 text-sm">Thorough evaluation of your health history, symptoms, and goals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Beaker className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-sage-800">Advanced Testing</h4>
                    <p className="text-sage-600 text-sm">Functional medicine testing to identify root causes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-sage-800">Customized Protocols</h4>
                    <p className="text-sage-600 text-sm">Tailored treatment plans combining multiple modalities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Activity className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-sage-800">Ongoing Monitoring</h4>
                    <p className="text-sage-600 text-sm">Regular follow-ups and plan adjustments as needed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-sage-700 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Personalized Treatment Plan
            </h2>
            <p className="text-xl text-sage-100 mb-8 leading-relaxed">
              Ready to explore how our integrative treatment modalities can support your
              health journey? Schedule a consultation to discuss which therapies may be
              right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-sage-700 hover:bg-sage-50 px-8 py-3 text-lg"
              >
                <Link href="/book-online">Schedule Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sage-700 px-8 py-3 text-lg"
              >
                <Link href="/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}