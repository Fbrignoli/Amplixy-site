export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs" && process.env.NEXT_PHASE !== "phase-production-build") {
    const { getGoogleReviewsService } = await import("./lib/google-reviews.server.mjs");
    const service = getGoogleReviewsService();
    if (!service.configured) {
      console.info("[google-reviews] not-configured: displaying the Google profile link only");
      return;
    }
    const snapshot = await service.load();
    if (snapshot) console.info("[google-reviews] synchronized at server startup");
  }
}
