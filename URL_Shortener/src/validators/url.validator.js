import {z} from "zod";

export const createUrlSchema = z.object({
    originalURL: z.url({
        message: "Please provide a valid URL"
    }),
});