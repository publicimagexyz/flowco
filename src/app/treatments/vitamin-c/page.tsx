import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Droplets,
  Shield,
  Heart,
  ArrowLeft,
  Target
} from "lucide-react";

export default function VitaminCTherapy() {
  const benefits = [
    "Enhanced immune system function",
    "Powerful antioxidant protection",
    "Collagen synthesis support",
    "Improved iron absorption",
    "Reduced inflammation",
    "Cancer treatment support",
    "Enhanced wound healing",
    "Increased energy levels"
  ];

  const conditions = [
    "Cancer support therapy",
    "Chronic infections",
    "Immune system deficiency",
    "Chronic fatigue syndrome",
    "Wound healing support",
    "Cardiovascular disease",
    "Stress and burnout",
    "Post-surgical recovery",
    "Heavy metal toxicity",
    "Viral infections",
    "Age-related health decline",
    "Athletic performance enhancement"
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
            <span className="text-sage-800">Vitamin C Therapy</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-4 bg-sage-600 rounded-full w-fit mx-auto mb-6">
              <Droplets className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              High-Dose Vitamin C Therapy
            </h1>
            <p className="text-xl text-sage-700 mb-4 font-medium">
              Intravenous Vitamin C for Immune Support and Healing
            </p>
            <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
              High-dose intravenous vitamin C therapy delivers therapeutic levels of this
              essential nutrient directly into your bloodstream, providing powerful immune
              support, antioxidant protection, and healing benefits.
            </p>
          </div>
        </div>
      </section>

      {/* About Treatment */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              Why High-Dose IV Vitamin C?
            </h2>
            <div className="bg-sage-50 rounded-lg p-8 md:p-12 mb-12">
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                While vitamin C is well-known for its immune-boosting properties, high-dose
                intravenous administration can achieve blood levels that are impossible to
                reach through oral supplementation alone. These therapeutic levels provide
                powerful healing benefits that go far beyond basic nutritional support.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                IV vitamin C bypasses the digestive system&apos;s absorption limitations, allowing
                for direct delivery of therapeutic doses to tissues throughout the body.
                This makes it particularly effective for supporting immune function during
                illness and recovery.
              </p>
            <div className="mt-8 mb-6 text-center">
              <Image
                src="/images/iv-therapy.jpg"
                alt="IV Vitamin C Therapy"
                width={400}
                height={300}
                className="rounded-lg shadow-lg mx-auto object-cover"
              />
            </div>
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
              High-dose vitamin C therapy can provide significant benefits for a wide
              range of health conditions by supporting immune function and cellular healing.
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
              <Target className="h-16 w-16 text-sage-600 mx-auto mb-6" />
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-sage-700 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Boost Your Health with Vitamin C Therapy
            </h2>
            <p className="text-xl text-sage-100 mb-8 leading-relaxed">
              Experience the powerful healing benefits of high-dose vitamin C therapy.
              Schedule a consultation to learn how this treatment can support your
              health and recovery goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-sage-700 hover:bg-sage-50 px-8 py-3 text-lg"
              >
                <Link href="/book-online">Schedule Treatment</Link>
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