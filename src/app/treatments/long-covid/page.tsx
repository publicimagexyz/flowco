import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Stethoscope,
  Heart,
  Zap,
  Shield,
  CheckCircle,
  ArrowLeft,
  Target,
  Activity,
  Users,
  Leaf
} from "lucide-react";

export default function LongCovidTreatment() {
  const symptoms = [
    "Persistent fatigue and exhaustion",
    "Brain fog and cognitive issues",
    "Shortness of breath",
    "Joint and muscle pain",
    "Sleep disturbances",
    "Heart palpitations",
    "Loss of taste or smell",
    "Headaches and dizziness",
    "Digestive issues",
    "Anxiety and depression",
    "Post-exertional malaise",
    "Temperature dysregulation"
  ];

  const treatments = [
    "IV nutrient therapy for immune support",
    "Hyperbaric oxygen therapy",
    "EBOO blood oxygenation therapy",
    "Mitochondrial support protocols",
    "Anti-inflammatory interventions",
    "Detoxification support",
    "Nutritional optimization",
    "PEMF therapy for cellular repair",
    "Stress management and nervous system support",
    "Personalized supplement protocols"
  ];

  const approaches = [
    {
      title: "Immune System Reset",
      description: "Supporting immune function while reducing autoimmune inflammation that may persist after infection.",
      icon: Shield
    },
    {
      title: "Mitochondrial Support",
      description: "Restoring cellular energy production and addressing mitochondrial dysfunction common in Long Covid.",
      icon: Zap
    },
    {
      title: "Neuroinflammation Reduction",
      description: "Targeting brain inflammation that contributes to cognitive symptoms and neurological issues.",
      icon: Target
    },
    {
      title: "Vascular Health Restoration",
      description: "Supporting circulation and addressing endothelial dysfunction affecting multiple organ systems.",
      icon: Heart
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
            <span className="text-sage-800">Long Covid & Vaccine Injury</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-4 bg-sage-600 rounded-full w-fit mx-auto mb-6">
              <Stethoscope className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Long Covid & Vaccine Injury Treatment
            </h1>
            <p className="text-xl text-sage-700 mb-4 font-medium">
              Specialized Protocols for Post-Covid Recovery
            </p>
            <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
              Our comprehensive treatment approach addresses the complex symptoms of Long Covid
              and vaccine-related injuries through targeted therapies designed to restore
              health and support your body&apos;s natural recovery processes.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Long Covid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              Understanding Long Covid
            </h2>
            <div className="bg-sage-50 rounded-lg p-8 md:p-12 mb-12">
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                Long Covid, also known as Post-Acute Sequelae of SARS-CoV-2 Infection (PASC),
                affects millions of people worldwide with persistent symptoms lasting months
                or even years after the initial infection. These symptoms can significantly
                impact quality of life and daily functioning.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                Similarly, some individuals experience adverse reactions following COVID-19
                vaccinations, with symptoms that may overlap with Long Covid. Both conditions
                often involve immune system dysregulation, inflammation, and cellular dysfunction.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed">
                Our integrative approach addresses the root causes of these persistent symptoms
                through targeted therapies that support immune function, reduce inflammation,
                and restore cellular health.
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

      {/* Common Symptoms */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              Common Symptoms We Treat
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed text-center mb-12">
              Long Covid and vaccine injuries can present with a wide range of symptoms
              affecting multiple body systems. Our comprehensive approach addresses
              both individual symptoms and underlying causes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
                  <span className="text-sage-700">{symptom}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              Our Treatment Protocol
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed text-center mb-12">
              Our specialized treatment protocols are designed to address the complex,
              multi-system nature of Long Covid and vaccine-related symptoms through
              targeted, evidence-based interventions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {treatments.map((treatment, index) => (
                <div key={index} className="flex items-start gap-3 bg-sage-50 p-4 rounded-lg">
                  <Activity className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <span className="text-sage-700 text-lg">{treatment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Process */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Users className="h-16 w-16 text-sage-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                The Recovery Journey
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Assessment", description: "Comprehensive evaluation of symptoms and underlying dysfunction", icon: Target },
                { title: "Detox", description: "Support elimination of viral particles and inflammatory compounds", icon: Leaf },
                { title: "Restore", description: "Rebuild cellular function and support organ system recovery", icon: Heart },
                { title: "Optimize", description: "Long-term health optimization and prevention strategies", icon: Zap }
              ].map((phase, index) => {
                const IconComponent = phase.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-sage-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <div className="p-3 bg-sage-100 rounded-full w-fit mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-sage-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-sage-800 mb-2">{phase.title}</h3>
                    <p className="text-sage-600 text-sm leading-relaxed">{phase.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Care */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
              Personalized Recovery Plans
            </h2>
            <div className="bg-sage-50 rounded-lg p-8 md:p-12">
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                Every Long Covid and vaccine injury case is unique, with varying symptom
                patterns and underlying causes. We create individualized treatment protocols
                based on your specific symptoms, medical history, and recovery goals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-sage-800">Initial Evaluation</h3>
                  <ul className="space-y-2 text-sage-600">
                    <li>• Comprehensive symptom assessment</li>
                    <li>• Advanced laboratory testing</li>
                    <li>• Inflammation and immune markers</li>
                    <li>• Cardiovascular and neurological evaluation</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-sage-800">Ongoing Support</h3>
                  <ul className="space-y-2 text-sage-600">
                    <li>• Regular progress monitoring</li>
                    <li>• Treatment plan adjustments</li>
                    <li>• Symptom tracking and management</li>
                    <li>• Long-term recovery planning</li>
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
              Begin Your Recovery Journey Today
            </h2>
            <p className="text-xl text-sage-100 mb-8 leading-relaxed">
              Don&apos;t let Long Covid or vaccine-related symptoms control your life.
              Our specialized treatment protocols can help you reclaim your health
              and vitality. Schedule a consultation to start your recovery.
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