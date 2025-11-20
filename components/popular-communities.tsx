"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useQuery } from "@tanstack/react-query";
// import { getAllCooperativesFn } from "@/utils/ApiFactory/join"; // ✅ Commented out API call
import FadeLoader from "react-spinners/FadeLoader";
import Link from "next/link";
import Logo1 from "../components/assets/img/logo-1.png";
import Logo2 from "../components/assets/img/Logo-2.png";
import Logo3 from "../components/assets/img/Logo-3.jpeg";
import Logo4 from "../components/assets/img/Logo-4.png";
import Logo5 from "../components/assets/img/Logo-5.jpeg";

// Define the cooperative type
interface Community {
  id: string;
  orgId: string;
  name: string;
  members: number;
  icon: string | StaticImageData;
}

interface AllCommunity {
  _id: string;
  name: string;
  email: string;
  address: string;
  verified: boolean;
  memberCount: number;
}

type CooperativeUI = {
  cooperativeId: string;
  cooperativeName: string;
  cooperativeEmail: string;
  cooperativeAddress: string;
  verified: boolean;
  emoji: string | StaticImageData;
  members: number;
};

const dummyLogos = [Logo1, Logo2, Logo3, Logo4, Logo5];

// ✅ DUMMY DATA - No API call needed
const DUMMY_COOPERATIVES_DATA = [
  {
    _id: "68ecd5c0ae1f79bb1b92bc45",
    name: "Tech Solutions Inc",
    email: "contact@techsolutions.com",
    address: "123 Business Plaza, Victoria Island, Lagos",
    verified: false,
    memberCount: 2,
  },
  {
    _id: "68ed8f0fc8306a07ba4bb660",
    name: "Forever Chains",
    email: "forever@chains.com",
    address: "123 Saalvilla Plaza, Victoria Island, UK",
    verified: true,
    memberCount: 6,
  },
  {
    _id: "68ed91adc8306a07ba4bb674",
    name: "Moses Foundation",
    email: "moses@founders.com",
    address: "123 Splendor Plaza, Victoria Island, UK",
    verified: false,
    memberCount: 7,
  },
  // {
  //   _id: "68ed92adc8306a07ba4bb675",
  //   name: "Green Energy Cooperative",
  //   email: "info@greenenergy.coop",
  //   address: "456 Innovation Hub, Lekki Phase 1, Lagos",
  //   verified: true,
  //   memberCount: 15,
  // },
  // {
  //   _id: "68ed93adc8306a07ba4bb676",
  //   name: "Farmers United Alliance",
  //   email: "support@farmersunited.com",
  //   address: "789 Agricultural Center, Ibadan, Oyo State",
  //   verified: true,
  //   memberCount: 23,
  // },
];

// ✅ Mock function that returns dummy data after 1 second
const getDummyCooperatives = async (page: number, limit: number) => {
  // Simulate 1 second loading
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    data: DUMMY_COOPERATIVES_DATA,
    pagination: {
      currentPage: page,
      totalPages: 1,
      totalItems: DUMMY_COOPERATIVES_DATA.length,
      itemsPerPage: limit,
    },
  };
};

// Format number with commas
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export function PopularCommunities() {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);

  const {
    data: coopData,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["get-all-cooperatives", page, limit],
    // ✅ Using dummy function instead of real API
    queryFn: () => getDummyCooperatives(page, limit),
    // queryFn: () => getAllCooperativesFn(page, limit), // ✅ Real API call (commented out)
    retry: 1,
    retryDelay: 1000,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    refetchOnMount: false,
    select: (data) => {
      return data;
    },
  });

  const { data } = coopData || {};

  const allCooperative: CooperativeUI[] = Array.isArray(data)
    ? data.map(({ _id, name, email, address, verified, memberCount }: AllCommunity, idx) => ({
        cooperativeId: _id,
        cooperativeName: name,
        cooperativeEmail: email,
        cooperativeAddress: address,
        verified: verified,
        emoji: dummyLogos[idx % dummyLogos.length] || dummyLogos[0], // ✅ Cycle through logos
        members: memberCount,
      }))
    : [];

  console.log("From Popular Communities (DUMMY DATA): ", { allCooperative, isLoading, isError, error });

  return (
    <div className="rounded-lg bg-green-100 p-4">
      <h3 className="text-black font-bold text-lg mb-4">
        POPULAR COOPERATIVES
        {/* <span className="ml-2 text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">New DEMO MODE</span> */}
      </h3>

      <div className="space-y-4">
        {isLoading ? (
          <div className="flex flex-col justify-center items-center h-[200px]">
            <FadeLoader color="green" height={7} radius={3} speedMultiplier={2} width={3} />
            <p className="mt-4 text-lg font-semibold text-gray-700 animate-pulse">
              <em>Loading cooperatives...</em>
            </p>
          </div>
        ) : isError ? (
          // ✅ Enhanced Error State with Retry
          <div className="flex flex-col justify-center items-center h-[200px] text-center px-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-gray-800 font-semibold mb-2">Failed to load cooperatives</p>
            <p className="text-sm text-gray-600 mb-4">
              {error instanceof Error ? error.message : "Please check your connection and try again"}
            </p>
            <button
              onClick={() => refetch()}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
            >
              Try Again
            </button>
          </div>
        ) : allCooperative.length === 0 ? (
          // ✅ Empty State
          <div className="flex flex-col justify-center items-center h-[200px] text-center px-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <p className="text-gray-800 font-semibold mb-2">No cooperatives found</p>
            <p className="text-sm text-gray-600">Check back later for new cooperatives</p>
          </div>
        ) : (
          // ✅ Success State - Show Cooperatives
          allCooperative.map((cooperative, idx) => (
            <Link
              href={`/${cooperative.cooperativeId}`}
              key={cooperative.cooperativeId}
              className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md transition-colors"
            >
              <div className="relative w-10 h-10 overflow-hidden rounded-full flex-shrink-0">
                <Image
                  src={cooperative.emoji || "/placeholder.svg"}
                  alt={cooperative.cooperativeName}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-800 truncate">
                  {cooperative.cooperativeName}
                  {cooperative.verified && (
                    <span className="ml-1 text-green-600" title="Verified">
                      ✓
                    </span>
                  )}
                </p>
                <p className="text-sm text-gray-500">{formatNumber(cooperative.members)} members</p>
              </div>
            </Link>
          ))
        )}
      </div>

      {!isLoading && !isError && allCooperative.length > 0 && (
        <div className="mt-4 pt-2 border-t border-gray-200">
          <Link
            href="/pages/AllCopearatives"
            className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-1 group"
          >
            See more
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
