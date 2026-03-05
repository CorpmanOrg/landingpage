"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type VerifyState = "loading" | "success" | "error";

const API_BASE_URL = process.env.API_BASE_TEST_URL || "";
const DASHBOARD_URL = "https://corpman-dashboard.vercel.app/auth";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const token = useMemo(() => searchParams.get("token"), [searchParams]);

  const [state, setState] = useState<VerifyState>("loading");
  const [message, setMessage] = useState(
    "Verifying your email, please wait...",
  );

  useEffect(() => {
    let isMounted = true;

    async function verifyEmail() {
      if (!token) {
        if (!isMounted) return;
        setState("error");
        setMessage("Invalid verification link. Token is missing.");
        return;
      }

      if (!API_BASE_URL) {
        if (!isMounted) return;
        setState("error");
        setMessage(
          "App configuration error: missing NEXT_PUBLIC_API_BASE_URL.",
        );
        return;
      }

      try {
        const res = await fetch(
          `${API_BASE_URL}/auth/verify-email/${encodeURIComponent(token)}`,
          { method: "GET", cache: "no-store" },
        );

        let payload: any = null;
        try {
          payload = await res.json();
        } catch {
          // ignore invalid json
        }

        if (!isMounted) return;

        if (res.ok) {
          setState("success");
          setMessage(payload?.message || "Email verified successfully.");
          return;
        }

        setState("error");
        setMessage(
          payload?.message ||
            "Verification failed. The link may be expired or invalid.",
        );
      } catch {
        if (!isMounted) return;
        setState("error");
        setMessage("Network error while verifying email. Please try again.");
      }
    }

    verifyEmail();

    return () => {
      isMounted = false;
    };
  }, [token]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F3FFF460] flex items-center justify-center px-4">
      <div className="pointer-events-none absolute top-0 right-0 h-[340px] w-[340px] rounded-bl-[100%] bg-gradient-to-r from-lime-400 to-green-600 opacity-80" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-[260px] w-[260px] rounded-full bg-green-200/70 blur-3xl" />

      <section className="relative z-10 w-full max-w-md rounded-2xl border border-green-100 bg-white/95 p-8 shadow-xl backdrop-blur">
        <h1 className="text-2xl font-bold text-gray-900">Email Verification</h1>
        <p className="mt-2 text-sm text-gray-600">{message}</p>

        {state === "loading" && (
          <div className="mt-6 flex items-center gap-3 rounded-lg border border-green-100 bg-green-50 p-4">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-green-200 border-t-green-700" />
            <span className="text-sm font-medium text-green-800">
              Processing verification...
            </span>
          </div>
        )}

        {state === "success" && (
          <div className="mt-6">
            <button
              type="button"
              onClick={() => window.location.assign(DASHBOARD_URL)}
              className="w-full rounded-md bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700"
            >
              Go to Dashboard
            </button>
          </div>
        )}

        {state === "error" && (
          <div className="mt-6 space-y-3">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="w-full rounded-md border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Try Again
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
