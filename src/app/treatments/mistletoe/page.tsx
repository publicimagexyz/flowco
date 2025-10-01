import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Shield,
  Heart,
  ArrowLeft,
  Target,
  Sparkles
} from "lucide-react";

export default function MistletoeTherapy() {
  const benefits = [
    "Enhanced immune system function",
    "Improved quality of life",
    "Reduced treatment side effects",
    "Anti-tumor properties",
    "Increased energy levels",
    "Better sleep quality",
    "Pain reduction",
    "Emotional well-being support"
  ];

  const conditions = [
    "Cancer support therapy",
    "Post-cancer treatment recovery",
    "Immune system support",
    "Chronic fatigue",
    "Autoimmune conditions",
    "Quality of life improvement",
    "Adjunctive cancer care",
    "Prevention protocols",
    "Treatment side effect management",
    "Stress and anxiety",
    "Sleep disturbances",
    "Overall wellness support"
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
            <span className="text-sage-800">Mistletoe Therapy</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-4 bg-sage-600 rounded-full w-fit mx-auto mb-6">
              <Leaf className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Mistletoe Therapy
            </h1>
            <p className="text-xl text-sage-700 mb-4 font-medium">
              Natural Immune Support and Integrative Cancer Care
            </p>
            <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
              Mistletoe therapy (Viscum album) is one of the most widely used complementary
              cancer treatments in Europe. This evidence-based natural therapy supports immune
              function, improves quality of life, and provides comprehensive support during
              cancer treatment and recovery.
            </p>
          </div>
        </div>
      </section>

      {/* About Treatment */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              The Power of Mistletoe
            </h2>
            <div className="bg-sage-50 rounded-lg p-8 md:p-12 mb-12">
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                European mistletoe has been used in integrative cancer care for over a century,
                with extensive research supporting its use. Mistletoe extracts contain active
                compounds including lectins and viscotoxins that stimulate the immune system
                and have demonstrated anti-tumor properties in numerous studies.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                Clinical research shows that mistletoe therapy can improve quality of life,
                reduce side effects of conventional cancer treatments, enhance immune function,
                and potentially improve survival outcomes. Many patients report increased
                energy, better sleep, reduced pain, and improved emotional well-being.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed">
                At The Flow Co., we use pharmaceutical-grade mistletoe extracts from leading
                European manufacturers, administered through carefully individualized protocols
                based on cancer type, stage, and patient-specific factors.
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
              Mistletoe therapy is used as a complementary treatment to support overall
              health and quality of life, particularly for those dealing with cancer.
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
              <Sparkles className="h-16 w-16 text-sage-600 mx-auto mb-6" />
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
                  Treatment Protocol
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  Mistletoe is typically administered through subcutaneous injections 2-3 times
                  per week. Treatment is highly individualized based on your specific diagnosis,
                  conventional treatment plan, and response to therapy.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Leaf className="h-10 w-10 text-sage-600 mb-4" />
                <h3 className="text-xl font-bold text-sage-800 mb-4">
                  Expected Results
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  Many patients notice improved energy, better sleep, and enhanced well-being
                  within the first few weeks. Long-term benefits include sustained immune
                  support and improved quality of life throughout treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-8 text-center">
              Research-Backed Therapy
            </h2>
            <div className="bg-sage-50 p-8 md:p-12 rounded-lg">
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                Mistletoe therapy is supported by over 100 clinical trials and thousands of
                published studies. Research has demonstrated improvements in quality of life,
                immune function, and survival outcomes in various cancer types.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed">
                The therapy is so well-established in Europe that it&apos;s often covered by
                insurance and integrated into conventional cancer care protocols. At The Flow
                Co., we bring this evidence-based natural therapy to our patients as part of
                comprehensive integrative cancer care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-sage-700 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enhance Your Healing with Mistletoe Therapy
            </h2>
            <p className="text-xl text-sage-100 mb-8 leading-relaxed">
              Discover how mistletoe therapy can support your health journey. Schedule a
              consultation to learn if this evidence-based natural therapy is right for you.
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

