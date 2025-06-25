import { object, string } from "zod";

export const contactFormSchema = object({
  fullName: string()
    .min(1, { message: "Full name is required" })
    .min(2, { message: "Full name must be at least 2 characters" })
    .max(50, { message: "Full name cannot exceed 50 characters" })
    .trim()
    .refine((value) => /^[a-zA-Z\s]+$/.test(value), {
      message: "Full name can only contain letters and spaces",
    }),
  email: string()
    .min(1, { message: "Email address is required" })
    .email({ message: "Please enter a valid email address" })
    .max(100, { message: "Email address cannot exceed 100 characters" })
    .trim()
    .toLowerCase(),
  message: string()
    .min(1, { message: "Message is required" })
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message cannot exceed 1000 characters" })
    .trim(),
});
