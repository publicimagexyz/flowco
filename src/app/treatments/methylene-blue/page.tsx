import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Shield,
  Heart,
  ArrowLeft,
  Target,
  Zap
} from "lucide-react";

export default function MethyleneBlueTherapy() {
  const benefits = [
    "Enhanced cellular energy production",
    "Improved cognitive function",
    "Powerful antioxidant effects",
    "Neuroprotective properties",
    "Antimicrobial activity",
    "Mitochondrial support",
    "Enhanced oxygen delivery",
    "Anti-aging benefits"
  ];

  const conditions = [
    "Cognitive decline",
    "Neurodegenerative diseases",
    "Chronic fatigue",
    "Brain fog",
    "Memory issues",
    "Mitochondrial dysfunction",
    "Depression and anxiety",
    "Long COVID symptoms",
    "Age-related cognitive decline",
    "Oxidative stress",
    "Chronic infections",
    "Low energy levels"
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
            <span className="text-sage-800">Methylene Blue Therapy</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-4 bg-sage-600 rounded-full w-fit mx-auto mb-6">
              <Brain className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Methylene Blue Therapy
            </h1>
            <p className="text-xl text-sage-700 mb-4 font-medium">
              Advanced Cellular Energy and Brain Health Support
            </p>
            <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
              Methylene blue is a powerful therapeutic compound that supports cellular energy
              production, enhances brain function, and provides neuroprotective benefits. This
              well-researched treatment offers unique benefits for cognitive health and
              mitochondrial function.
            </p>
          </div>
        </div>
      </section>

      {/* About Treatment */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              The Science of Methylene Blue
            </h2>
            <div className="bg-sage-50 rounded-lg p-8 md:p-12 mb-12">
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                Methylene blue is one of the oldest synthetic medications, yet modern research
                has revealed remarkable therapeutic properties. It works at the cellular level
                by supporting mitochondrial function—the powerhouses of your cells—particularly
                in brain tissue where energy demands are highest.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                This unique compound enhances cellular respiration, increases ATP production,
                and acts as a powerful antioxidant. Studies have shown its benefits for
                cognitive function, memory, mood, and overall cellular health. At therapeutic
                doses, methylene blue can cross the blood-brain barrier to provide direct
                neuroprotective effects.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed">
                At The Flow Co., we use pharmaceutical-grade methylene blue administered
                through carefully controlled protocols to maximize benefits while ensuring
                safety and effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              Conditions We Support
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed text-center mb-12">
              Methylene blue therapy can provide significant benefits for various conditions
              affecting brain health, cellular energy, and overall wellness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Shield className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
                  <span className="text-sage-700">{condition}</span>
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
              <Zap className="h-16 w-16 text-sage-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                Therapeutic Benefits
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center bg-sage-50 p-6 rounded-lg">
                  <Heart className="h-8 w-8 text-sage-600 mx-auto mb-4" />
                  <span className="text-sage-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-12 text-center">
              What to Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Target className="h-10 w-10 text-sage-600 mb-4" />
                <h3 className="text-xl font-bold text-sage-800 mb-4">
                  Administration
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  Methylene blue can be administered orally or intravenously, depending on your
                  specific needs and treatment goals. IV administration provides faster onset
                  and higher bioavailability for acute needs.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Brain className="h-10 w-10 text-sage-600 mb-4" />
                <h3 className="text-xl font-bold text-sage-800 mb-4">
                  Effects
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  Many patients report improved mental clarity, enhanced focus, and increased
                  energy within hours to days. Long-term benefits accumulate with continued
                  treatment as cellular function improves.
                </p>
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
              Enhance Your Brain Health with Methylene Blue
            </h2>
            <p className="text-xl text-sage-100 mb-8 leading-relaxed">
              Discover the cognitive and cellular benefits of methylene blue therapy. Schedule
              a consultation to learn if this treatment is right for you.
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

