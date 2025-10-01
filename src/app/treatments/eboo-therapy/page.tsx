import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Award,
  Droplets,
  Heart,
  Shield,
  ArrowLeft,
  Target,
  Activity,
  Zap,
  Leaf
} from "lucide-react";

export default function EBOOTherapy() {
  const benefits = [
    "Enhanced oxygen delivery to tissues",
    "Improved circulation and blood flow",
    "Reduced systemic inflammation",
    "Enhanced immune system function",
    "Cellular detoxification and repair",
    "Increased energy and vitality",
    "Better cardiovascular health",
    "Accelerated healing processes"
  ];

  const conditions = [
    "Chronic fatigue syndrome",
    "Cardiovascular disease",
    "Diabetes and metabolic disorders",
    "Chronic infections",
    "Autoimmune conditions",
    "Cancer support therapy",
    "Neurological conditions",
    "Age-related health decline",
    "Chronic inflammation",
    "Poor circulation",
    "Immune system dysfunction",
    "Long Covid symptoms"
  ];

  const process = [
    {
      title: "Blood Extraction",
      description: "A small amount of blood is safely withdrawn from the patient through a sterile IV line.",
      icon: Droplets
    },
    {
      title: "Oxygenation & Ozonation",
      description: "The blood is exposed to medical-grade oxygen and ozone in a specialized treatment chamber.",
      icon: Zap
    },
    {
      title: "Filtration & Purification",
      description: "The blood undergoes filtration to remove toxins, inflammatory compounds, and cellular debris.",
      icon: Shield
    },
    {
      title: "Reinfusion",
      description: "The treated, oxygenated blood is safely returned to the patient's circulation system.",
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
            <span className="text-sage-800">EBOO Therapy</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-4 bg-sage-600 rounded-full w-fit mx-auto mb-6">
              <Award className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              EBOO Therapy
            </h1>
            <p className="text-xl text-sage-700 mb-4 font-medium">
              Extracorporeal Blood Oxygenation and Ozonation
            </p>
            <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
              EBOO therapy is an advanced blood treatment that combines oxygenation,
              ozonation, and filtration to enhance circulation, reduce inflammation,
              and support your body&apos;s natural healing processes.
            </p>
          </div>
        </div>
      </section>

      {/* What is EBOO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              What is EBOO Therapy?
            </h2>
            <div className="bg-sage-50 rounded-lg p-8 md:p-12 mb-12">
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                EBOO (Extracorporeal Blood Oxygenation and Ozonation) is a cutting-edge
                therapy that treats your blood outside the body to enhance its healing
                properties. This advanced treatment combines the benefits of ozone therapy,
                oxygen therapy, and blood filtration in one comprehensive procedure.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                During treatment, blood is carefully withdrawn, treated with medical-grade
                ozone and oxygen, filtered to remove toxins and inflammatory compounds,
                and then returned to your circulation. This process can treat your entire
                blood volume, providing systemic benefits throughout the body.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed">
                EBOO therapy represents one of the most advanced forms of oxidative medicine,
                offering powerful therapeutic benefits for a wide range of chronic conditions
                and health optimization goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              The EBOO Process
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed text-center mb-12">
              EBOO therapy follows a precise, medically-supervised process to ensure
              safety and maximize therapeutic benefits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => {
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

      {/* Conditions Treated */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              Conditions We Treat with EBOO
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed text-center mb-12">
              EBOO therapy has shown remarkable results in treating various chronic
              conditions by addressing underlying inflammation and cellular dysfunction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-start gap-3 bg-sage-50 p-4 rounded-lg">
                  <Target className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
                  <span className="text-sage-700">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Activity className="h-16 w-16 text-sage-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                Therapeutic Benefits
              </h2>
              <p className="text-lg text-sage-600 leading-relaxed">
                EBOO therapy provides comprehensive health benefits by treating
                your blood at the cellular level and optimizing its healing capacity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                  <Leaf className="h-8 w-8 text-sage-600 mx-auto mb-4" />
                  <span className="text-sage-700 font-medium text-center">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Experience */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
              What to Expect
            </h2>
            <div className="bg-sage-50 rounded-lg p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-sage-800">Treatment Session</h3>
                  <ul className="space-y-2 text-sage-600">
                    <li>• Treatment duration: 60-90 minutes</li>
                    <li>• Comfortable, relaxing environment</li>
                    <li>• Continuous medical supervision</li>
                    <li>• Minimal discomfort or side effects</li>
                    <li>• Can read, rest, or listen to music</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-sage-800">Treatment Protocol</h3>
                  <ul className="space-y-2 text-sage-600">
                    <li>• Typically 6-12 sessions recommended</li>
                    <li>• Sessions spaced 1-2 weeks apart</li>
                    <li>• Maintenance treatments as needed</li>
                    <li>• Personalized treatment plans</li>
                    <li>• Progress monitoring throughout</li>
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
              Experience Advanced Blood Therapy
            </h2>
            <p className="text-xl text-sage-100 mb-8 leading-relaxed">
              Discover the transformative power of EBOO therapy for your health
              and vitality. Schedule a consultation to learn if this advanced
              treatment is right for your condition.
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