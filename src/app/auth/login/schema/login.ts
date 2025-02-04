import { z } from "zod";

export const LOGIN_SCHEMA = z.object({
 identifier: z.string().min(1, "Username is required").default(""),
 password: z.string().min(1, "Password is required").default(""),
});

export type LoginSchema = z.infer<typeof LOGIN_SCHEMA>;
