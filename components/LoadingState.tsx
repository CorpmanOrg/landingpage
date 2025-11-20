import React from "react";
import { BackButton } from "./BackButton";

export const LoadingState = () => {
  return (
    <div className="min-h-screen bg-[#F3FFF460] relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-green-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-green-200 rounded-full animate-ping"></div>
        <div className="absolute top-60 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
      </div>

      {/* Loading Hero Section */}
      <section className="mx-auto w-4/5 relative z-10">
        <div className="mt-8 relative h-[250px] sm:h-[225px] md:h-[250px] rounded-t-[2rem] overflow-hidden bg-gradient-to-br from-green-100 to-green-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-green-500/30 to-green-700/20 flex flex-col justify-center items-center px-4 py-6">
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>

            {/* Back Button - Loading State */}
            <div className="absolute top-4 left-4 z-20">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg animate-pulse">
                <div className="w-4 h-4 bg-white/30 rounded"></div>
                <div className="w-8 h-4 bg-white/30 rounded"></div>
              </div>
            </div>

            <div className="text-center space-y-4">
              {/* Loading Title */}
              <div className="flex justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white/30 rounded-full animate-bounce"></div>
                <div
                  className="w-8 h-8 bg-white/30 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-8 h-8 bg-white/30 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>

              <div className="bg-white/30 rounded-xl h-12 w-80 mx-auto animate-pulse"></div>
              <div className="bg-white/20 rounded-lg h-6 w-60 mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading Logo */}
        <div className="relative w-4/5 mx-auto lg:mb-8">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 md:left-10 md:transform-none md:-top-18 lg:w-32 lg:h-32 lg:-top-16 rounded-full bg-gradient-to-br from-green-200 to-green-300 animate-pulse shadow-xl border-4 border-white z-10">
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-green-300 to-green-400 animate-spin-slow"></div>
          </div>
        </div>
      </section>

      {/* Loading Content Sections */}
      <section className="mx-auto w-4/5 relative z-10">
        <div className="py-12 mt-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Loading About Section */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-50/50 to-transparent animate-shimmer"></div>

                <div className="bg-green-100 rounded-lg h-8 w-64 mb-4 animate-pulse"></div>
                <div className="space-y-3 mb-6">
                  <div className="bg-gray-200 rounded h-4 w-full animate-pulse"></div>
                  <div className="bg-gray-200 rounded h-4 w-5/6 animate-pulse"></div>
                  <div className="bg-gray-200 rounded h-4 w-4/5 animate-pulse"></div>
                  <div className="bg-gray-200 rounded h-4 w-3/4 animate-pulse"></div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="text-center">
                      <div className="bg-green-100 rounded-lg h-8 w-16 mx-auto mb-2 animate-pulse"></div>
                      <div className="bg-gray-200 rounded h-3 w-20 mx-auto animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Loading Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              {/* Loading Members Card */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>

                <div className="text-center">
                  <div className="bg-green-200 rounded-lg h-6 w-48 mx-auto mb-4 animate-pulse"></div>

                  <div className="flex justify-center items-center mb-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 bg-green-200 rounded-full animate-pulse border-2 border-white"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-300 rounded-lg h-10 w-16 mx-auto mb-2 animate-pulse"></div>
                  <div className="bg-green-200 rounded h-4 w-24 mx-auto mb-1 animate-pulse"></div>
                  <div className="bg-gray-300 rounded h-3 w-40 mx-auto animate-pulse"></div>
                </div>
              </div>

              {/* Loading CTA Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-50/30 to-transparent animate-shimmer"></div>

                <div className="text-center space-y-4">
                  <div className="bg-gray-200 rounded-lg h-6 w-48 mx-auto animate-pulse"></div>
                  <div className="bg-gray-200 rounded h-4 w-56 mx-auto animate-pulse"></div>
                  <div className="bg-gradient-to-r from-green-200 to-green-300 rounded-lg h-12 w-full animate-pulse"></div>
                  <div className="flex justify-center gap-4">
                    <div className="bg-gray-200 rounded h-3 w-20 animate-pulse"></div>
                    <div className="bg-gray-200 rounded h-3 w-24 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loading Investment Packages */}
      <section className="mx-auto w-4/5 relative z-10">
        <div className="container mx-auto mt-8 py-8 md:py-16">
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="bg-gray-200 rounded-xl h-12 w-96 mx-auto mb-4 animate-pulse"></div>
              <div className="bg-gray-200 rounded-lg h-6 w-2/3 mx-auto animate-pulse"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden ${
                    i === 2 ? "scale-105 ring-2 ring-green-200" : ""
                  }`}
                >
                  {/* Loading Package Header */}
                  <div className="bg-gradient-to-r from-gray-200 to-gray-300 p-8 text-center relative animate-pulse">
                    <div className="bg-white/30 rounded-lg h-8 w-24 mx-auto mb-2"></div>
                    <div className="bg-white/30 rounded-lg h-12 w-20 mx-auto"></div>
                  </div>

                  {/* Loading Features */}
                  <div className="p-8">
                    <div className="space-y-4 mb-8">
                      {[1, 2, 3, 4].map((j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full animate-pulse mt-0.5"></div>
                          <div className="bg-gray-200 rounded h-4 flex-1 animate-pulse"></div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-200 rounded-xl h-12 w-full animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Loading Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-50/20 to-transparent animate-shimmer"></div>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 animate-pulse"></div>
              <div className="bg-gray-200 rounded-xl h-10 w-72 mx-auto mb-2 animate-pulse"></div>
              <div className="bg-gray-200 rounded-lg h-5 w-80 mx-auto animate-pulse"></div>
            </div>

            {/* Loading Form Sections */}
            {[1, 2, 3, 4].map((section) => (
              <div key={section} className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 bg-green-200 rounded-full animate-pulse"></div>
                  <div className="bg-gray-200 rounded-lg h-6 w-48 animate-pulse"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((field) => (
                    <div key={field} className="space-y-2">
                      <div className="bg-gray-200 rounded h-4 w-24 animate-pulse"></div>
                      <div className="bg-white rounded-xl h-12 w-full animate-pulse border border-gray-200"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-green-200 rounded-xl h-14 w-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Loading Status Text */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-green-200">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
            <div className="absolute inset-0 w-4 h-4 bg-green-600 rounded-full animate-pulse"></div>
          </div>
          <span className="text-green-700 font-medium">Loading cooperative details...</span>
        </div>
      </div>
    </div>
  );
};
