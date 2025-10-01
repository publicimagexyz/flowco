import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Heart,
  Shield,
  Leaf,
  Activity,
  CheckCircle,
  ArrowLeft,
  Target,
  Users,
  Droplets,
  Zap
} from "lucide-react";

export default function AutoimmunityTreatment() {
  const conditions = [
    "Rheumatoid Arthritis",
    "Hashimoto's Thyroiditis",
    "Lupus",
    "Multiple Sclerosis",
    "Inflammatory Bowel Disease",
    "Psoriasis and Eczema",
    "Type 1 Diabetes",
    "Celiac Disease",
    "Sjögren's Syndrome",
    "Fibromyalgia"
  ];

  const approaches = [
    {
      title: "Root Cause Identification",
      description: "Comprehensive testing to identify underlying triggers such as infections, toxins, and nutrient deficiencies.",
      icon: Target
    },
    {
      title: "Gut Health Restoration",
      description: "Healing leaky gut syndrome and restoring healthy microbiome balance to reduce systemic inflammation.",
      icon: Heart
    },
    {
      title: "Immune System Modulation",
      description: "Natural approaches to rebalance immune function without suppressing the body's defense mechanisms.",
      icon: Shield
    },
    {
      title: "Anti-Inflammatory Protocols",
      description: "Targeted nutrition and supplementation to reduce chronic inflammation throughout the body.",
      icon: Activity
    }
  ];

  const treatments = [
    "IV nutrient therapy for immune support",
    "Gut microbiome restoration protocols",
    "Food sensitivity testing and elimination diets",
    "Comprehensive toxin screening and detoxification",
    "Anti-inflammatory supplementation",
    "PEMF therapy for pain and inflammation",
    "Hyperbaric oxygen therapy",
    "Stress management and adrenal support",
    "Personalized nutrition planning",
    "Lifestyle modification guidance"
  ];

  const benefits = [
    "Reduced inflammation and pain",
    "Improved energy and vitality",
    "Better digestive health",
    "Enhanced immune balance",
    "Decreased medication dependence",
    "Improved quality of life",
    "Reduced autoimmune flare-ups",
    "Better stress management"
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
            <span className="text-sage-800">Autoimmunity Support</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-4 bg-sage-600 rounded-full w-fit mx-auto mb-6">
              <Heart className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Autoimmunity Support
            </h1>
            <p className="text-xl text-sage-700 mb-4 font-medium">
              Comprehensive Protocols for Autoimmune Conditions
            </p>
            <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
              Our functional medicine approach to autoimmune conditions focuses on identifying
              and addressing root causes while supporting your body&apos;s natural healing processes
              and restoring immune system balance.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              Understanding Autoimmune Conditions
            </h2>
            <div className="bg-sage-50 rounded-lg p-8 md:p-12 mb-12">
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                Autoimmune conditions occur when the immune system mistakenly attacks healthy
                tissues in the body. Rather than simply suppressing immune function, our approach
                focuses on identifying and addressing the underlying triggers that cause this
                immune system confusion.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                Common triggers include chronic infections, environmental toxins, food sensitivities,
                nutrient deficiencies, chronic stress, and gut dysbiosis. By addressing these
                root causes, we can help restore proper immune function and reduce inflammation
                throughout the body.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed">
                Our comprehensive approach combines advanced functional medicine testing with
                targeted natural therapies to support your body&apos;s healing processes and improve
                your quality of life.
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

      {/* Conditions Treated */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              Autoimmune Conditions We Support
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed text-center mb-12">
              We provide comprehensive support for a wide range of autoimmune and
              inflammatory conditions, focusing on root cause resolution and
              natural healing approaches.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Shield className="h-5 w-5 text-sage-600 flex-shrink-0" />
                  <span className="text-sage-700 font-medium">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Modalities */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              Our Treatment Approach
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed text-center mb-12">
              Our autoimmunity support program incorporates multiple therapeutic
              modalities designed to address root causes and support natural healing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {treatments.map((treatment, index) => (
                <div key={index} className="flex items-start gap-3 bg-sage-50 p-4 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <span className="text-sage-700 text-lg">{treatment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The 5R Protocol */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              Our 5R Protocol for Autoimmunity
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed text-center mb-12">
              We follow a systematic approach to address autoimmune conditions
              that has proven effective in restoring health and reducing symptoms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { title: "Remove", description: "Eliminate triggers like infections, toxins, and inflammatory foods", icon: Target },
                { title: "Replace", description: "Restore digestive enzymes, nutrients, and healthy gut function", icon: Droplets },
                { title: "Reinoculate", description: "Rebuild beneficial bacteria and restore microbiome balance", icon: Leaf },
                { title: "Repair", description: "Heal intestinal lining and reduce systemic inflammation", icon: Heart },
                { title: "Rebalance", description: "Support lifestyle factors like stress, sleep, and movement", icon: Zap }
              ].map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-sage-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <div className="p-3 bg-sage-100 rounded-full w-fit mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-sage-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-sage-800 mb-2">{step.title}</h3>
                    <p className="text-sage-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Users className="h-16 w-16 text-sage-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                Expected Outcomes
              </h2>
              <p className="text-lg text-sage-600 leading-relaxed">
                Our comprehensive autoimmunity support program aims to provide
                significant improvements in symptoms and overall quality of life.
              </p>
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
              Take Control of Your Autoimmune Condition
            </h2>
            <p className="text-xl text-sage-100 mb-8 leading-relaxed">
              Don&apos;t let autoimmune symptoms control your life. Schedule a consultation
              to learn how our comprehensive functional medicine approach can help
              you achieve lasting wellness and symptom relief.
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