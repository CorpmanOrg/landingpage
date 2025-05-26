import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeatureCard } from "@/components/feature-card";
import { ServiceCard } from "@/components/service-card";
import { StatCard } from "@/components/stat-card";
import { Newsletter } from "@/components/newsletter";
import { PopularCommunities } from "@/components/popular-communities";
import HeroImage from "../components/assets/img/Corpman-landing-page-graph-3.png";
import FifthImage from "../components/assets/img/diego-hernandez-MSepzbKFz10-unsplash.jpg";
import FirstImage from "../components/assets/img/aiony-haust-3TLl_97HNJo-unsplash (1).jpg";

export default function Home() {
  const repeatedImages = Array(30).fill(FirstImage);

  return (
    <main className="min-h-screen flex flex-col bg-[#F3FFF460] relative overflow-hidden">
      {/* Decorative Gradient Blob - Updated direction */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-bl-[100%] bg-gradient-to-r from-lime-400 to-green-600 z-0"></div>

      <Navbar />

      {/* Hero Section - Simplified */}
      <section className="w-full py-8 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6 z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900 font-montserrat">
                Chase Your Dream with us
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                We provide tailored financial solutions to help you achieve your goals, whether it's buying a home, a
                car, or growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors">
                  My Cooperative
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                  Loan Calculator
                </button>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
              <Image
                src={HeroImage}
                alt="dashboard-image"
                fill
                style={{ objectFit: "contain" }}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Two-column layout with main content and sidebar */}
      <section className="bg-green-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* <div className="flex flex-col lg:flex-row gap-8 relative"> */}
          <div className="flex flex-row items-start justify-between relative">
            {/* Main content column */}
            {/* <div className="w-full lg:w-[calc(100%-300px-2rem)]">
            <section className="w-full py-12 md:py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Creating Extraordinary Customer Experience</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <FeatureCard
                  icon="sparkles"
                  title="Creative Solutions"
                  description="Innovative approaches to solve complex business challenges"
                  iconColor="text-green-700"
                />
                <FeatureCard
                  icon="chart-bar"
                  title="Data Analytics"
                  description="Insights-driven strategies to optimize your business performance"
                  iconColor="text-green-600"
                />
                <FeatureCard
                  icon="users"
                  title="Customer Focus"
                  description="Putting your customers at the center of everything we do"
                  iconColor="text-green-700"
                />
                <FeatureCard
                  icon="globe"
                  title="Global Reach"
                  description="Connecting your business to worldwide opportunities"
                  iconColor="text-green-600"
                />
                <FeatureCard
                  icon="light-bulb"
                  title="Innovation"
                  description="Cutting-edge solutions that keep you ahead of the competition"
                  iconColor="text-green-700"
                />
                <FeatureCard
                  icon="shield-check"
                  title="Reliable Security"
                  description="Protecting your business with advanced security measures"
                  iconColor="text-green-600"
                />
                <FeatureCard
                  icon="clock"
                  title="24/7 Support"
                  description="Round-the-clock assistance whenever you need it"
                  iconColor="text-green-700"
                />
                <FeatureCard
                  icon="currency-dollar"
                  title="Cost Effective"
                  description="Maximum value with optimized resource allocation"
                  iconColor="text-green-600"
                />
              </div>
            </section>

            <section className="w-full py-12 bg-white rounded-lg shadow-sm">
              <div className="text-center mb-8">
                <h3 className="text-xl font-medium text-gray-500">TRUSTED PARTNERS</h3>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                <div className="w-24 h-12 relative grayscale hover:grayscale-0 transition-all">
                  <Image src="/placeholder.svg?height=48&width=96" alt="Partner 1" fill className="object-contain" />
                </div>
                <div className="w-24 h-12 relative grayscale hover:grayscale-0 transition-all">
                  <Image src="/placeholder.svg?height=48&width=96" alt="Partner 2" fill className="object-contain" />
                </div>
                <div className="w-24 h-12 relative grayscale hover:grayscale-0 transition-all">
                  <Image src="/placeholder.svg?height=48&width=96" alt="Partner 3" fill className="object-contain" />
                </div>
                <div className="w-24 h-12 relative grayscale hover:grayscale-0 transition-all">
                  <Image src="/placeholder.svg?height=48&width=96" alt="Partner 4" fill className="object-contain" />
                </div>
              </div>
            </section>

            <section className="w-full py-12 md:py-16 mt-8 bg-black text-white rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
                <div className="relative h-[400px] w-full">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Plant sprouting from soil"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <h2 className="text-3xl md:text-4xl font-bold">PICK AT A GLANCE</h2>
                  <p className="text-lg text-gray-300">
                    We believe in sustainable growth that nurtures both your business and the environment. Our approach
                    combines innovation with responsibility, ensuring that your success contributes to a better world
                    for future generations.
                  </p>
                  <p className="text-lg text-gray-300">
                    With our expertise and dedication, we help you plant the seeds of success and watch them grow into
                    thriving enterprises that make a positive impact.
                  </p>
                </div>
              </div>
            </section>

            <section className="w-full py-12 md:py-16 mt-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Our Services</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ServiceCard
                  image="/placeholder.svg?height=200&width=300"
                  title="Digital Marketing"
                  category="Marketing"
                />
                <ServiceCard image="/placeholder.svg?height=200&width=300" title="Web Development" category="Tech" />
                <ServiceCard image="/placeholder.svg?height=200&width=300" title="Brand Strategy" category="Branding" />
                <ServiceCard image="/placeholder.svg?height=200&width=300" title="Content Creation" category="Media" />
              </div>
            </section>

            <section className="w-full py-12 md:py-16 mt-8 bg-white rounded-lg shadow-sm">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Our best results for the year</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard value="97.8" unit="%" description="Client satisfaction rate" color="text-green-600" />
                <StatCard value="0.99" unit="%" description="Error rate reduction" color="text-green-700" />
                <StatCard value="388.7" unit="%" description="ROI for our clients" color="text-green-600" />
                <StatCard value="50.4" unit="k+" description="Projects completed" color="text-green-700" />
              </div>
            </section>

            <Newsletter />
          </div> */}

            {/* <div className="bg-green-100 flex flex-row gap-x-[20px] relative"> */}
            <div>
              <p className="text-blue-500">Second Image</p>
              {repeatedImages.map((img, index) => (
                <div key={index} className="mb-2">
                  <Image
                    src={img}
                    alt={`user-${index}`}
                    // fill
                    style={{ objectFit: "contain" }}
                    className="rounded-full h-[50px] w-[50px] border-[3px] border-purple-500"
                  />
                </div>
              ))}
            </div>
            <div className="sticky top-0 self-start">
              <p className="text-blue-500 mb-2">First image</p>
              <Image
                src={FifthImage}
                alt="user image"
                className="rounded-full h-[50px] w-[50px] border-[3px] border-purple-500"
              />
            </div>
            {/* </div> */}

            {/* Sidebar column - updated with better sticky behavior */}
            {/* <div className="w-full lg:w-[300px] mt-[40px] sticky top-0 self-start">
            <div className="lg:sticky lg:top-8" style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}>
              <PopularCommunities />
            </div>
          </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
