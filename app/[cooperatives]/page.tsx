"use client";

import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchSingleCooperativeFn, joinCoopFn } from "@/utils/ApiFactory/join";
import { LoadingState } from "@/components/LoadingState";
import { ErrorState } from "@/components/ErrorState";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { InvestmentPackages } from "@/components/InvestmentPackages";
import { JoinForm } from "@/components/JoinForm";
import Toastbar from "@/components/Toastbar";

interface Props {
  params: Promise<{ cooperatives: string }>;
}

// Investment packages data
const packages = [
  {
    name: "Starter",
    amount: 5000,
    duration: "6 months",
    returns: "12%",
    features: [
      "Low-risk investment option",
      "Monthly progress reports",
      "Basic member support",
      "Access to community forum",
    ],
    bgColor: "bg-gradient-to-br from-gray-100 to-gray-200",
    textColor: "text-gray-800",
  },
  {
    name: "Professional",
    amount: 15000,
    duration: "12 months",
    returns: "18%",
    features: [
      "Balanced risk and return",
      "Bi-weekly progress reports",
      "Priority member support",
      "Access to investment workshops",
      "Financial planning consultation",
    ],
    isPopular: true,
    bgColor: "bg-gradient-to-br from-green-500 to-green-600",
    textColor: "text-white",
  },
  {
    name: "Premium",
    amount: 50000,
    duration: "24 months",
    returns: "25%",
    features: [
      "Higher return potential",
      "Weekly progress reports",
      "Dedicated account manager",
      "Exclusive investment opportunities",
      "Personal financial advisor",
      "VIP member events",
    ],
    bgColor: "bg-gradient-to-br from-gray-700 to-gray-800",
    textColor: "text-white",
  },
];

export default function CooperativePage({ params }: Props) {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState<"success" | "error">("success");

  // Get cooperative ID from params
  const cooperativeId = React.use(params).cooperatives;

  // Fetch cooperative data
  const {
    data: cooperativeDetailData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["cooperative", cooperativeId],
    queryFn: () => fetchSingleCooperativeFn(cooperativeId),
    enabled: !!cooperativeId,
  });

  // Join cooperative mutation
  const joinMutation = useMutation({
    mutationFn: joinCoopFn,
    onSuccess: () => {
      setToastMessage("Application submitted successfully!");
      setToastSeverity("success");
      setShowToast(true);
    },
    onError: (error: any) => {
      setToastMessage(error?.message || "Failed to submit application");
      setToastSeverity("error");
      setShowToast(true);
    },
  });

  // Handle form submission
  const handleJoinSubmit = (values: any) => {
    const payload = {
      ...values,
      organizationId: cooperativeId,
      selectedPackage: selectedPackage?.name || "Starter",
    };
    joinMutation.mutate(payload);
  };

  // Handle package selection
  const handleSelectPackage = (pkg: any) => {
    setSelectedPackage(pkg);
    // Scroll to form
    const formElement = document.getElementById("join-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <ErrorState error={error} onRetry={refetch} />;
  }

  const organization = cooperativeDetailData?.organization;

  return (
    <div className="min-h-screen bg-[#F3FFF460]">
      {/* Hero Section */}
      <HeroSection
        name={organization?.name || "Cooperative"}
        description={organization?.description || "Join our thriving community"}
        logo={organization?.logo || "/placeholder-logo.png"}
      />

      {/* About Section */}
      <AboutSection
        description={organization?.description || ""}
        dateCreated={organization?.dateCreated || ""}
        location={organization?.location || ""}
        totalContribution={organization?.totalContribution || 0}
        totalMembers={organization?.totalMembers || 0}
        freeSpaces={organization?.freeSpaces || 0}
        memberCount={organization?.memberCount || 0}
      />

      {/* Investment Packages */}
      <InvestmentPackages packages={packages} onSelectPackage={handleSelectPackage} />

      {/* Join Form */}
      <JoinForm
        cooperativeId={cooperativeId}
        selectedPackage={selectedPackage}
        onSubmit={handleJoinSubmit}
        isSubmitting={joinMutation.isPending}
      />

      {/* Toast Notification */}
      <Toastbar open={showToast} message={toastMessage} severity={toastSeverity} onClose={() => setShowToast(false)} />
    </div>
  );
}
