export interface Review {
  id: string;
  user: {
    name: string;
    avatar: string;
    role: "Verified Customer" | "Admin" | "";
  }
  carId: string;
  rating: number;
  comment: string;
  date: string;
}

export type NewReview = Omit<Review, "id">;
