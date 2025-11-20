import React from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { BackButton } from "./BackButton";

interface ErrorStateProps {
  error: Error | null;
  onRetry: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ error, onRetry }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 relative">
      {/* Back Button - Fixed position */}
      <div className="absolute top-8 left-8 z-10">
        <BackButton className="bg-gray-600/20 hover:bg-gray-600/30 text-gray-700 border-gray-300" />
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-md w-full text-center border border-red-100">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-600" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-3">Oops! Something went wrong</h1>

        <p className="text-gray-600 mb-2">We couldn't load the cooperative details.</p>

        <p className="text-sm text-gray-500 mb-8">{error?.message || "Please try again later."}</p>

        <div className="space-y-3">
          <button
            onClick={onRetry}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Try Again
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400">If the problem persists, please contact support</p>
        </div>
      </div>
    </div>
  );
};
