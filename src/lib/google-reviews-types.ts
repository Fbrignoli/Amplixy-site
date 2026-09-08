export type GoogleReviewsSnapshot = {
  fetchedAt: string;
  expiresAt: string;
  averageRating: number | null;
  totalReviewCount: number;
  reviews: {
    id: string;
    author: string;
    rating: number;
    comment: string;
    publishedAt: string;
    updatedAt: string;
  }[];
};
