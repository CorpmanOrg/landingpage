import VerifyEmailClient from "./verify-email-client";

type PageProps = {
  searchParams?: {
    token?: string | string[];
  };
};

export default function VerifyEmailPage({ searchParams }: PageProps) {
  const rawToken = searchParams?.token;
  const token = Array.isArray(rawToken) ? rawToken[0] : (rawToken ?? "");

  return <VerifyEmailClient token={token} />;
}
