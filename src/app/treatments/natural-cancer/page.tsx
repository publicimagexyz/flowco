import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Heart,
  Leaf,
  Users,
  CheckCircle,
  ArrowLeft,
  Target,
  Activity
} from "lucide-react";

export default function NaturalCancerTreatment() {
  const approaches = [
    {
      title: "Immune System Support",
      description: "Strengthening your body's natural defense mechanisms to fight cancer cells more effectively.",
      icon: Shield
    },
    {
      title: "Nutritional Optimization",
      description: "Targeted nutrition plans to support healing and provide essential nutrients for recovery.",
      icon: Leaf
    },
    {
      title: "Detoxification Protocols",
      description: "Safely removing toxins that may contribute to cancer development and progression.",
      icon: Activity
    },
    {
      title: "Integrative Therapies",
      description: "Combining natural treatments with conventional care for comprehensive support.",
      icon: Heart
    }
  ];

  const treatments = [
    "High-dose Vitamin C IV therapy",
    "Mistletoe injections",
    "Hyperbaric oxygen therapy",
    "PEMF (Pulsed Electromagnetic Field) therapy",
    "Methylene blue therapy",
    "EBOO (Extracorporeal Blood Oxygenation)",
    "Nutritional supplementation protocols",
    "Detoxification support",
    "Lifestyle and dietary modifications"
  ];

  const benefits = [
    "Enhanced immune system function",
    "Reduced treatment side effects",
    "Improved quality of life",
    "Support for conventional treatments",
    "Increased energy and vitality",
    "Better treatment tolerance",
    "Comprehensive whole-body approach",
    "Personalized care protocols"
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
            <span className="text-sage-800">Natural Cancer Treatment</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-4 bg-sage-600 rounded-full w-fit mx-auto mb-6">
              <Shield className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Natural Cancer Treatment
            </h1>
            <p className="text-xl text-sage-700 mb-4 font-medium">
              Integrative Approaches to Cancer Care
            </p>
            <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
              Our natural cancer treatment protocols focus on supporting your body&apos;s immune system,
              addressing root causes, and providing comprehensive care that works alongside
              conventional treatments for optimal outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              Our Integrative Approach
            </h2>
            <div className="bg-sage-50 rounded-lg p-8 md:p-12 mb-12">
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                At The Flow Co., we understand that cancer treatment requires a comprehensive,
                whole-person approach. Our natural cancer treatment protocols are designed to
                work synergistically with conventional therapies, focusing on strengthening
                the immune system, supporting detoxification, and optimizing overall health.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                Teresa Foster, FNP brings extensive experience from Nature Works Best, a
                natural cancer treatment center in Tempe, AZ, where she developed expertise
                in integrative oncology approaches. Our treatments address not just the cancer
                itself, but the underlying factors that may have contributed to its development.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed">
                We believe in empowering patients with knowledge, supporting their body&apos;s
                natural healing mechanisms, and providing hope through evidence-based
                natural therapies that complement conventional cancer care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {approaches.map((approach, index) => {
                const IconComponent = approach.icon;
                return (
                  <Card key={index} className="border-sage-200 bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-sage-100 rounded-lg">
                          <IconComponent className="h-6 w-6 text-sage-600" />
                        </div>
                        <CardTitle className="text-sage-800">{approach.title}</CardTitle>
                      </div>
                      <CardDescription className="text-sage-600 leading-relaxed">
                        {approach.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Modalities */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              Treatment Modalities
            </h2>
              <p className="text-lg text-sage-600 leading-relaxed text-center mb-12">
                Our natural cancer treatment program incorporates multiple therapeutic
                modalities, each selected for its ability to support the body&apos;s healing
                processes and enhance overall treatment outcomes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {treatments.map((treatment, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <span className="text-sage-700 text-lg">{treatment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Target className="h-16 w-16 text-sage-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                Expected Benefits
              </h2>
              <p className="text-lg text-sage-600 leading-relaxed">
                Our natural cancer treatment approach aims to provide comprehensive
                support that enhances your overall treatment experience and outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-sage-50 p-6 rounded-lg">
                  <Heart className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <span className="text-sage-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Care */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 text-sage-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
              Personalized Treatment Plans
            </h2>
            <div className="bg-white rounded-lg p-8 md:p-12">
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                Every cancer journey is unique, which is why we create individualized
                treatment protocols based on your specific diagnosis, stage, treatment
                history, and overall health status. Our comprehensive assessment includes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-sage-800">Initial Assessment</h3>
                  <ul className="space-y-2 text-sage-600">
                    <li>• Detailed medical history review</li>
                    <li>• Current treatment evaluation</li>
                    <li>• Nutritional status assessment</li>
                    <li>• Toxin exposure evaluation</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-sage-800">Ongoing Support</h3>
                  <ul className="space-y-2 text-sage-600">
                    <li>• Regular progress monitoring</li>
                    <li>• Treatment plan adjustments</li>
                    <li>• Coordination with oncologists</li>
                    <li>• Family education and support</li>
                  </ul>
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
              Begin Your Integrative Cancer Care Journey
            </h2>
            <p className="text-xl text-sage-100 mb-8 leading-relaxed">
              Take the first step towards comprehensive cancer support with our
              integrative natural treatment approach. Schedule a consultation to
              discuss how we can support your healing journey.
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
                <Link href="/team">Meet Teresa Foster, FNP</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}