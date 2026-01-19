import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Orbit Marketing, Inc.",
  description: "Privacy Policy for Orbit Marketing, Inc. recruitment website",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-space-light">
          Privacy Policy
        </h1>
        <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              1. Introduction
            </h2>
            <p>
              Orbit Marketing, Inc. ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our recruitment website and submit an application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              2. Information We Collect
            </h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>City and state</li>
              <li>LinkedIn profile URL (optional)</li>
              <li>Resume and other documents (optional)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and review your job application</li>
              <li>Communicate with you about your application</li>
              <li>Match you with suitable employment opportunities</li>
              <li>Improve our recruitment processes</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              4. Information Sharing and Disclosure
            </h2>
            <p>
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Our hiring partners and client companies for employment consideration</li>
              <li>Service providers who assist us in operating our website and conducting our business</li>
              <li>Legal authorities when required by law or to protect our rights</li>
            </ul>
            <p className="mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information. However, no method of transmission over the Internet or electronic storage 
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              6. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of certain communications</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:contact@orbitmarketinginc.org"
                className="text-space-accent hover:underline"
              >
                contact@orbitmarketinginc.org
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              7. Cookies and Tracking Technologies
            </h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your experience. 
              You can set your browser to refuse cookies, but this may limit some functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              8. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the 
              privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              9. Children's Privacy
            </h2>
            <p>
              Our website is not intended for individuals under the age of 18. We do not knowingly 
              collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              10. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              11. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@orbitmarketinginc.org"
                className="text-space-accent hover:underline"
              >
                contact@orbitmarketinginc.org
              </a>
              <br />
              <strong>Location:</strong> Greenville, South Carolina
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="text-space-accent hover:underline inline-flex items-center"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}