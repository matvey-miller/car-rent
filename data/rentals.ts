export interface RentalTransaction {
  id: string;
  userId: string;
  carId: string;
  paymentIntentId: string;
  totalPrice: number;
  status: "pending" | "succeeded" | "cancelled" | "refunded";
  
  // Billing Info
  clientName: string;
  clientPhone: string;
  clientAddress: string;
  clientCity: string;
  
  // Rental Info
  pickUpLocation: string;
  pickUpDate: string; // ISO 8601, включает время
  
  dropOffLocation: string;
  dropOffDate: string; // ISO 8601, включает время
  
  createdAt: string; // Дата создания записи
}

export type NewRentalTransaction = Omit<RentalTransaction, "id">;