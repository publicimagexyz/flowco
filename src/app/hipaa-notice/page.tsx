import Link from "next/link";
import { ArrowLeft, Shield, FileText, Lock, Eye, UserCheck } from "lucide-react";

export default function HIPAANotice() {
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
            <span className="text-sage-800">HIPAA Notice</span>
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
            <h1 className="text-3xl md:text-5xl font-bold text-sage-800 mb-4">
              HIPAA Notice of Privacy Practices
            </h1>
            <p className="text-lg text-sage-600">
              Effective Date: October 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-12 bg-sage-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-sage-800 mb-4">
                This Notice Describes How Medical Information About You May Be Used and Disclosed
                and How You Can Get Access to This Information
              </h2>
              <p className="text-lg text-sage-600 leading-relaxed">
                <strong className="text-sage-800">Please Review It Carefully.</strong> The Flow Co. IV+O2
                is required by law to maintain the privacy of your Protected Health Information (PHI)
                and to provide you with this notice of our legal duties and privacy practices.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-sage-600" />
                <h2 className="text-2xl font-bold text-sage-800">
                  1. Our Commitment to Your Privacy
                </h2>
              </div>
              
              <p className="text-sage-600 leading-relaxed mb-4">
                We understand that your health information is personal and we are committed to
                protecting it. We are required by law to:
              </p>
              <ul className="text-sage-600 leading-relaxed space-y-2">
                <li>• Maintain the privacy of your Protected Health Information</li>
                <li>• Provide you with this notice of our legal duties and privacy practices</li>
                <li>• Follow the terms of the notice currently in effect</li>
                <li>• Notify you following a breach of unsecured Protected Health Information</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-sage-600" />
                <h2 className="text-2xl font-bold text-sage-800">
                  2. How We May Use and Disclose Your Health Information
                </h2>
              </div>

              <h3 className="text-xl font-bold text-sage-700 mt-6 mb-3">
                For Treatment
              </h3>
              <p className="text-sage-600 leading-relaxed mb-6">
                We will use your health information to provide, coordinate, or manage your healthcare
                and related services. This includes sharing information with other healthcare
                providers involved in your care, such as physicians, laboratories, and pharmacies.
              </p>
              <div className="bg-sage-50 p-4 rounded-lg mb-6">
                <p className="text-sage-600 leading-relaxed m-0">
                  <strong className="text-sage-800">Example:</strong> We may share your treatment
                  plan with a specialist to whom we refer you, or send your lab results to your
                  primary care physician.
                </p>
              </div>

              <h3 className="text-xl font-bold text-sage-700 mt-6 mb-3">
                For Payment
              </h3>
              <p className="text-sage-600 leading-relaxed mb-6">
                We will use and disclose your health information to obtain payment for services
                provided to you. This includes billing activities, claims management, and
                determining eligibility for coverage.
              </p>
              <div className="bg-sage-50 p-4 rounded-lg mb-6">
                <p className="text-sage-600 leading-relaxed m-0">
                  <strong className="text-sage-800">Example:</strong> We may send your insurance
                  company information about your treatment to obtain payment or verify coverage.
                </p>
              </div>

              <h3 className="text-xl font-bold text-sage-700 mt-6 mb-3">
                For Healthcare Operations
              </h3>
              <p className="text-sage-600 leading-relaxed mb-6">
                We may use and disclose your health information for our healthcare operations,
                including quality assessment, staff training, business planning, and other
                administrative purposes.
              </p>
              <div className="bg-sage-50 p-4 rounded-lg mb-6">
                <p className="text-sage-600 leading-relaxed m-0">
                  <strong className="text-sage-800">Example:</strong> We may review your medical
                  records to evaluate the quality and effectiveness of the services we provide.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-sage-800 mb-4">
                3. Other Uses and Disclosures
              </h2>
              
              <p className="text-sage-600 leading-relaxed mb-4">
                We may use or disclose your health information without your authorization in the
                following situations:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-sage-600 pl-4">
                  <h3 className="font-bold text-sage-800 mb-2">Appointment Reminders</h3>
                  <p className="text-sage-600">
                    We may contact you to remind you of appointments or follow-up care.
                  </p>
                </div>

                <div className="border-l-4 border-sage-600 pl-4">
                  <h3 className="font-bold text-sage-800 mb-2">Treatment Alternatives</h3>
                  <p className="text-sage-600">
                    We may contact you to provide information about treatment alternatives or
                    health-related benefits and services.
                  </p>
                </div>

                <div className="border-l-4 border-sage-600 pl-4">
                  <h3 className="font-bold text-sage-800 mb-2">As Required by Law</h3>
                  <p className="text-sage-600">
                    We will disclose health information when required by federal, state, or local law.
                  </p>
                </div>

                <div className="border-l-4 border-sage-600 pl-4">
                  <h3 className="font-bold text-sage-800 mb-2">Public Health Activities</h3>
                  <p className="text-sage-600">
                    We may disclose information to public health authorities for disease prevention,
                    FDA-regulated products, and other public health purposes.
                  </p>
                </div>

                <div className="border-l-4 border-sage-600 pl-4">
                  <h3 className="font-bold text-sage-800 mb-2">Health Oversight Activities</h3>
                  <p className="text-sage-600">
                    We may disclose information to health oversight agencies for audits,
                    investigations, and licensure purposes.
                  </p>
                </div>

                <div className="border-l-4 border-sage-600 pl-4">
                  <h3 className="font-bold text-sage-800 mb-2">Legal Proceedings</h3>
                  <p className="text-sage-600">
                    We may disclose information in response to court orders, subpoenas, or other
                    lawful processes.
                  </p>
                </div>

                <div className="border-l-4 border-sage-600 pl-4">
                  <h3 className="font-bold text-sage-800 mb-2">Law Enforcement</h3>
                  <p className="text-sage-600">
                    We may disclose information for law enforcement purposes, including reporting
                    crimes or responding to law enforcement requests.
                  </p>
                </div>

                <div className="border-l-4 border-sage-600 pl-4">
                  <h3 className="font-bold text-sage-800 mb-2">To Avert a Serious Threat</h3>
                  <p className="text-sage-600">
                    We may use and disclose information when necessary to prevent a serious threat
                    to your health and safety or the health and safety of others.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="h-6 w-6 text-sage-600" />
                <h2 className="text-2xl font-bold text-sage-800">
                  4. Your Rights Regarding Your Health Information
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-sage-700 mb-3">
                    Right to Inspect and Copy
                  </h3>
                  <p className="text-sage-600 leading-relaxed">
                    You have the right to inspect and obtain a copy of your health information.
                    We may charge a reasonable fee for copying and mailing costs. We may deny
                    your request in certain limited circumstances.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-sage-700 mb-3">
                    Right to Amend
                  </h3>
                  <p className="text-sage-600 leading-relaxed">
                    If you believe your health information is incorrect or incomplete, you may
                    request an amendment. We may deny your request if the information was not
                    created by us, is not part of the records we keep, or is accurate and complete.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-sage-700 mb-3">
                    Right to an Accounting of Disclosures
                  </h3>
                  <p className="text-sage-600 leading-relaxed">
                    You have the right to request a list of disclosures we have made of your
                    health information for purposes other than treatment, payment, and healthcare
                    operations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-sage-700 mb-3">
                    Right to Request Restrictions
                  </h3>
                  <p className="text-sage-600 leading-relaxed">
                    You have the right to request restrictions on how we use or disclose your
                    information for treatment, payment, or healthcare operations. We are not
                    required to agree to your request except in certain circumstances involving
                    payment to health plans.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-sage-700 mb-3">
                    Right to Request Confidential Communications
                  </h3>
                  <p className="text-sage-600 leading-relaxed">
                    You have the right to request that we communicate with you in a certain way
                    or at a certain location. For example, you may ask that we contact you only
                    at work or by mail.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-sage-700 mb-3">
                    Right to a Paper Copy of This Notice
                  </h3>
                  <p className="text-sage-600 leading-relaxed">
                    You have the right to a paper copy of this notice, even if you have agreed
                    to receive the notice electronically.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-sage-700 mb-3">
                    Right to Be Notified of a Breach
                  </h3>
                  <p className="text-sage-600 leading-relaxed">
                    You have the right to be notified if your unsecured Protected Health
                    Information has been breached.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-sage-600" />
                <h2 className="text-2xl font-bold text-sage-800">
                  5. How to Exercise Your Rights
                </h2>
              </div>

              <p className="text-sage-600 leading-relaxed mb-4">
                To exercise any of your rights, please submit a written request to:
              </p>
              
              <div className="bg-sage-50 p-6 rounded-lg mb-6">
                <p className="text-sage-800 font-bold mb-2">Privacy Officer</p>
                <p className="text-sage-600">The Flow Co. IV+O2</p>
                <p className="text-sage-600">560 West Brown Road</p>
                <p className="text-sage-600">Mesa, AZ 85201</p>
                <p className="text-sage-600 mt-2">Phone: <a href="tel:480-292-8602" className="text-sage-600 underline hover:text-sage-800">480-292-8602</a></p>
                <p className="text-sage-600">Email: <a href="mailto:privacy@theflowco.com" className="text-sage-600 underline hover:text-sage-800">privacy@theflowco.com</a></p>
              </div>

              <p className="text-sage-600 leading-relaxed">
                Request forms are available at our office or on our website. We will respond to
                your request within 30 days.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-sage-800 mb-4">
                6. Complaints
              </h2>

              <p className="text-sage-600 leading-relaxed mb-4">
                If you believe your privacy rights have been violated, you may file a complaint
                with us or with the Secretary of the Department of Health and Human Services.
              </p>

              <div className="bg-sage-50 p-6 rounded-lg mb-4">
                <p className="text-sage-600 leading-relaxed mb-3">
                  <strong className="text-sage-800">To file a complaint with us:</strong>
                </p>
                <p className="text-sage-600">Contact our Privacy Officer at the address above.</p>
              </div>

              <div className="bg-sage-50 p-6 rounded-lg mb-4">
                <p className="text-sage-600 leading-relaxed mb-3">
                  <strong className="text-sage-800">To file a complaint with HHS:</strong>
                </p>
                <p className="text-sage-600 mb-2">U.S. Department of Health & Human Services</p>
                <p className="text-sage-600 mb-2">Office for Civil Rights</p>
                <p className="text-sage-600">Website:{" "}
                  <a 
                    href="https://www.hhs.gov/ocr/privacy/hipaa/complaints/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sage-600 underline hover:text-sage-800"
                  >
                    www.hhs.gov/ocr/privacy/hipaa/complaints
                  </a>
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
                <p className="text-amber-900 font-bold mb-2">Important:</p>
                <p className="text-amber-800 leading-relaxed m-0">
                  You will not be penalized or retaliated against for filing a complaint.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-sage-800 mb-4">
                7. Changes to This Notice
              </h2>

              <p className="text-sage-600 leading-relaxed mb-4">
                We reserve the right to change this notice and make the new notice apply to
                information we already have as well as any information we receive in the future.
                We will post a copy of the current notice in our office and on our website. The
                notice will contain the effective date.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-sage-700 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                Questions or Need More Information?
              </h2>
              <p className="text-sage-100 leading-relaxed mb-4">
                If you have questions about this notice or need additional information about our
                privacy practices, please contact our Privacy Officer:
              </p>
              <div className="space-y-2 text-sage-100">
                <p className="font-bold">The Flow Co. IV+O2</p>
                <p>560 West Brown Road, Mesa, AZ 85201</p>
                <p>Phone: <a href="tel:480-292-8602" className="text-white underline hover:text-sage-100">480-292-8602</a></p>
                <p>Email: <a href="mailto:privacy@theflowco.com" className="text-white underline hover:text-sage-100">privacy@theflowco.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

