import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Wind,
  Heart,
  Activity,
  ArrowLeft,
  Target,
  Zap,
  Shield,
  Clock
} from "lucide-react";

export default function HyperbaricOxygen() {
  const conditions = [
    "Wound healing and tissue repair",
    "Post-surgical recovery",
    "Chronic fatigue syndrome",
    "Fibromyalgia",
    "Long Covid symptoms",
    "Brain injury recovery",
    "Stroke rehabilitation",
    "Diabetic complications",
    "Radiation injury",
    "Carbon monoxide poisoning",
    "Decompression sickness",
    "Chronic infections"
  ];

  const benefits = [
    "Enhanced oxygen delivery to tissues",
    "Accelerated wound healing",
    "Reduced inflammation",
    "Improved circulation",
    "Enhanced immune function",
    "Neurological recovery support",
    "Increased energy and vitality",
    "Better cognitive function"
  ];

  const mechanisms = [
    {
      title: "Increased Oxygen Delivery",
      description: "High-pressure oxygen dissolves directly into blood plasma, delivering 15-20 times more oxygen to tissues.",
      icon: Wind
    },
    {
      title: "Enhanced Healing",
      description: "Stimulates collagen production, angiogenesis, and cellular repair mechanisms for faster recovery.",
      icon: Heart
    },
    {
      title: "Antimicrobial Effects",
      description: "Creates an oxygen-rich environment that is hostile to anaerobic bacteria and infections.",
      icon: Shield
    },
    {
      title: "Stem Cell Mobilization",
      description: "Increases circulating stem cells by up to 800%, promoting natural healing and regeneration.",
      icon: Activity
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-sage-50 py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sage-600">
            <Link href="/treatments" className="hover:text-sage-800 flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Treatments
            </Link>
            <span>/</span>
            <span className="text-sage-800">Hyperbaric Oxygen Therapy</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-4 bg-sage-600 rounded-full w-fit mx-auto mb-6">
              <Users className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Hyperbaric Oxygen Therapy
            </h1>
            <p className="text-xl text-sage-700 mb-4 font-medium">
              Advanced Oxygen Therapy for Healing and Recovery
            </p>
            <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
              Hyperbaric oxygen therapy (HBOT) delivers 100% pure oxygen at increased atmospheric
              pressure, dramatically enhancing your body&apos;s natural healing processes and supporting
              recovery from various health conditions.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              How Hyperbaric Oxygen Works
            </h2>
            <div className="bg-sage-50 rounded-lg p-8 md:p-12 mb-12">
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                During HBOT treatment, you breathe 100% pure oxygen while inside a pressurized chamber.
                This increased pressure allows your lungs to gather up to three times more oxygen than
                would be possible breathing pure oxygen at normal air pressure.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                The extra oxygen is dissolved directly into your blood plasma, cerebrospinal fluid,
                and other bodily fluids, delivering healing oxygen to areas with compromised circulation
                and supporting the body&apos;s natural healing processes.
              </p>
              <div className="mt-8 text-center">
                <Image
                  src="/images/hyperbaric-chamber.jpg"
                  alt="Hyperbaric Oxygen Chamber"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg mx-auto object-cover"
                />
                <p className="mt-4 text-sm text-sage-500 italic">Modern hyperbaric oxygen therapy chamber</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mechanisms.map((mechanism, index) => {
                const IconComponent = mechanism.icon;
                return (
                  <Card key={index} className="border-sage-200 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-sage-100 rounded-lg">
                          <IconComponent className="h-6 w-6 text-sage-600" />
                        </div>
                        <CardTitle className="text-sage-800">{mechanism.title}</CardTitle>
                      </div>
                      <CardDescription className="text-sage-600 leading-relaxed">
                        {mechanism.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              Conditions We Treat
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed text-center mb-12">
              Hyperbaric oxygen therapy has shown remarkable results in treating a wide
              range of conditions by enhancing the body&apos;s natural healing capabilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Wind className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
                  <span className="text-sage-700">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Experience */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Clock className="h-16 w-16 text-sage-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                What to Expect
              </h2>
            </div>

            <div className="bg-sage-50 rounded-lg p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-sage-800 mb-4">Treatment Session</h3>
                  <ul className="space-y-2 text-sage-600">
                    <li>• Sessions typically last 60-90 minutes</li>
                    <li>• Comfortable, climate-controlled chamber</li>
                    <li>• You can rest, read, or listen to music</li>
                    <li>• Gentle pressure changes during treatment</li>
                    <li>• Professional monitoring throughout</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sage-800 mb-4">Treatment Protocol</h3>
                  <ul className="space-y-2 text-sage-600">
                    <li>• Typically 20-40 sessions recommended</li>
                    <li>• Usually 5 days per week initially</li>
                    <li>• Maintenance sessions as needed</li>
                    <li>• Personalized treatment plans</li>
                    <li>• Regular progress assessments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Target className="h-16 w-16 text-sage-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                Treatment Benefits
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                  <Zap className="h-8 w-8 text-sage-600 mx-auto mb-4" />
                  <span className="text-sage-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-sage-700 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Power of Hyperbaric Oxygen
            </h2>
            <p className="text-xl text-sage-100 mb-8 leading-relaxed">
              Discover how hyperbaric oxygen therapy can accelerate your healing
              and support your recovery. Schedule a consultation to learn if
              HBOT is right for your condition.
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