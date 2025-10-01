import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Phone,
  MapPin,
  CheckCircle,
  Award,
  Activity,
  Zap,
  MessageCircle,
  Home,
  ArrowRight,
  Star,
  Target,
  Mail,
  Calendar
} from "lucide-react";

export default function Membership() {
  const memberBenefits = [
    "Initial consultation and personalized treatment plan",
    "Access to all IV treatments at listed costs",
    "Open access to RIFE and PEMF therapy at no additional charge",
    "Direct text messaging with provider",
    "Home visits available (additional cost)",
    "Priority booking for appointments",
    "Extended consultation times",
    "Personalized treatment protocols",
    "Advanced diagnostic testing access",
    "Ongoing health monitoring and support"
  ];

  const treatments = [
    {
      title: "IV Therapy Access",
      description: "All IV treatments available at member pricing including high-dose vitamin C, NAD+, and custom nutrient blends.",
      icon: Activity
    },
    {
      title: "RIFE Therapy",
      description: "Unlimited access to RIFE frequency therapy sessions for pathogen elimination and cellular healing.",
      icon: Zap
    },
    {
      title: "PEMF Therapy",
      description: "Pulsed electromagnetic field therapy sessions included in membership for pain relief and healing acceleration.",
      icon: Target
    },
    {
      title: "Home Visits",
      description: "Concierge home visits available for IV treatments and consultations (additional fees apply).",
      icon: Home
    }
  ];

  const membershipTiers = [
    {
      name: "Individual Membership",
      description: "Perfect for individuals seeking comprehensive integrative healthcare",
      features: [
        "Initial comprehensive consultation",
        "Personalized treatment plan",
        "IV treatments at member rates",
        "Free RIFE and PEMF therapy",
        "Direct provider texting",
        "Priority appointment booking"
      ],
      cta: "Learn More"
    },
    {
      name: "Family Membership",
      description: "Comprehensive healthcare for your entire family",
      features: [
        "Coverage for up to 4 family members",
        "Individual treatment plans for each member",
        "All individual membership benefits",
        "Family health consultations",
        "Coordinated treatment protocols",
        "Educational resources and support"
      ],
      cta: "Learn More"
    },
    {
      name: "Executive Membership",
      description: "Premium concierge healthcare with enhanced services",
      features: [
        "All family membership benefits",
        "Unlimited home visits",
        "24/7 provider access",
        "Advanced testing included",
        "Quarterly health assessments",
        "VIP treatment scheduling"
      ],
      cta: "Learn More"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
                  Membership
                </h1>
                <p className="text-xl text-sage-700 mb-4 font-medium">
                  Comprehensive Concierge Healthcare
                </p>
                <p className="text-lg text-sage-600 mb-8 leading-relaxed">
                  Once a patient has an initial consultation and receives a treatment plan,
                  they have access to treatment IVs at listed cost, and open access to
                  treatments (RIFE and PEMF) without additional charge. Members also have
                  access to texting the provider and home visits with additional cost.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 text-lg"
                  >
                    <Link href="/book-online">Schedule Consultation</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-sage-600 text-sage-700 hover:bg-sage-50 px-8 py-3 text-lg"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    <a href="tel:480-292-8602">Call 480-292-8602</a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-sage-100 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/medical-bg.png"
                    alt="The Flow Co. IV+O2 - Membership Services"
                    width={600}
                    height={500}
                    className="object-cover w-full h-96 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Membership Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                How Membership Works
              </h2>
              <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
                Our membership model provides ongoing, personalized healthcare with
                direct access to advanced treatments and your healthcare provider.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="border-sage-200 bg-sage-50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-sage-600 rounded-full text-white font-bold">
                      1
                    </div>
                    <CardTitle className="text-sage-800">Initial Consultation</CardTitle>
                  </div>
                  <CardDescription className="text-sage-600 leading-relaxed">
                    Comprehensive health assessment and personalized treatment plan development
                    with Teresa Foster, FNP.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-sage-200 bg-sage-50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-sage-600 rounded-full text-white font-bold">
                      2
                    </div>
                    <CardTitle className="text-sage-800">Treatment Access</CardTitle>
                  </div>
                  <CardDescription className="text-sage-600 leading-relaxed">
                    Immediate access to IV treatments, RIFE therapy, and PEMF therapy
                    as part of your membership benefits.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-sage-200 bg-sage-50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-sage-600 rounded-full text-white font-bold">
                      3
                    </div>
                    <CardTitle className="text-sage-800">Ongoing Care</CardTitle>
                  </div>
                  <CardDescription className="text-sage-600 leading-relaxed">
                    Direct provider communication, home visits, and continuous
                    health monitoring throughout your wellness journey.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                Membership Benefits
              </h2>
              <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
                Our members enjoy exclusive access to advanced treatments, personalized care,
                and direct communication with their healthcare provider.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {memberBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <span className="text-sage-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Included Treatments */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                Treatment Access
              </h2>
              <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
                Members have exclusive access to a comprehensive range of integrative
                treatments as part of their membership benefits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {treatments.map((treatment, index) => {
                const IconComponent = treatment.icon;
                return (
                  <Card key={index} className="border-sage-200 hover:shadow-lg transition-shadow bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-3 bg-sage-100 rounded-lg">
                          <IconComponent className="h-6 w-6 text-sage-600" />
                        </div>
                        <CardTitle className="text-sage-800">{treatment.title}</CardTitle>
                      </div>
                      <CardDescription className="text-sage-600 leading-relaxed">
                        {treatment.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                Membership Options
              </h2>
              <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
                Choose the membership level that best fits your healthcare needs
                and lifestyle preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {membershipTiers.map((tier, index) => (
                <Card key={index} className="border-sage-200 bg-white hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-sage-800 text-xl">{tier.name}</CardTitle>
                    <CardDescription className="text-sage-600">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-sage-600 mt-1 flex-shrink-0" />
                          <span className="text-sage-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="bg-sage-600 hover:bg-sage-700 text-white w-full"
                      size="lg"
                    >
                      <Link href="/book-online" className="flex items-center gap-2">
                        {tier.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Membership */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                Why Choose Membership?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-sage-200 bg-sage-50">
                <CardHeader>
                  <Users className="h-12 w-12 text-sage-600 mb-4" />
                  <CardTitle className="text-sage-800">Concierge Care</CardTitle>
                  <CardDescription className="text-sage-600">
                    Direct access to your healthcare provider with personalized attention
                    and extended consultation times for comprehensive care.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-sage-200 bg-sage-50">
                <CardHeader>
                  <Award className="h-12 w-12 text-sage-600 mb-4" />
                  <CardTitle className="text-sage-800">Cost Savings</CardTitle>
                  <CardDescription className="text-sage-600">
                    Access to treatments at member rates with included therapies
                    that would otherwise require additional fees.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-sage-200 bg-sage-50">
                <CardHeader>
                  <MessageCircle className="h-12 w-12 text-sage-600 mb-4" />
                  <CardTitle className="text-sage-800">Direct Communication</CardTitle>
                  <CardDescription className="text-sage-600">
                    Text messaging access to your provider for questions,
                    concerns, and ongoing support throughout your health journey.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Getting Started */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-sage-600 mb-8 leading-relaxed">
                  Begin your membership journey with a comprehensive consultation.
                  We&apos;ll develop your personalized treatment plan and get you started
                  with the therapies that will support your optimal health.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Phone className="h-6 w-6 text-sage-600 mt-1" />
                    <div>
                      <p className="font-medium text-sage-800">Call to Schedule</p>
                      <a href="tel:480-292-8602" className="text-sage-600 hover:text-sage-800 text-lg">
                        480-292-8602
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-6 w-6 text-sage-600 mt-1" />
                    <div>
                      <p className="font-medium text-sage-800">Email Us</p>
                      <a href="mailto:theflowcoaz@gmail.com" className="text-sage-600 hover:text-sage-800">
                        theflowcoaz@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-sage-600 mt-1" />
                    <div>
                      <p className="font-medium text-sage-800">Visit Our Clinic</p>
                      <p className="text-sage-600">560 West Brown Road<br />Mesa, AZ 85201</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold text-sage-800 mb-6">
                  Start Your Membership Today
                </h3>
                <p className="text-sage-600 mb-6 leading-relaxed">
                  Schedule your initial consultation to begin your journey with
                  concierge integrative healthcare. We&apos;ll discuss your health goals
                  and create a personalized treatment plan just for you.
                </p>
                <div className="space-y-4">
                  <Button className="bg-sage-600 hover:bg-sage-700 text-white w-full py-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <Link href="/book-online">Book Initial Consultation</Link>
                  </Button>
                  <Button variant="outline" className="border-sage-600 text-sage-700 hover:bg-sage-50 w-full py-3">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    <Link href="/team">Meet Our Team</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-sage-700 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience Concierge Healthcare
            </h2>
            <p className="text-xl text-sage-100 mb-8 leading-relaxed">
              Join our membership program and experience the difference that personalized,
              integrative healthcare can make in your life and wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-sage-700 hover:bg-sage-50 px-8 py-3 text-lg"
              >
                <Link href="/book-online">Join Our Membership</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sage-700 px-8 py-3 text-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:480-292-8602">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}