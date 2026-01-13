import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-space-dark border-t border-space-accent/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-space-light">
              Orbit Marketing, Inc.
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Launching Brands into their Next Phase
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-space-light">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span className="font-medium">Location:</span> Greenville, South Carolina
              </li>
              <li>
                <span className="font-medium">Phone:</span> Placeholder
              </li>
              <li>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:placeholder@placeholder.com"
                  className="text-space-accent hover:underline"
                >
                  placeholder@placeholder.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-space-light">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-space-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-space-accent transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance Disclaimer */}
        <div className="border-t border-space-accent/20 pt-8 mt-8">
          <p className="text-xs text-gray-500 text-center leading-relaxed max-w-3xl mx-auto">
            <strong>Disclaimer:</strong> Orbit Marketing, Inc. is a hiring partner and recruitment facilitator. 
            Submission of an application does not guarantee employment. All positions are subject to availability 
            and qualification requirements. We do not make any employment guarantees or promises regarding 
            compensation, benefits, or job placement. This website is for informational purposes only.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Orbit Marketing, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}