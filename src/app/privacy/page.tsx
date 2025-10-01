import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-sage-50 py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sage-600">
            <Link href="/" className="hover:text-sage-800 flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Home
            </Link>
            <span>/</span>
            <span className="text-sage-800">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-4 bg-sage-600 rounded-full w-fit mx-auto mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-sage-600">
              Last Updated: October 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-sage">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-sage-600 leading-relaxed">
                The Flow Co. IV+O2 (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy
                and maintaining the security of your personal and health information. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your information when
                you visit our website or receive medical services from our practice.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-sage-600" />
                <h2 className="text-2xl font-bold text-sage-800 m-0">
                  1. Information We Collect
                </h2>
              </div>
              
              <h3 className="text-xl font-bold text-sage-700 mt-6 mb-3">
                Personal Information
              </h3>
              <p className="text-sage-600 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="text-sage-600 leading-relaxed space-y-2 mb-6">
                <li>Name, address, email address, and telephone number</li>
                <li>Date of birth and demographic information</li>
                <li>Insurance information</li>
                <li>Payment and billing information</li>
                <li>Medical history and health information</li>
                <li>Treatment preferences and health goals</li>
              </ul>

              <h3 className="text-xl font-bold text-sage-700 mt-6 mb-3">
                Protected Health Information (PHI)
              </h3>
              <p className="text-sage-600 leading-relaxed mb-4">
                As a healthcare provider, we collect and maintain Protected Health Information as
                defined by HIPAA. Please see our separate{" "}
                <Link href="/hipaa-notice" className="text-sage-600 underline hover:text-sage-800">
                  HIPAA Notice of Privacy Practices
                </Link>{" "}
                for detailed information about how we handle your health information.
              </p>

              <h3 className="text-xl font-bold text-sage-700 mt-6 mb-3">
                Website Usage Information
              </h3>
              <p className="text-sage-600 leading-relaxed mb-4">
                We automatically collect certain information when you visit our website:
              </p>
              <ul className="text-sage-600 leading-relaxed space-y-2">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Click patterns and site navigation</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-sage-600" />
                <h2 className="text-2xl font-bold text-sage-800 m-0">
                  2. How We Use Your Information
                </h2>
              </div>
              
              <p className="text-sage-600 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="text-sage-600 leading-relaxed space-y-2">
                <li>
                  <strong>Medical Treatment:</strong> To provide, coordinate, and manage your
                  healthcare services
                </li>
                <li>
                  <strong>Appointment Scheduling:</strong> To schedule, confirm, and remind you
                  of appointments
                </li>
                <li>
                  <strong>Billing and Payment:</strong> To process payments and handle insurance
                  claims
                </li>
                <li>
                  <strong>Communication:</strong> To respond to your inquiries and provide
                  important updates
                </li>
                <li>
                  <strong>Quality Improvement:</strong> To improve our services and patient care
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To comply with legal and regulatory
                  requirements
                </li>
                <li>
                  <strong>Website Improvement:</strong> To enhance our website functionality and
                  user experience
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-sage-600" />
                <h2 className="text-2xl font-bold text-sage-800 m-0">
                  3. Information Security
                </h2>
              </div>
              
              <p className="text-sage-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect
                your personal and health information, including:
              </p>
              <ul className="text-sage-600 leading-relaxed space-y-2 mb-6">
                <li>Encrypted data transmission and storage</li>
                <li>Secure server infrastructure</li>
                <li>Access controls and authentication</li>
                <li>Regular security assessments</li>
                <li>Staff training on privacy and security</li>
                <li>Business associate agreements with third-party vendors</li>
              </ul>

              <div className="bg-sage-50 p-6 rounded-lg">
                <p className="text-sage-600 leading-relaxed m-0">
                  <strong className="text-sage-800">Please Note:</strong> While we strive to
                  protect your information, no method of transmission over the internet or
                  electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-sage-800 mb-4">
                4. Information Sharing and Disclosure
              </h2>
              
              <p className="text-sage-600 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information in the
                following circumstances:
              </p>
              <ul className="text-sage-600 leading-relaxed space-y-2">
                <li>
                  <strong>With Your Consent:</strong> When you authorize us to share information
                </li>
                <li>
                  <strong>Healthcare Operations:</strong> With other healthcare providers involved
                  in your care
                </li>
                <li>
                  <strong>Business Associates:</strong> With vendors who assist in providing
                  services (under HIPAA-compliant agreements)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court order, or
                  regulatory authority
                </li>
                <li>
                  <strong>Insurance:</strong> With insurance companies for billing and claims
                  processing
                </li>
                <li>
                  <strong>Emergency Situations:</strong> When necessary to protect health and
                  safety
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-sage-800 mb-4">
                5. Your Privacy Rights
              </h2>
              
              <p className="text-sage-600 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="text-sage-600 leading-relaxed space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Restriction:</strong> Request restrictions on certain uses</li>
                <li><strong>Accounting:</strong> Request an accounting of disclosures</li>
                <li><strong>Confidential Communication:</strong> Request alternative communication methods</li>
                <li><strong>Complaint:</strong> File a complaint if you believe your privacy rights have been violated</li>
              </ul>
              
              <p className="text-sage-600 leading-relaxed mt-6">
                For HIPAA-specific rights, please refer to our{" "}
                <Link href="/hipaa-notice" className="text-sage-600 underline hover:text-sage-800">
                  HIPAA Notice of Privacy Practices
                </Link>.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-sage-800 mb-4">
                6. Cookies and Tracking Technologies
              </h2>
              
              <p className="text-sage-600 leading-relaxed mb-4">
                Our website may use cookies and similar tracking technologies to enhance your
                experience. You can control cookies through your browser settings, but disabling
                cookies may limit some website functionality.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-sage-800 mb-4">
                7. Children&apos;s Privacy
              </h2>
              
              <p className="text-sage-600 leading-relaxed">
                Our website is not directed to children under 13. We do not knowingly collect
                personal information from children under 13 without parental consent.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-sage-800 mb-4">
                8. Changes to This Policy
              </h2>
              
              <p className="text-sage-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any
                material changes by posting the new policy on our website and updating the
                &ldquo;Last Updated&rdquo; date.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-sage-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-sage-800 mb-4">
                Contact Us
              </h2>
              <p className="text-sage-600 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your privacy
                rights, please contact us:
              </p>
              <div className="text-sage-600 space-y-2">
                <p><strong className="text-sage-800">The Flow Co. IV+O2</strong></p>
                <p>560 West Brown Road<br />Mesa, AZ 85201</p>
                <p>Phone: <a href="tel:480-292-8602" className="text-sage-600 underline hover:text-sage-800">480-292-8602</a></p>
                <p>Email: <a href="mailto:info@theflowco.com" className="text-sage-600 underline hover:text-sage-800">info@theflowco.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

