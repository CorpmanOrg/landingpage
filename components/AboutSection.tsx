import React from "react";
import { Calendar, MapPin, DollarSign } from "lucide-react";
import { AvatarGroup } from "./avatar-group";

interface AboutSectionProps {
  description: string;
  dateCreated: string;
  location: string;
  totalContribution: number;
  totalMembers: number;
  freeSpaces: number;
  memberCount: number;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  description,
  dateCreated,
  location,
  totalContribution,
  totalMembers,
  freeSpaces,
  memberCount,
}) => {
  // Sample users for avatar display
  const sampleUsers = [
    {
      id: "1",
      name: "Sarah Johnson",
      imageUrl: "/img/aiony-haust-3TLl_97HNJo-unsplash (1).jpg",
    },
    {
      id: "2",
      name: "Michael Chen",
      imageUrl: "/placeholder-user.jpg",
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      imageUrl: "/img/diego-hernandez-MSepzbKFz10-unsplash.jpg",
    },
    {
      id: "4",
      name: "David Wilson",
      imageUrl: "/placeholder-user.jpg",
    },
    {
      id: "5",
      name: "Lisa Thompson",
      imageUrl: "/img/aiony-haust-3TLl_97HNJo-unsplash (1).jpg",
    },
  ];

  return (
    <section className="mx-auto w-4/5">
      <div className="py-12 mt-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* About Section */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-green-500 to-green-700 rounded-full"></span>
                About This Cooperative
              </h2>

              <div className="prose prose-gray max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <Calendar className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Founded</p>
                    <p className="font-semibold text-gray-900">{new Date(dateCreated).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold text-gray-900">{location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Total Funds</p>
                    <p className="font-semibold text-gray-900">₦{totalContribution.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            {/* Members Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <div className="text-center">
                <h3 className="text-xl font-bold text-green-800 mb-4">Active Members</h3>

                <div className="flex justify-center items-center mb-4">
                  <AvatarGroup users={sampleUsers} size="md" maxVisible={4} />
                </div>

                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="text-3xl font-bold text-green-700 mb-1">{memberCount}</div>
                  <div className="text-sm text-green-600 font-medium mb-1">Total Members</div>
                  <div className="text-xs text-gray-600">{freeSpaces} spots available</div>
                </div>
              </div>
            </div>

            {/* Join CTA Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Ready to Join?</h3>
                <p className="text-gray-600">Start your journey towards financial growth with our community.</p>
                <button
                  onClick={() => {
                    const formElement = document.getElementById("join-form");
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Join This Cooperative
                </button>
                <div className="flex justify-center gap-4 text-xs text-gray-500">
                  <span>✓ No hidden fees</span>
                  <span>✓ Secure platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
