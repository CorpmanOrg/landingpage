import VerifyEmailClient from "./verify-email-client";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ token?: string | string[] }>;

export default async function VerifyEmailPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const rawToken = searchParams?.token;
  const token = Array.isArray(rawToken) ? rawToken[0] : (rawToken ?? "");

  return <VerifyEmailClient token={token} />;
}
