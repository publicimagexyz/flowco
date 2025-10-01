import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Radio,
  Shield,
  Heart,
  ArrowLeft,
  Target,
  Waves
} from "lucide-react";

export default function RifeTherapy() {
  const benefits = [
    "Non-invasive treatment",
    "No known side effects",
    "Targeted pathogen elimination",
    "Enhanced cellular function",
    "Pain reduction",
    "Improved energy levels",
    "Reduced inflammation",
    "Immune system support"
  ];

  const conditions = [
    "Chronic infections",
    "Lyme disease",
    "Viral infections",
    "Bacterial infections",
    "Fungal infections",
    "Parasitic infections",
    "Chronic pain",
    "Inflammation",
    "Autoimmune conditions",
    "Cancer support",
    "Chronic fatigue",
    "Fibromyalgia"
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
            <span className="text-sage-800">Rife Frequency Therapy</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-4 bg-sage-600 rounded-full w-fit mx-auto mb-6">
              <Radio className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Rife Frequency Therapy
            </h1>
            <p className="text-xl text-sage-700 mb-4 font-medium">
              Advanced Frequency-Based Healing Technology
            </p>
            <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
              Rife frequency therapy uses specific electromagnetic frequencies to target
              pathogens and support the body&apos;s natural healing processes. This non-invasive
              technology offers a unique approach to chronic infections and various health
              conditions.
            </p>
          </div>
        </div>
      </section>

      {/* About Treatment */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              The Science Behind Rife Therapy
            </h2>
            <div className="bg-sage-50 rounded-lg p-8 md:p-12 mb-12">
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                Rife frequency therapy is based on the principle that every organism,
                including pathogens, has a specific resonant frequency. By applying precise
                electromagnetic frequencies, the therapy can selectively target unwanted
                microorganisms while leaving healthy cells unharmed.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                Developed in the 1930s by Royal Raymond Rife, this technology has evolved with
                modern research and engineering. The therapy delivers specific frequencies
                through electromagnetic waves or plasma light, which can penetrate deep into
                tissues to reach areas where chronic infections may persist.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed">
                At The Flow Co., we use state-of-the-art Rife frequency equipment programmed
                with carefully researched frequency sets for various conditions. Treatment is
                customized based on your specific health concerns and response to therapy.
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
              Rife frequency therapy can provide benefits for various chronic conditions,
              particularly those involving persistent infections or inflammation.
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
              <Waves className="h-16 w-16 text-sage-600 mx-auto mb-6" />
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
                  Treatment Sessions
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  Sessions typically last 30-60 minutes and involve sitting comfortably while
                  the Rife machine delivers specific frequencies. Most patients feel relaxed
                  during treatment, and some may experience mild detox symptoms as the body
                  eliminates targeted pathogens.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Radio className="h-10 w-10 text-sage-600 mb-4" />
                <h3 className="text-xl font-bold text-sage-800 mb-4">
                  Treatment Course
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  Most conditions require a series of treatments, typically 2-3 sessions per
                  week initially. Response varies by individual and condition, with some
                  patients noticing improvements within weeks while others require longer
                  treatment courses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-8 text-center">
              How Rife Therapy Works
            </h2>
            <div className="bg-sage-50 p-8 md:p-12 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-sage-800 mb-3">1. Frequency Selection</h3>
                  <p className="text-sage-600 leading-relaxed">
                    We select specific frequencies based on your condition, using established
                    frequency databases and clinical experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-sage-800 mb-3">2. Targeted Delivery</h3>
                  <p className="text-sage-600 leading-relaxed">
                    Frequencies are delivered through electromagnetic waves or plasma tubes,
                    penetrating tissues to reach targeted pathogens.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-sage-800 mb-3">3. Resonant Effect</h3>
                  <p className="text-sage-600 leading-relaxed">
                    When the frequency matches a pathogen&apos;s resonant frequency, it disrupts
                    the organism&apos;s structure, allowing your immune system to eliminate it.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-sage-800 mb-3">4. Natural Healing</h3>
                  <p className="text-sage-600 leading-relaxed">
                    As pathogens are eliminated, your body&apos;s natural healing processes can
                    restore balance and health to affected tissues.
                  </p>
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
              Experience Rife Frequency Therapy
            </h2>
            <p className="text-xl text-sage-100 mb-8 leading-relaxed">
              Discover how this innovative frequency-based therapy can support your healing.
              Schedule a consultation to learn if Rife therapy is right for you.
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

