import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Orbit Marketing, Inc.",
  description: "Terms of Service for Orbit Marketing, Inc. recruitment website",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-space-light">
          Terms of Service
        </h1>
        <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website operated by Orbit Marketing, Inc. ("we," "our," or "us"), 
              you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, 
              please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              2. Use of Website
            </h2>
            <p>You agree to use this website only for lawful purposes and in accordance with these Terms. 
            You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submit false, inaccurate, or misleading information</li>
              <li>Impersonate any person or entity</li>
              <li>Upload malicious code or viruses</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the website's operation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              3. Application Process
            </h2>
            <p>
              By submitting an application through this website, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All information provided is accurate and truthful</li>
              <li>Submission of an application does not guarantee employment</li>
              <li>We are a hiring partner and recruitment facilitator</li>
              <li>Positions are subject to availability and qualification requirements</li>
              <li>We reserve the right to reject any application for any reason</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              4. No Employment Guarantees
            </h2>
            <p>
              <strong className="text-space-light">IMPORTANT:</strong> Orbit Marketing, Inc. does not 
              guarantee employment, job placement, compensation, or benefits. This website is for 
              informational purposes only. We make no representations or warranties regarding:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Job availability</li>
              <li>Salary or compensation rates</li>
              <li>Employment terms or conditions</li>
              <li>Job placement success rates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              5. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the property 
              of Orbit Marketing, Inc. or its licensors and is protected by copyright and other intellectual 
              property laws. You may not reproduce, distribute, or create derivative works without our 
              written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              6. User Content
            </h2>
            <p>
              By submitting content (including applications, resumes, and other materials) through this 
              website, you grant us a non-exclusive, royalty-free license to use, reproduce, and distribute 
              such content for recruitment and business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              7. Disclaimer of Warranties
            </h2>
            <p>
              This website is provided "as is" and "as available" without warranties of any kind, either 
              express or implied. We do not warrant that the website will be uninterrupted, error-free, 
              or free from viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              8. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Orbit Marketing, Inc. shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages arising from your use of 
              this website or submission of applications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              9. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless Orbit Marketing, Inc. from any claims, damages, 
              losses, or expenses arising from your use of this website or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              10. Third-Party Services
            </h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible 
              for the content, privacy policies, or practices of these third parties. Your interactions 
              with third parties are solely between you and the third party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              11. Modifications to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective 
              immediately upon posting. Your continued use of the website after changes constitutes 
              acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              12. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of 
              South Carolina, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-space-light">
              13. Contact Information
            </h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:placeholder@placeholder.com"
                className="text-space-accent hover:underline"
              >
                placeholder@placeholder.com
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