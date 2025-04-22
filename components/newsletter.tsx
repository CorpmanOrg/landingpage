"use client"

import type React from "react"

import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing email:", email)
    setEmail("")
    // Here you would typically send this to your API
  }

  return (
    <section className="w-full py-12 md:py-16 mt-8 bg-white rounded-lg shadow-sm">
      <div className="flex flex-col items-center justify-center space-y-4 text-center px-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Newsletter</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Subscribe to our newsletter to get the latest updates and news.
          </p>
        </div>
        <div className="w-full max-w-md space-y-2">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
