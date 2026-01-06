import { z } from "zod";

export const signUpSchema = z.object({
  userName: z.string().min(3, "User name must be at least 3 characters long"),
  email: z.string().email("Invalid email address").min(5, "Email must be at least 5 characters long"),
  phone: z.string().min(10, "Phone number must be at least 10 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters long"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "The password is not Valid",
  path: ["confirmPassword"],
});