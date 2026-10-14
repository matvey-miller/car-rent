export interface Review {
  id: string;
  carId: string;
  user: {
    name: string;
    avatar: string;
    role: string;
  };
  rating: number;
  comment: string;
  date: string;
}

export type NewReview = Omit<Review, "id">;
