"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const router = useRouter()

  const handleGetStarted = () => {
    router.push("/auth")
  }

  return (
    <header className="w-full relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-green-600 font-montserrat">CorpMan</span>
            </Link>
            
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-gray-900 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">
              Services
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">
              Portfolio
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">
              Blog
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            {/* <button className="px-4 py-2 bg-white text-green-500 font-bold shadow-lg rounded-md hover:scale-110 transition-transform duration-300"
            onClick={handleGetStarted}
            >
              Get Started
            </button> */}
          </div>
          <button
            className="flex items-center justify-center rounded-md p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium text-gray-900 hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">
                About
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">
                Services
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">
                Portfolio
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">
                Blog
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-500 hover:text-green-600 transition-colors">
                Contact
              </Link>
              <button className="mt-2 px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors w-full">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
