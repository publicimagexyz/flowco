import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Activity,
  Heart,
  ArrowLeft,
  Target,
  Wind
} from "lucide-react";

export default function PEMFTherapy() {
  const benefits = [
    "Enhanced cellular energy production",
    "Improved circulation and oxygenation",
    "Reduced inflammation and pain",
    "Accelerated tissue healing",
    "Better sleep quality",
    "Increased bone density",
    "Enhanced immune function",
    "Improved mental clarity"
  ];

  const conditions = [
    "Chronic pain conditions",
    "Arthritis and joint disorders",
    "Fibromyalgia",
    "Sports injuries and recovery",
    "Bone healing and osteoporosis",
    "Depression and anxiety",
    "Sleep disorders",
    "Chronic fatigue syndrome",
    "Wound healing",
    "Circulation problems",
    "Neurological conditions",
    "Post-surgical recovery"
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
            <span className="text-sage-800">PEMF Therapy</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-4 bg-sage-600 rounded-full w-fit mx-auto mb-6">
              <Zap className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              PEMF Therapy
            </h1>
            <p className="text-xl text-sage-700 mb-4 font-medium">
              Pulsed Electromagnetic Field Therapy for Cellular Healing
            </p>
            <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
              PEMF therapy uses pulsed electromagnetic fields to stimulate cellular repair,
              reduce inflammation, and enhance your body&apos;s natural healing processes at
              the cellular level for improved health and vitality.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 text-center">
              How PEMF Therapy Works
            </h2>
            <div className="bg-sage-50 rounded-lg p-8 md:p-12 mb-12">
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                PEMF therapy delivers pulsed electromagnetic fields to your body&apos;s cells,
                tissues, and organs. These gentle electromagnetic pulses help restore
                the electrical activity in cells, which is essential for cellular
                metabolism, repair, and optimal function.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed mb-6">
                Every cell in your body operates like a tiny battery, and when cells
                become damaged or depleted, they lose their electrical charge. PEMF
                therapy helps recharge these cellular batteries, enhancing ATP production,
                improving circulation, and supporting the body&apos;s natural healing processes.
              </p>
              <p className="text-lg text-sage-600 leading-relaxed">
                The therapy is completely painless and non-invasive, with most patients
                experiencing deep relaxation during treatment sessions.
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
              Conditions We Treat with PEMF
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed text-center mb-12">
              PEMF therapy has been extensively researched and shown to be beneficial
              for a wide range of health conditions by supporting cellular healing
              and reducing inflammation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Activity className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
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
                PEMF Therapy Benefits
              </h2>
              <p className="text-lg text-sage-600 leading-relaxed">
                Experience the comprehensive healing benefits of pulsed electromagnetic
                field therapy for improved health and wellness.
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

      {/* Treatment Experience */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Wind className="h-16 w-16 text-sage-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
              What to Expect
            </h2>
            <div className="bg-white rounded-lg p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-sage-800">Treatment Session</h3>
                  <ul className="space-y-2 text-sage-600">
                    <li>• Session duration: 30-60 minutes</li>
                    <li>• Completely painless and relaxing</li>
                    <li>• Remain fully clothed during treatment</li>
                    <li>• Can read, rest, or meditate</li>
                    <li>• No side effects or recovery time</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-sage-800">Treatment Protocol</h3>
                  <ul className="space-y-2 text-sage-600">
                    <li>• Initial series of 10-20 sessions</li>
                    <li>• 2-3 sessions per week initially</li>
                    <li>• Maintenance sessions as needed</li>
                    <li>• Personalized treatment intensity</li>
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
              Experience Cellular Healing with PEMF
            </h2>
            <p className="text-xl text-sage-100 mb-8 leading-relaxed">
              Discover how PEMF therapy can enhance your body&apos;s natural healing
              processes and improve your overall health and vitality. Schedule
              a consultation to learn more.
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