import { getGoogleReviewsService } from "@/lib/google-reviews.server.mjs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const snapshot = await getGoogleReviewsService().load();
  return Response.json(snapshot, {
    headers: {
      "Cache-Control": "private, no-store, max-age=0",
      "X-Robots-Tag": "noindex",
    },
  });
}
