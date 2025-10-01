import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Award, BookOpen, CheckCircle } from "lucide-react";

export default function Team() {
  const specializations = [
    "Root cause healing approaches",
    "Gut health restoration",
    "Environmental toxin identification and elimination",
    "Hormone balancing",
    "Detoxification protocols",
    "Diet and lifestyle modifications",
    "Cancer and chronic illness treatment",
    "Conventional medicine integration",
    "Emergency medicine background",
    "Accident and injury recovery"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Meet Our Team
            </h1>
            <p className="text-lg text-sage-600 leading-relaxed">
              Our experienced practitioners combine the best of conventional and functional
              medicine to provide personalized, comprehensive care focused on root cause healing.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Teresa Foster */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <div className="bg-sage-100 rounded-lg overflow-hidden shadow-lg mb-6">
                    <Image
                      src="/images/teresa-bio.jpg"
                      alt="Teresa Foster, FNP - The Flow Co. IV+O2"
                      width={323}
                      height={452}
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-2">
                    Teresa Foster, FNP
                  </h2>
                  <p className="text-lg text-sage-600 font-medium mb-4">
                    Family Nurse Practitioner & Founder
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sage-700 mb-4">
                    <Award className="h-5 w-5" />
                    <span>Functional Medicine Specialist</span>
                  </div>
                </div>

                <div className="text-left">
                  <p className="text-sage-600 leading-relaxed mb-4">
                    Teresa Foster brings years of experience in both conventional and functional
                    medicine to The Flow Co. Previously working at Nature Works Best, a natural
                    cancer treatment center in Tempe, AZ, she has developed expertise in
                    integrative approaches to complex health conditions.
                  </p>

                  <p className="text-sage-600 leading-relaxed mb-6">
                    Her background spans conventional medicine, emergency medicine, and
                    accident/injury recovery, providing her with a comprehensive understanding
                    of both acute and chronic health conditions.
                  </p>

                  <div className="flex flex-col gap-3">
                    <Button className="bg-sage-600 hover:bg-sage-700 text-white">
                      <Link href="/book-online">Schedule Consultation</Link>
                    </Button>
                    <Button variant="outline" className="border-sage-600 text-sage-700 hover:bg-sage-50">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact Teresa
                    </Button>
                  </div>
                </div>
              </div>

              {/* Rachel Thompson */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <div className="bg-sage-100 rounded-lg overflow-hidden shadow-lg mb-6">
                    <Image
                      src="/images/rachel-bio-original.jpg"
                      alt="Rachel Thompson, MA, HCT - The Flow Co. IV+O2"
                      width={251}
                      height={334}
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-2">
                    Rachel Thompson, MA, HCT
                  </h2>
                  <p className="text-lg text-sage-600 font-medium mb-4">
                    Hyperbaric Oxygen Therapy Specialist
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sage-700 mb-4">
                    <Award className="h-5 w-5" />
                    <span>Over 20 Years Medical Experience</span>
                  </div>
                </div>

                <div className="text-left">
                  <p className="text-sage-600 leading-relaxed mb-4">
                    With over 20 years of experience in various areas of the medical field,
                    Rachel brings a well-rounded and compassionate approach to patient care.
                    Over the past three years, she has focused her expertise on Hyperbaric
                    Oxygen Therapy.
                  </p>

                  <p className="text-sage-600 leading-relaxed mb-6">
                    She is a proud parent of three grown children and enjoys spending time
                    outdoors with her husband and their two dogs—whether camping, out on the
                    water, or exploring trails in their RZR.
                  </p>

                  <div className="flex flex-col gap-3">
                    <Button className="bg-sage-600 hover:bg-sage-700 text-white">
                      <Link href="/treatments/hyperbaric-oxygen">Learn About HBOT</Link>
                    </Button>
                    <Button variant="outline" className="border-sage-600 text-sage-700 hover:bg-sage-50">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact Rachel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                Areas of Expertise
              </h2>
              <p className="text-lg text-sage-600 leading-relaxed">
                Teresa&apos;s comprehensive training and experience encompass a wide range of
                specialties, allowing her to provide holistic, personalized care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specializations.map((specialization, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-sage-600 mt-1 flex-shrink-0" />
                  <span className="text-sage-700 text-lg">{specialization}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
              Our Philosophy
            </h2>
            <div className="bg-sage-50 rounded-lg p-8 md:p-12">
              <BookOpen className="h-12 w-12 text-sage-600 mx-auto mb-6" />
              <p className="text-lg text-sage-600 leading-relaxed italic mb-6">
                &ldquo;True healing happens when we address the root causes of illness, not just
                the symptoms. Every person is unique, and their healing journey should be too.
                By combining the best of conventional and functional medicine, we can support
                the body&apos;s innate ability to heal and restore optimal health.&rdquo;
              </p>
              <p className="text-sage-800 font-semibold">
                — Teresa Foster, FNP
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
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-xl text-sage-100 mb-8 leading-relaxed">
              Schedule a consultation with our experienced team to discuss your health goals and
              learn how our integrative approach can support your wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-sage-700 hover:bg-sage-50 px-8 py-3 text-lg"
              >
                <Link href="/book-online">Book Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sage-700 px-8 py-3 text-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:480-292-8602">Call 480-292-8602</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}