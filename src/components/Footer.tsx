import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sage-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">The Flow Co. IV+O2</h3>
              <p className="text-sage-200 text-lg">A Concierge Integrative Medical Practice</p>
            </div>
            <p className="text-sage-200 mb-4">
              Providing personalized, root-cause healing through integrative medicine,
              environmental toxin elimination, and natural treatment protocols.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sage-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-sage-200 hover:text-white transition-colors">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sage-200 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-sage-200 hover:text-white transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/book-online" className="text-sage-200 hover:text-white transition-colors">
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
                <MapPin className="h-5 w-5 mt-0.5 text-sage-300" />
                <div className="text-sage-200">
                  <div>560 West Brown Road</div>
                  <div>Mesa, AZ 85201-3221</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-sage-300" />
                <a href="tel:480-292-8602" className="text-sage-200 hover:text-white">
                  480-292-8602
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-sage-300" />
                <a href="mailto:info@theflowcoaz.com" className="text-sage-200 hover:text-white">
                  info@theflowcoaz.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 mt-0.5 text-sage-300" />
                <div className="text-sage-200">
                  <div>By Appointment</div>
                  <div className="text-sm">Call for availability</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Treatment Categories */}
        <div className="mt-8 pt-8 border-t border-sage-700">
          <h4 className="text-lg font-semibold mb-4">Treatment Specialties</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="space-y-1">
              <Link href="/treatments/natural-cancer" className="block text-sage-200 hover:text-white">
                Natural Cancer Treatment
              </Link>
              <Link href="/treatments/autoimmunity" className="block text-sage-200 hover:text-white">
                Autoimmunity
              </Link>
              <Link href="/treatments/hormone-testing" className="block text-sage-200 hover:text-white">
                Hormone Balancing
              </Link>
            </div>
            <div className="space-y-1">
              <Link href="/treatments/hyperbaric-oxygen" className="block text-sage-200 hover:text-white">
                Hyperbaric Oxygen
              </Link>
              <Link href="/treatments/eboo-therapy" className="block text-sage-200 hover:text-white">
                EBOO Therapy
              </Link>
              <Link href="/treatments/vitamin-c" className="block text-sage-200 hover:text-white">
                Vitamin C Therapy
              </Link>
            </div>
            <div className="space-y-1">
              <Link href="/treatments/pemf" className="block text-sage-200 hover:text-white">
                PEMF Therapy
              </Link>
              <Link href="/treatments/methylene-blue" className="block text-sage-200 hover:text-white">
                Methylene Blue
              </Link>
              <Link href="/treatments/mistletoe" className="block text-sage-200 hover:text-white">
                Mistletoe Injections
              </Link>
            </div>
            <div className="space-y-1">
              <Link href="/treatments/long-covid" className="block text-sage-200 hover:text-white">
                Long Covid Treatment
              </Link>
              <Link href="/treatments/rife" className="block text-sage-200 hover:text-white">
                Rife Therapy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-sage-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sage-300 text-sm mb-4 md:mb-0">
            © 2025 The Flow Co. IV+O2. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-sage-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/hipaa-notice" className="text-sage-300 hover:text-white">
              HIPAA Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}