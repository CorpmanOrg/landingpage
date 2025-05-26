"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image, {StaticImageData} from "next/image"
import Link from "next/link"
import Logo1 from "../components/assets/img/logo-1.png"
import Logo2 from "../components/assets/img/Logo-2.png"
import Logo3 from "../components/assets/img/Logo-3.jpeg"
import Logo4 from "../components/assets/img/Logo-4.png"
import Logo5 from "../components/assets/img/Logo-5.jpeg"

// Define the community type
interface Community {
  id: string
  name: string
  members: number
  icon: string | StaticImageData
}

// Sample data for popular loan communities
const communities: Community[] = [
  {
    id: "home-loans",
    name: "Retani Women",
    members: 6426266,
    icon: Logo1,
  },
  {
    id: "car-loans",
    name: "Assemblies of Mercy",
    members: 5554546,
    icon: Logo2,
  },
  {
    id: "business-loans",
    name: "Ashake Party",
    members: 5537055,
    icon: Logo3,
  },
  {
    id: "personal-loans",
    name: "Police Ogba",
    members: 6223403,
    icon: Logo4,
  },
  {
    id: "student-loans",
    name: "Ashiverb Guards",
    members: 712450,
    icon: Logo5,
  },
]

// Format number with commas
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export function PopularCommunities() {
  // const sidebarRef = useRef<HTMLDivElement>(null)
  // const [sidebarStyle, setSidebarStyle] = useState<React.CSSProperties>({})

  // useEffect(() => {
  //   // Function to handle scroll and adjust sidebar position
  //   const handleScroll = () => {
  //     if (!sidebarRef.current) return

  //     const footer = document.querySelector("footer")
  //     if (!footer) return

  //     const footerTop = footer.getBoundingClientRect().top
  //     const windowHeight = window.innerHeight
  //     const sidebarHeight = sidebarRef.current.offsetHeight

  //     // If footer is in view, adjust the sidebar position to stop at footer
  //     if (footerTop < windowHeight) {
  //       const newTop = footerTop - sidebarHeight - 20 // 20px buffer
  //       setSidebarStyle({ position: "fixed", top: newTop > 0 ? newTop : 0 })
  //     } else {
  //       // Otherwise, keep it sticky at the top with some padding
  //       setSidebarStyle({ position: "sticky", top: "2rem" })
  //     }
  //   }

  //   // Add scroll event listener
  //   window.addEventListener("scroll", handleScroll)
  //   // Initial check
  //   handleScroll()

  //   // Clean up
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [])

  return (
    // <div ref={sidebarRef} className="bg-green-200 rounded-lg shadow-sm p-4" style={sidebarStyle}>
    <div className="rounded-lg bg-green-100 p-4">
      <h3 className="text-black font-bold text-lg mb-4">POPULAR COOPERAATIVES</h3>

      <div className="space-y-4">
        {communities.map((community) => (
          <Link
            href={`#${community.id}`}
            key={community.id}
            className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md transition-colors"
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-full">
              <Image src={community.icon || "/placeholder.svg"} alt={community.name} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">{community.name}</p>
              <p className="text-sm text-gray-500">{formatNumber(community.members)} members</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-4 pt-2 border-t border-gray-200">
        <Link href="/pages/AllCopearatives" className="text-green-600 hover:text-green-700 font-medium text-sm">
          See more
        </Link>
      </div>
    </div>
  )
}
