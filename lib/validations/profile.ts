import {z} from "zod"

export const profileSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    phone: z.string().min(10, "Phone must be at least 10 characters").or(z.literal("")),
    address: z.string().or(z.literal(""))

})

// Zod умеет сам генерировать TypeScript-тип на основе схемы. Это супер-удобно!
export type ProfileFormValues = z.infer<typeof profileSchema>;