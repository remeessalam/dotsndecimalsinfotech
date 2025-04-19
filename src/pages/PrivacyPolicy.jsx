import { Link } from "react-router-dom";
import { companyDetails } from "../constant";

export default function PrivacyPolicy() {
  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="mb-8 text-center">
          <h1
            className="text-3xl md:text-5xl font-bold mb-3"
            style={{ color: "#ebd36b" }}
          >
            Privacy Policy
          </h1>
          <div className="flex flex-col items-center justify-center mb-6">
            <h2
              className="text-xl md:text-2xl font-semibold"
              style={{ color: "#d6ae25" }}
            >
              dots&decimals infotech
            </h2>
            <a
              href="https://www.dotsndecimalsinfotech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base underline mt-1"
              style={{ color: "#f2ad18" }}
            >
              www.dotsndecimalsinfotech.com
            </a>
          </div>
          <p className="text-gray-300">Last Updated: April 19, 2025</p>
        </header>

        {/* Table of Contents */}
        {/* <div
          className="mb-12 p-4 md:p-6 rounded-lg"
          style={{ backgroundColor: "rgba(214, 174, 37, 0.1)" }}
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: "#ebd36b" }}>
            Table of Contents
          </h2>
          <ol className="list-decimal ml-5 grid md:grid-cols-2 gap-2">
            <li className="text-gray-300">
              <a
                href="#overview"
                className="hover:underline"
                style={{ color: "#f2ad18" }}
              >
                Overview
              </a>
            </li>
            <li className="text-gray-300">
              <a
                href="#collection"
                className="hover:underline"
                style={{ color: "#f2ad18" }}
              >
                Information Collection
              </a>
            </li>
            <li className="text-gray-300">
              <a
                href="#usage"
                className="hover:underline"
                style={{ color: "#f2ad18" }}
              >
                Information Usage
              </a>
            </li>
            <li className="text-gray-300">
              <a
                href="#sharing"
                className="hover:underline"
                style={{ color: "#f2ad18" }}
              >
                Information Sharing
              </a>
            </li>
            <li className="text-gray-300">
              <a
                href="#security"
                className="hover:underline"
                style={{ color: "#f2ad18" }}
              >
                Security Measures
              </a>
            </li>
            <li className="text-gray-300">
              <a
                href="#cookies"
                className="hover:underline"
                style={{ color: "#f2ad18" }}
              >
                Cookies & Tracking
              </a>
            </li>
            <li className="text-gray-300">
              <a
                href="#rights"
                className="hover:underline"
                style={{ color: "#f2ad18" }}
              >
                Your Rights
              </a>
            </li>
            <li className="text-gray-300">
              <a
                href="#contact"
                className="hover:underline"
                style={{ color: "#f2ad18" }}
              >
                Contact Us
              </a>
            </li>
          </ol>
        </div> */}

        {/* Main Content */}
        <div className="space-y-12">
          {/* Section 1: Overview */}
          <section id="overview" className="scroll-mt-16">
            <div
              className="mb-4 pb-2 border-b border-opacity-20"
              style={{ borderColor: "#d6ae25" }}
            >
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "#ebd36b" }}
              >
                1. Privacy Policy Overview
              </h2>
            </div>
            <div className="pl-0 md:pl-4 space-y-4 text-gray-300">
              <p>
                Welcome to dots&decimals infotech's Privacy Policy. This
                document explains how we collect, use, and protect your personal
                information when you use our services and visit our website at{" "}
                <a
                  href="https://www.dotsndecimalsinfotech.com/"
                  className="underline"
                  style={{ color: "#f2ad18" }}
                >
                  www.dotsndecimalsinfotech.com
                </a>
                .
              </p>
              <p>
                At dots&decimals infotech, we are committed to ensuring the
                privacy and security of your personal data. This policy is
                designed to help you understand what information we collect, why
                we collect it, and how you can update, manage, or request
                deletion of your information.
              </p>
              <p>
                By using our services and website, you agree to the collection
                and use of information in accordance with this policy. We will
                not use or share your information with anyone except as
                described in this Privacy Policy.
              </p>
            </div>
          </section>

          {/* Section 2: Information Collection */}
          <section id="collection" className="scroll-mt-16">
            <div
              className="mb-4 pb-2 border-b border-opacity-20"
              style={{ borderColor: "#d6ae25" }}
            >
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "#ebd36b" }}
              >
                2. Information Collection
              </h2>
            </div>
            <div className="pl-0 md:pl-4 space-y-4 text-gray-300">
              <p>
                dots&decimals infotech collects several types of information for
                various purposes to provide and improve our service to you:
              </p>
              <h3
                className="text-lg font-semibold mt-4"
                style={{ color: "#d6ae25" }}
              >
                2.1. Personal Data
              </h3>
              <p>
                While using our service, we may ask you to provide certain
                personally identifiable information that can be used to contact
                or identify you. This may include, but is not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name and contact details</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Address information</li>
                <li>Payment details when applicable</li>
              </ul>

              <h3
                className="text-lg font-semibold mt-4"
                style={{ color: "#d6ae25" }}
              >
                2.2. Usage Data
              </h3>
              <p>
                We may also collect information on how our service is accessed
                and used. This Usage Data may include:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Your computer's Internet Protocol address (e.g. IP address)
                </li>
                <li>Browser type and version</li>
                <li>Pages of our service that you visit</li>
                <li>Time and date of your visit</li>
                <li>Time spent on those pages</li>
                <li>Device identifiers and other diagnostic data</li>
              </ul>

              <h3
                className="text-lg font-semibold mt-4"
                style={{ color: "#d6ae25" }}
              >
                2.3. Cookies Data
              </h3>
              <p>
                We use cookies and similar tracking technologies to track
                activity on our service and hold certain information. For more
                information about cookies, please see Section 6.
              </p>
            </div>
          </section>

          {/* Section 3: Information Usage */}
          <section id="usage" className="scroll-mt-16">
            <div
              className="mb-4 pb-2 border-b border-opacity-20"
              style={{ borderColor: "#d6ae25" }}
            >
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "#ebd36b" }}
              >
                3. Information Usage
              </h2>
            </div>
            <div className="pl-0 md:pl-4 space-y-4 text-gray-300">
              <p>
                dots&decimals infotech uses the collected data for various
                purposes:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">
                    To provide and maintain our service:
                  </span>{" "}
                  Including monitoring the usage of our service and detecting
                  potential issues.
                </li>
                <li>
                  <span className="font-medium">To notify you:</span> About
                  changes to our service, products, or agreements.
                </li>
                <li>
                  <span className="font-medium">
                    To provide customer support:
                  </span>{" "}
                  Addressing and resolving your inquiries and issues.
                </li>
                <li>
                  <span className="font-medium">To improve our service:</span>{" "}
                  Using feedback and usage data to enhance user experience.
                </li>
                <li>
                  <span className="font-medium">To process transactions:</span>{" "}
                  Managing payments, billing, and other financial operations.
                </li>
                <li>
                  <span className="font-medium">
                    To provide personalized content:
                  </span>{" "}
                  Offering tailored recommendations and experiences.
                </li>
                <li>
                  <span className="font-medium">To communicate with you:</span>{" "}
                  Sending updates, promotional materials, and important notices.
                </li>
                <li>
                  <span className="font-medium">
                    To detect and prevent fraud:
                  </span>{" "}
                  Protecting our services and users from unauthorized access or
                  activities.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Information Sharing */}
          <section id="sharing" className="scroll-mt-16">
            <div
              className="mb-4 pb-2 border-b border-opacity-20"
              style={{ borderColor: "#d6ae25" }}
            >
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "#ebd36b" }}
              >
                4. Information Sharing
              </h2>
            </div>
            <div className="pl-0 md:pl-4 space-y-4 text-gray-300">
              <p>
                dots&decimals infotech may disclose your personal information in
                the following situations:
              </p>
              <h3
                className="text-lg font-semibold mt-4"
                style={{ color: "#d6ae25" }}
              >
                4.1. With Service Providers
              </h3>
              <p>
                We may share your personal information with third-party service
                providers to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Facilitate our service delivery</li>
                <li>Perform service-related tasks on our behalf</li>
                <li>Assist us in analyzing how our service is used</li>
                <li>Process payments or provide customer support</li>
              </ul>

              <h3
                className="text-lg font-semibold mt-4"
                style={{ color: "#d6ae25" }}
              >
                4.2. For Business Transfers
              </h3>
              <p>
                We may share or transfer your personal information in connection
                with, or during negotiations of, any merger, sale of company
                assets, financing, or acquisition of all or a portion of our
                business to another company.
              </p>

              <h3
                className="text-lg font-semibold mt-4"
                style={{ color: "#d6ae25" }}
              >
                4.3. With Affiliates
              </h3>
              <p>
                We may share your information with our affiliates, in which case
                we will require those affiliates to honor this Privacy Policy.
              </p>

              <h3
                className="text-lg font-semibold mt-4"
                style={{ color: "#d6ae25" }}
              >
                4.4. With Business Partners
              </h3>
              <p>
                We may share your information with our business partners to
                offer you certain products, services, or promotions.
              </p>

              <h3
                className="text-lg font-semibold mt-4"
                style={{ color: "#d6ae25" }}
              >
                4.5. Legal Obligations
              </h3>
              <p>
                We may disclose your personal information where required to do
                so by law or in response to valid requests by public authorities
                (e.g., a court or a government agency).
              </p>
            </div>
          </section>

          {/* Section 5: Security Measures */}
          <section id="security" className="scroll-mt-16">
            <div
              className="mb-4 pb-2 border-b border-opacity-20"
              style={{ borderColor: "#d6ae25" }}
            >
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "#ebd36b" }}
              >
                5. Security Measures
              </h2>
            </div>
            <div className="pl-0 md:pl-4 space-y-4 text-gray-300">
              <p>
                The security of your data is important to dots&decimals
                infotech. We implement reasonable security measures to protect
                your personal information from unauthorized access, alteration,
                disclosure, or destruction.
              </p>
              <p>Our security practices include:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Encryption:</span> Sensitive
                  data is encrypted both in transit and at rest.
                </li>
                <li>
                  <span className="font-medium">
                    Regular security assessments:
                  </span>{" "}
                  We conduct periodic audits and penetration testing.
                </li>
                <li>
                  <span className="font-medium">Access controls:</span> We
                  implement strict access controls and authentication
                  mechanisms.
                </li>
                <li>
                  <span className="font-medium">Continuous monitoring:</span>{" "}
                  Our systems are continuously monitored for suspicious
                  activities.
                </li>
                <li>
                  <span className="font-medium">Staff training:</span> Our team
                  receives regular security awareness training.
                </li>
              </ul>
              <p>
                However, please note that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While
                we strive to use commercially acceptable means to protect your
                personal data, we cannot guarantee its absolute security.
              </p>
            </div>
          </section>

          {/* Section 6: Cookies & Tracking */}
          <section id="cookies" className="scroll-mt-16">
            <div
              className="mb-4 pb-2 border-b border-opacity-20"
              style={{ borderColor: "#d6ae25" }}
            >
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "#ebd36b" }}
              >
                6. Cookies & Tracking
              </h2>
            </div>
            <div className="pl-0 md:pl-4 space-y-4 text-gray-300">
              <p>
                dots&decimals infotech uses cookies and similar tracking
                technologies to track activity on our service and hold certain
                information.
              </p>
              <p>
                Cookies are files with a small amount of data which may include
                an anonymous unique identifier. Cookies are sent to your browser
                from a website and stored on your device. Tracking technologies
                also used are beacons, tags, and scripts to collect and track
                information and to improve and analyze our service.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to
                indicate when a cookie is being sent. However, if you do not
                accept cookies, you may not be able to use some portions of our
                service.
              </p>
              <h3
                className="text-lg font-semibold mt-4"
                style={{ color: "#d6ae25" }}
              >
                6.1. Types of Cookies We Use
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Essential Cookies:</span>{" "}
                  Required for the operation of our website. They enable basic
                  functions like page navigation and access to secure areas of
                  the website.
                </li>
                <li>
                  <span className="font-medium">
                    Analytical/Performance Cookies:
                  </span>{" "}
                  Allow us to recognize and count the number of visitors and see
                  how visitors move around our website. This helps us improve
                  the way our website works.
                </li>
                <li>
                  <span className="font-medium">Functionality Cookies:</span>{" "}
                  Used to recognize you when you return to our website. This
                  enables us to personalize our content for you and remember
                  your preferences.
                </li>
                <li>
                  <span className="font-medium">Targeting Cookies:</span> Record
                  your visit to our website, the pages you have visited, and the
                  links you have followed. We may use this information to make
                  our website and the advertising displayed on it more relevant
                  to your interests.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7: Your Rights */}
          <section id="rights" className="scroll-mt-16">
            <div
              className="mb-4 pb-2 border-b border-opacity-20"
              style={{ borderColor: "#d6ae25" }}
            >
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "#ebd36b" }}
              >
                7. Your Rights
              </h2>
            </div>
            <div className="pl-0 md:pl-4 space-y-4 text-gray-300">
              <p>
                dots&decimals infotech aims to take reasonable steps to allow
                you to correct, amend, delete, or limit the use of your personal
                data.
              </p>
              <p>
                Depending on your location, you may have certain rights
                regarding your personal data:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Right to Access:</span> You have
                  the right to request copies of your personal data that we
                  hold.
                </li>
                <li>
                  <span className="font-medium">Right to Rectification:</span>{" "}
                  You have the right to request that we correct any information
                  you believe is inaccurate or complete information you believe
                  is incomplete.
                </li>
                <li>
                  <span className="font-medium">Right to Erasure:</span> You
                  have the right to request that we erase your personal data,
                  under certain conditions.
                </li>
                <li>
                  <span className="font-medium">
                    Right to Restrict Processing:
                  </span>{" "}
                  You have the right to request that we restrict the processing
                  of your personal data, under certain conditions.
                </li>
                <li>
                  <span className="font-medium">
                    Right to Object to Processing:
                  </span>{" "}
                  You have the right to object to our processing of your
                  personal data, under certain conditions.
                </li>
                <li>
                  <span className="font-medium">
                    Right to Data Portability:
                  </span>{" "}
                  You have the right to request that we transfer the data we
                  have collected to another organization, or directly to you,
                  under certain conditions.
                </li>
              </ul>
              <p className="mt-4">
                If you wish to exercise any of these rights, please contact us
                using the information provided in the Contact section. We may
                ask you to verify your identity before responding to such
                requests to ensure your privacy is protected.
              </p>
            </div>
          </section>

          {/* Section 8: Contact Us */}
          <section id="contact" className="scroll-mt-16">
            <div
              className="mb-4 pb-2 border-b border-opacity-20"
              style={{ borderColor: "#d6ae25" }}
            >
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "#ebd36b" }}
              >
                8. Contact Us
              </h2>
            </div>
            <div className="pl-0 md:pl-4 space-y-4">
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy or wish to
                exercise any of your rights regarding your personal data, please
                contact dots&decimals infotech:
              </p>
              <div className="mt-6 p-6 rounded-lg bg-opacity-10 bg-gray-500">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3
                      className="text-lg font-semibold mb-3"
                      style={{ color: "#d6ae25" }}
                    >
                      Contact Information
                    </h3>
                    <p className="text-gray-300 mb-2">
                      Email:{" "}
                      <span style={{ color: "#f2ad18" }}>
                        {companyDetails.email}
                      </span>
                    </p>
                    <p className="text-gray-300 mb-2">
                      Phone:{" "}
                      <span style={{ color: "#f2ad18" }}>
                        {companyDetails.phone}
                      </span>
                    </p>
                    <p className="text-gray-300">
                      Website:{" "}
                      <Link
                        to="https://www.dotsndecimalsinfotech.com/"
                        className="underline"
                        style={{ color: "#f2ad18" }}
                      >
                        www.dotsndecimalsinfotech.com
                      </Link>
                    </p>
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold mb-3"
                      style={{ color: "#d6ae25" }}
                    >
                      Mailing Address
                    </h3>
                    <address className="not-italic text-gray-300 leading-relaxed">
                      {companyDetails.address}
                    </address>
                  </div>
                </div>
                {/* <div className="mt-8 text-center">
                  <button
                    className="px-8 py-3 rounded-md font-medium transition duration-200 hover:opacity-90"
                    style={{ backgroundColor: "#d6ae25", color: "black" }}
                  >
                    Submit a Privacy Request
                  </button>
                </div> */}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer
            className="mt-16 pt-6 border-t border-opacity-20 text-center"
            style={{ borderColor: "#d6ae25" }}
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} dots&decimals infotech. All rights
              reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
