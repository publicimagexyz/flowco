import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-sage-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="The Flow Co. IV+O2"
                width={200}
                height={80}
                className="mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">The Flow Co. IV+O2</h3>
              <p className="text-sage-600 text-lg">A Concierge Integrative Medical Practice</p>
            </div>
            <p className="text-sage-600 mb-4">
              Providing personalized, root-cause healing through integrative medicine,
              environmental toxin elimination, and natural treatment protocols.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sage-600 hover:text-sage-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-sage-600 hover:text-sage-900 transition-colors">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sage-600 hover:text-sage-900 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-sage-600 hover:text-sage-900 transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/book-online" className="text-sage-600 hover:text-sage-900 transition-colors">
                  Book Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 text-sage-500" />
                <div className="text-sage-700">
                  <div>560 West Brown Road</div>
                  <div>Mesa, AZ 85201-3221</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-sage-500" />
                <a href="tel:480-292-8602" className="text-sage-700 hover:text-sage-900">
                  480-292-8602
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-sage-500" />
                <a href="mailto:info@theflowcoaz.com" className="text-sage-700 hover:text-sage-900">
                  info@theflowcoaz.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 mt-0.5 text-sage-500" />
                <div className="text-sage-700">
                  <div>By Appointment</div>
                  <div className="text-sm">Call for availability</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Teresa's Schedule & Hyperbaric Info */}
        <div className="mt-8 pt-8 border-t border-sage-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Meet Teresa at The Wellness Compounding Pharmacy</h4>
              <div className="space-y-2 text-sage-700">
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 mt-0.5 text-sage-500" />
                  <div>
                    <div className="font-medium">Every Monday</div>
                    <div className="text-sm">10:00 AM - 2:00 PM</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 mt-0.5 text-sage-500" />
                  <div>
                    <div className="font-medium">The Wellness Compounding Pharmacy</div>
                    <div className="text-sm">16810 E. El Pueblo Blvd</div>
                    <div className="text-sm">Fountain Hills, AZ 85268</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hyperbaric Oxygen Therapy</h4>
              <div className="space-y-2 text-sage-700">
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 mt-0.5 text-sage-500" />
                  <div>
                    <div className="font-medium">Available Monday - Saturday</div>
                    <div className="text-sm mt-2">
                      <Link href="/book-online" className="inline-flex items-center text-sage-600 hover:text-sage-900 font-medium">
                        Book Now →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Categories */}
        <div className="mt-8 pt-8 border-t border-sage-200">
          <h4 className="text-lg font-semibold mb-4">Treatment Specialties</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="space-y-1">
              <Link href="/treatments/natural-cancer" className="block text-sage-600 hover:text-sage-900">
                Natural Cancer Treatment
              </Link>
              <Link href="/treatments/autoimmunity" className="block text-sage-600 hover:text-sage-900">
                Autoimmunity
              </Link>
              <Link href="/treatments/hormone-testing" className="block text-sage-600 hover:text-sage-900">
                Hormone Balancing
              </Link>
            </div>
            <div className="space-y-1">
              <Link href="/treatments/hyperbaric-oxygen" className="block text-sage-600 hover:text-sage-900">
                Hyperbaric Oxygen
              </Link>
              <Link href="/treatments/eboo-therapy" className="block text-sage-600 hover:text-sage-900">
                EBOO Therapy
              </Link>
              <Link href="/treatments/vitamin-c" className="block text-sage-600 hover:text-sage-900">
                Vitamin C Therapy
              </Link>
            </div>
            <div className="space-y-1">
              <Link href="/treatments/pemf" className="block text-sage-600 hover:text-sage-900">
                PEMF Therapy
              </Link>
              <Link href="/treatments/methylene-blue" className="block text-sage-600 hover:text-sage-900">
                Methylene Blue
              </Link>
              <Link href="/treatments/mistletoe" className="block text-sage-600 hover:text-sage-900">
                Mistletoe Injections
              </Link>
            </div>
            <div className="space-y-1">
              <Link href="/treatments/long-covid" className="block text-sage-600 hover:text-sage-900">
                Long Covid Treatment
              </Link>
              <Link href="/treatments/rife" className="block text-sage-600 hover:text-sage-900">
                Rife Therapy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-sage-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sage-500 text-sm mb-4 md:mb-0">
            © 2025 The Flow Co. IV+O2. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-sage-500 hover:text-sage-900">
              Privacy Policy
            </Link>
            <Link href="/hipaa-notice" className="text-sage-500 hover:text-sage-900">
              HIPAA Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}