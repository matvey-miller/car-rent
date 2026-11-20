import { z } from "zod";

export const paymentFormSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    phone: z.string().min(10, "Phone must be at least 10 characters"),
    address: z.string().min(5, "Address is too short"),
    city: z.string().min(2, "City name is too short"),
    
    pickUpLocation: z.string().min(1, "Please select a pick-up location"),
    pickUpDate: z.string().min(1, "Please select a pick-up date"),
    pickUpTime: z.string().min(1, "Please select a pick-up time"),
    
    dropOffLocation: z.string().min(1, "Please select a drop-off location"),
    dropOffDate: z.string().min(1, "Please select a drop-off date"),
    dropOffTime: z.string().min(1, "Please select a drop-off time"),

    cardHolder: z.string().min(2, "Card holder name is too short"),
});

export type PaymentFormValues = z.infer<typeof paymentFormSchema>;