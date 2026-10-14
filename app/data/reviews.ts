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

export const reviews: Review[] = [
  {
    id: "review-1",
    carId: "1",
    user: {
      name: "Alex Johnson",
      avatar: "/users/alex.svg",
      role: "Verified customer",
    },
    rating: 5,
    comment: "Amazing car, very comfortable and powerful. The rental process was easy.",
    date: "2026-09-18",
  },
  {
    id: "review-2",
    carId: "1",
    user: {
      name: "Daniel Smith",
      avatar: "/users/daniel.svg",
      role: "Verified customer",
    },
    rating: 4,
    comment: "Great driving experience. The car was clean and ready on time.",
    date: "2026-09-25",
  },
  {
    id: "review-3",
    carId: "2",
    user: {
      name: "Michael Brown",
      avatar: "/users/michael.svg",
      role: "Verified customer",
    },
    rating: 5,
    comment: "Excellent handling and a smooth rental experience.",
    date: "2026-10-02",
  },
];