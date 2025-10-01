import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  Phone,
  MapPin,
  User,
  FileText,
  CheckCircle,
  Heart
} from "lucide-react";

export default function BookOnline() {
  const consultationTypes = [
    {
      title: "Initial Consultation",
      duration: "90 minutes",
      description: "Comprehensive health assessment, medical history review, and personalized treatment plan development.",
      includes: [
        "Detailed health history review",
        "Functional medicine assessment",
        "Lab test recommendations",
        "Initial treatment plan",
        "Lifestyle and dietary guidance"
      ],
      price: "Contact for pricing"
    },
    {
      title: "Follow-up Consultation",
      duration: "60 minutes",
      description: "Progress review, treatment plan adjustments, and ongoing support for your health journey.",
      includes: [
        "Treatment progress evaluation",
        "Plan modifications as needed",
        "Additional therapy recommendations",
        "Questions and concerns addressed",
        "Next steps planning"
      ],
      price: "Contact for pricing"
    },
    {
      title: "Treatment Planning Session",
      duration: "45 minutes",
      description: "Focused session to design specific treatment protocols and discuss therapeutic options.",
      includes: [
        "Treatment protocol development",
        "Therapy scheduling coordination",
        "Expected outcomes discussion",
        "Cost and timeline review",
        "Preparation instructions"
      ],
      price: "Contact for pricing"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Contact Us",
      description: "Call our office or send us a message to schedule your consultation.",
      icon: Phone
    },
    {
      number: "2",
      title: "Initial Assessment",
      description: "Complete intake forms and provide relevant medical history.",
      icon: FileText
    },
    {
      number: "3",
      title: "Consultation",
      description: "Meet with Teresa Foster, FNP for your comprehensive evaluation.",
      icon: User
    },
    {
      number: "4",
      title: "Treatment Plan",
      description: "Receive your personalized treatment recommendations and begin your healing journey.",
      icon: Heart
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Schedule Your Consultation
            </h1>
            <p className="text-xl text-sage-700 mb-4 font-medium">
              Begin Your Journey to Optimal Health
            </p>
            <p className="text-lg text-sage-600 leading-relaxed max-w-3xl mx-auto">
              Ready to take the first step towards better health? Schedule a consultation
              with Teresa Foster, FNP to discuss your health goals and explore how our
              integrative approach can support your wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Bar */}
      <section className="bg-sage-600 text-white py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-6 w-6" />
                <div>
                  <div className="font-semibold">Call Now</div>
                  <a href="tel:480-292-8602" className="text-sage-100 hover:text-white text-lg">
                    480-292-8602
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Clock className="h-6 w-6" />
                <div>
                  <div className="font-semibold">Office Hours</div>
                  <div className="text-sage-100">By Appointment</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="h-6 w-6" />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-sage-100">Mesa, AZ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
              Consultation Options
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed">
              Choose the consultation type that best fits your needs. All appointments
              are conducted in our comfortable Mesa office location.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {consultationTypes.map((consultation, index) => (
              <Card key={index} className="border-sage-200 bg-white hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-sage-800 text-xl">{consultation.title}</CardTitle>
                  <div className="flex items-center justify-center gap-2 text-sage-600">
                    <Clock className="h-4 w-4" />
                    <span>{consultation.duration}</span>
                  </div>
                  <CardDescription className="text-sage-600 leading-relaxed">
                    {consultation.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-sage-800 mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {consultation.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-sage-600">
                          <CheckCircle className="h-4 w-4 text-sage-600 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center pt-4 border-t border-sage-100">
                    <div className="text-sage-800 font-semibold mb-4">{consultation.price}</div>
                    <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      Call to Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
              How to Schedule
            </h2>
            <p className="text-lg text-sage-600 leading-relaxed">
              Getting started with The Flow Co. is simple. Follow these easy steps
              to schedule your consultation and begin your health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-sage-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.number}
                    </div>
                    <div className="p-3 bg-sage-100 rounded-full w-fit mx-auto">
                      <IconComponent className="h-8 w-8 text-sage-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-sage-800 mb-3">{step.title}</h3>
                  <p className="text-sage-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-sage-50 rounded-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-sage-600 leading-relaxed">
              We&apos;re here to answer your questions and help you get started on your
              path to optimal health.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-sage-200 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-sage-800">
                      <Phone className="h-6 w-6" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sage-600 mb-4">
                      Call us during business hours to speak with our team and schedule
                      your appointment.
                    </p>
                    <a
                      href="tel:480-292-8602"
                      className="text-2xl font-semibold text-sage-700 hover:text-sage-800"
                    >
                      480-292-8602
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-sage-200 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-sage-800">
                      <MapPin className="h-6 w-6" />
                      Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sage-600 mb-4">
                      Visit our comfortable office in Mesa, Arizona for your consultation
                      and treatments.
                    </p>
                    <address className="text-sage-700 not-italic font-medium">
                      560 West Brown Road<br />
                      Mesa, AZ 85201-3221
                    </address>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button
                  size="lg"
                  className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 text-lg"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  <a href="tel:480-292-8602">Call Now to Schedule</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Information */}
      <section className="py-16 md:py-24 bg-sage-700 text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Calendar className="h-16 w-16 text-sage-100 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Preparing for Your Visit
            </h2>
            <p className="text-xl text-sage-100 mb-8 leading-relaxed">
              To make the most of your consultation, please bring any relevant medical
              records, current medications list, and a list of questions or concerns
              you&apos;d like to discuss.
            </p>
            <div className="bg-sage-800 rounded-lg p-6 text-left max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-sage-100 mb-4">Please Bring:</h3>
              <ul className="space-y-2 text-sage-200">
                <li>• Recent lab results and medical records</li>
                <li>• Current medications and supplements list</li>
                <li>• Insurance information</li>
                <li>• List of symptoms and health concerns</li>
                <li>• Previous treatment history</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}