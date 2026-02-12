import z from "zod";

export const propertyFormSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(100, "Title is too long"),
  
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long")
    .max(1000, "Description is too long"),

  price_per_night: z
    .coerce.number() 
    .positive("Price must be greater than 0"),

  address: z
    .string()
    .min(5, "Address must be at least 5 characters long"),

  max_guests: z
    .coerce.number()
    .int("Must be a whole number")
    .min(1, "At least 1 guest is required"),

  city_id: z
    .coerce.number({
      required_error: "Please select a city",
      invalid_type_error: "Please select a city",
    })
    .positive("Please select a city"),

  amenities: z
    .array(z.string())
    .min(1, "Please select at least one amenity"),


  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),

  images: z.array(z.any()).min(1, "Please upload at least one image"),
});