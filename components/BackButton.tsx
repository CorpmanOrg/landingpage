import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ className = "" }) => {
  const router = useRouter();

  const handleGoBack = () => {
    // Use browser's back navigation if available, otherwise go to home
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleGoBack}
      className={`flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 rounded-lg transition-all duration-200 backdrop-blur-sm hover:scale-105 ${className}`}
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="font-medium">Back</span>
    </button>
  );
};
