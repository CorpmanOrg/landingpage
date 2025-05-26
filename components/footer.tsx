import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-lime-400 to-green-600 pt-12 pb-8 mt-[50px]">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: About the company */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">About the company</h3>
            <p className="text-black max-w-xs">
              "We believe in your dreams. Our financial solutions are designed to fuel your aspirations and help you
              achieve more."
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-green-700 hover:text-green-900 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-green-700 hover:text-green-800 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </Link>
              <Link href="#" className="text-green-700 hover:text-green-800 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-green-700 hover:text-green-800 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Products</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-black hover:text-green-700 transition-colors">
                CSR Activities
              </Link>
              <Link href="#" className="text-black hover:text-green-700 transition-colors">
                Green Banking
              </Link>
              <Link href="#" className="text-black hover:text-green-700 transition-colors">
                News
              </Link>
              <Link href="#" className="text-black hover:text-green-700 transition-colors">
                Ongoing Campaign
              </Link>
              <Link href="#" className="text-black hover:text-green-700 transition-colors">
                Updates
              </Link>
            </nav>
          </div>

          {/* Column 3: Get Started */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Get Started</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-black hover:text-green-700 transition-colors">
                Career
              </Link>
              <Link href="#" className="text-black hover:text-green-700 transition-colors">
                Contact Us
              </Link>
              <Link href="#" className="text-black hover:text-green-700 transition-colors">
                Government Securities
              </Link>
              <Link href="#" className="text-black hover:text-green-700 transition-colors">
                Examples
              </Link>
              <Link href="#" className="text-black hover:text-green-700 transition-colors">
                NIS
              </Link>
            </nav>
          </div>

          {/* Column 4: About */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">About</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-black hover:text-green-700 transition-colors">
                IPDC at a Glance
              </Link>
              <Link href="#" className="text-black hover:text-green-700 transition-colors">
                Mission & Values
              </Link>
              <Link href="#" className="text-black hover:text-green-700 transition-colors">
                Corporate Governance
              </Link>
              <Link href="#" className="text-black hover:text-green-700 transition-colors">
                Shareholders
              </Link>
              <Link href="#" className="text-black hover:text-green-700 transition-colors">
                Investor Relations
              </Link>
            </nav>
          </div>
        </div>

        {/* Contact Phone */}
        <div className="flex justify-end mt-8">
          <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-green-600 mr-2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span className="text-gray-800 font-semibold">16519</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-200 mt-8 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} CorpMan Financial Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
