import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const apiUrl = process.env.API_BASE_TEST_URL;

  try {
    const response = await fetch(`${apiUrl}/auth/members/request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    // This is for network/server-level failures (not app-level errors from backend)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
