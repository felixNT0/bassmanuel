import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const report = await request.json();

    // Log CSP violations for monitoring
    console.error("CSP Violation:", JSON.stringify(report, null, 2));

    // In production, you might want to:
    // - Send to a logging service (Sentry, LogRocket, etc.)
    // - Store in a database
    // - Send alerts for critical violations

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error processing CSP report:", error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
