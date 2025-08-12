"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getAllCooperativesFn } from "@/utils/ApiFactory/join";
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

// Sample data for popular loan communities
const communities: Community[] = [
  {
    id: "home-loans",
    orgId: "681e1eeb36980a7eb0d1e267",
    name: "Retani Women",
    members: 6426266,
    icon: Logo1,
  },
  {
    id: "car-loans",
    orgId: "681e1eeb36980a7eb0d1e267",
    name: "Assemblies of Mercy",
    members: 5554546,
    icon: Logo2,
  },
  {
    id: "business-loans",
    orgId: "681e1eeb36980a7eb0d1e267",
    name: "Ashake Party",
    members: 5537055,
    icon: Logo3,
  },
  {
    id: "personal-loans",
    orgId: "681e1eeb36980a7eb0d1e267",
    name: "Police Ogba",
    members: 6223403,
    icon: Logo4,
  },
  {
    id: "student-loans",
    orgId: "681e1eeb36980a7eb0d1e267",
    name: "Ashiverb Guards",
    members: 712450,
    icon: Logo5,
  },
];

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
  } = useQuery({
    queryKey: ["get-all-cooperatives", 1],
    queryFn: () => getAllCooperativesFn(page, limit),
    select: (data) => {
      return data;
    },
  });

  const { data } = coopData || {};

  const allCooperative: CooperativeUI[] = Array.isArray(data)
    ? data.map(({ _id, name, email, address, verified }: AllCommunity, idx) => ({
        cooperativeId: _id,
        cooperativeName: name,
        cooperativeEmail: email,
        cooperativeAddress: address,
        verified: verified,
        emoji: dummyLogos[idx] || "🫠",
        members: 43000,
      }))
    : [];
  console.log("From Popular Communities: ", { allCooperative });

  return (
    // <div ref={sidebarRef} className="bg-green-200 rounded-lg shadow-sm p-4" style={sidebarStyle}>
    <div className="rounded-lg bg-green-100 p-4">
      <h3 className="text-black font-bold text-lg mb-4">POPULAR COOPERAATIVES</h3>

      <div className="space-y-4">
        {isLoading ? (
          <div className="flex flex-col justify-center items-center h-50px">
            <FadeLoader color="green" height={7} radius={3} speedMultiplier={2} width={3} />
            <p className="mt-4 text-lg font-semibold text-gray-700 animate-pulse">
              <em>Please wait while we fetch your data...</em>
            </p>
          </div>
        ) : (
          allCooperative.map((cooperative, idx) => (
            <Link
              href={`/${cooperative.cooperativeId}`}
              key={idx}
              className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md transition-colors"
            >
              <div className="relative w-10 h-10 overflow-hidden rounded-full">
                <Image
                  src={cooperative.emoji || "/placeholder.svg"}
                  alt={cooperative.cooperativeName}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{cooperative.cooperativeName}</p>
                <p className="text-sm text-gray-500">{formatNumber(cooperative.members)} members</p>
              </div>
            </Link>
          ))
        )}
      </div>

      <div className="mt-4 pt-2 border-t border-gray-200">
        <Link href="/pages/AllCopearatives" className="text-green-600 hover:text-green-700 font-medium text-sm">
          See more
        </Link>
      </div>
    </div>
  );
}
