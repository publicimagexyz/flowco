import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Heart,
  Shield,
  Leaf,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Users,
  Award,
  Activity,
  Zap,
  Target,
  Droplets,
  Wind,
  Star,
  ArrowRight,
  BookOpen,
  MessageCircle
} from "lucide-react";

export default function Home() {
  const treatments = [
    {
      title: "Natural Cancer Treatment",
      description: "Integrative approaches to cancer care focusing on root causes and immune system support.",
      href: "/treatments/natural-cancer",
      icon: Shield
    },
    {
      title: "Autoimmunity Support",
      description: "Comprehensive protocols for autoimmune conditions using functional medicine principles.",
      href: "/treatments/autoimmunity",
      icon: Heart
    },
    {
      title: "Hormone Balancing",
      description: "Advanced testing and natural hormone optimization for better health and vitality.",
      href: "/treatments/hormone-testing",
      icon: Leaf
    },
    {
      title: "Hyperbaric Oxygen",
      description: "Enhanced oxygen therapy for accelerated healing and recovery.",
      href: "/treatments/hyperbaric-oxygen",
      icon: Wind
    },
    {
      title: "IV Therapy",
      description: "High-dose vitamin C and customized IV infusions for optimal health.",
      href: "/treatments/vitamin-c",
      icon: Droplets
    },
    {
      title: "PEMF Therapy",
      description: "Pulsed electromagnetic field therapy for cellular healing and pain relief.",
      href: "/treatments/pemf",
      icon: Zap
    }
  ];

  const benefits = [
    "Root cause healing approach",
    "Personalized treatment plans",
    "Advanced diagnostic testing",
    "Environmental toxin elimination",
    "Gut health restoration",
    "Natural detoxification protocols",
    "Home visits available",
    "Concierge medicine model"
  ];

  const conditions = [
    "Cancer support therapy",
    "Autoimmune conditions",
    "Chronic fatigue syndrome",
    "Long Covid symptoms",
    "Hormone imbalances",
    "Digestive disorders",
    "Heavy metal toxicity",
    "Chronic infections"
  ];

  const testimonials = [
    {
      text: "Teresa's approach to healing is truly transformative. She addresses not just symptoms but the underlying causes of illness.",
      author: "Sarah M.",
      condition: "Autoimmune Recovery"
    },
    {
      text: "After years of conventional treatment, I finally found answers and healing through functional medicine approaches.",
      author: "Michael T.",
      condition: "Chronic Fatigue"
    },
    {
      text: "The personalized care and attention to detail exceeded all my expectations. I feel better than I have in years.",
      author: "Jennifer L.",
      condition: "Hormone Optimization"
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
                <h1 className="text-4xl md:text-6xl font-bold text-sage-800 mb-6">
                  The Flow Co.
                  <span className="block text-2xl md:text-3xl text-sage-600 font-medium mt-2">
                    IV+O2
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-sage-700 mb-4 font-medium">
                  A Concierge Integrative Medical Practice
                </p>
              <p className="text-lg text-sage-600 mb-8 max-w-3xl leading-relaxed">
                Experience personalized healthcare that addresses the root causes of illness.
                Our integrative approach combines functional medicine with advanced therapies
                to restore your health naturally and support your body&apos;s innate healing processes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 text-lg"
                  >
                    <Link href="/book-online">Book Consultation</Link>
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
                    alt="The Flow Co. IV+O2 - Functional Medicine Practice"
                    width={600}
                    height={500}
                    className="object-cover w-full h-96 rounded-lg"
                    priority
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
              Healing Beyond Symptoms
            </h2>
            <p className="text-xl text-sage-600 mb-8 leading-relaxed">
              At The Flow Co., we believe true healing happens when we address the root causes
              of illness, not just treat symptoms. Our concierge integrative medical practice
              combines the best of conventional and functional medicine to provide personalized,
              comprehensive care.
            </p>
            <div className="bg-sage-50 rounded-lg p-8 md:p-12">
              <BookOpen className="h-16 w-16 text-sage-600 mx-auto mb-6" />
              <blockquote className="text-lg text-sage-600 leading-relaxed italic mb-6">
                &ldquo;Every person is unique, and their healing journey should be too. By combining
                evidence-based medicine with natural therapies, we support the body&apos;s innate
                ability to heal and restore optimal health.&rdquo;
              </blockquote>
              <p className="text-sage-800 font-semibold">
                — Teresa Foster, FNP, Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Modalities */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                Advanced Treatment Modalities
              </h2>
              <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
                We offer cutting-edge therapies designed to optimize your health and
                support your body&apos;s natural healing processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <CardContent className="pt-0">
                      <Button variant="outline" className="border-sage-600 text-sage-700 hover:bg-sage-50 w-full">
                        <Link href={treatment.href} className="flex items-center gap-2" prefetch={true}>
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                Conditions We Specialize In
              </h2>
              <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
                Our integrative approach has shown remarkable results in treating
                complex health conditions by addressing underlying imbalances.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-start gap-3 bg-sage-50 p-4 rounded-lg">
                  <Target className="h-5 w-5 text-sage-600 mt-1 flex-shrink-0" />
                  <span className="text-sage-700 font-medium">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                Why Choose The Flow Co.?
              </h2>
              <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
                Our comprehensive approach sets us apart in delivering personalized,
                effective healthcare solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <span className="text-sage-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-sage-200 bg-white">
                <CardHeader>
                  <Users className="h-12 w-12 text-sage-600 mb-4" />
                  <CardTitle className="text-sage-800">Concierge Care</CardTitle>
                  <CardDescription className="text-sage-600">
                    Personalized attention with extended consultation times and
                    comprehensive treatment planning.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-sage-200 bg-white">
                <CardHeader>
                  <Award className="h-12 w-12 text-sage-600 mb-4" />
                  <CardTitle className="text-sage-800">Expert Practitioner</CardTitle>
                  <CardDescription className="text-sage-600">
                    Led by Teresa Foster, FNP, with extensive experience in both
                    conventional and functional medicine.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-sage-200 bg-white">
                <CardHeader>
                  <Activity className="h-12 w-12 text-sage-600 mb-4" />
                  <CardTitle className="text-sage-800">Advanced Testing</CardTitle>
                  <CardDescription className="text-sage-600">
                    Comprehensive diagnostic testing including DUTCH, RGCC, and
                    advanced functional medicine labs.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                Patient Success Stories
              </h2>
              <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
                Hear from patients who have experienced transformative healing
                through our integrative approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-sage-200 bg-sage-50">
                  <CardHeader>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-sage-600 fill-current" />
                      ))}
                    </div>
                    <CardDescription className="text-sage-600 leading-relaxed italic mb-4">
                      &ldquo;{testimonial.text}&rdquo;
                    </CardDescription>
                    <div>
                      <p className="font-semibold text-sage-800">{testimonial.author}</p>
                      <p className="text-sm text-sage-600">{testimonial.condition}</p>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                  Visit Our Mesa Location
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-sage-600 mt-1" />
                    <div>
                      <p className="font-medium text-sage-800">Address</p>
                      <p className="text-sage-600">560 West Brown Road<br />Mesa, AZ 85201</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-6 w-6 text-sage-600 mt-1" />
                    <div>
                      <p className="font-medium text-sage-800">Phone</p>
                      <a href="tel:480-292-8602" className="text-sage-600 hover:text-sage-800">
                        480-292-8602
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-sage-600 mt-1" />
                    <div>
                      <p className="font-medium text-sage-800">Hours</p>
                      <p className="text-sage-600">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: By Appointment<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold text-sage-800 mb-6">
                  Ready to Begin Your Healing Journey?
                </h3>
                <p className="text-sage-600 mb-6 leading-relaxed">
                  Schedule a comprehensive consultation to discuss your health goals and
                  learn how our integrative approach can support your wellness journey.
                </p>
                <div className="space-y-4">
                  <Button className="bg-sage-600 hover:bg-sage-700 text-white w-full py-3">
                    <Link href="/book-online">Schedule Consultation</Link>
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
              Transform Your Health Today
            </h2>
            <p className="text-xl text-sage-100 mb-8 leading-relaxed">
              Don&apos;t wait to start your healing journey. Experience the difference that
              personalized, integrative medicine can make in your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-sage-700 hover:bg-sage-50 px-8 py-3 text-lg"
              >
                <Link href="/book-online">Book Your Consultation</Link>
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