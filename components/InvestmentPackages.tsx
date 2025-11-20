import React from "react";
import { Check, Star } from "lucide-react";

interface Package {
  name: string;
  amount: number;
  duration: string;
  returns: string;
  features: string[];
  isPopular?: boolean;
  bgColor: string;
  textColor: string;
}

interface InvestmentPackagesProps {
  packages: Package[];
  onSelectPackage: (pkg: Package) => void;
}

export const InvestmentPackages: React.FC<InvestmentPackagesProps> = ({ packages, onSelectPackage }) => {
  return (
    <section className="mx-auto w-4/5">
      <div className="container mx-auto mt-8 py-8 md:py-16">
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Investment Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan that aligns with your financial goals and start building wealth with our
              community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  pkg.isPopular ? "scale-105 ring-2 ring-green-200" : ""
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Package Header */}
                <div className={`${pkg.bgColor} p-8 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className={`text-2xl font-bold ${pkg.textColor} mb-2`}>{pkg.name}</h3>
                    <div className={`text-4xl font-bold ${pkg.textColor} mb-2`}>₦{pkg.amount.toLocaleString()}</div>
                    <p className={`${pkg.textColor} opacity-90`}>
                      {pkg.duration} • {pkg.returns} returns
                    </p>
                  </div>
                </div>

                {/* Package Features */}
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 ${
                      pkg.isPopular
                        ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900 hover:shadow-md"
                    }`}
                  >
                    {pkg.isPopular ? "Choose This Plan" : "Select Package"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Have questions about our investment packages?</p>
            <button className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-200">
              Contact our team for personalized advice →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
