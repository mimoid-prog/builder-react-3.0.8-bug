import { z } from "zod";

export const serverSchema = z.object({});

export const clientSchema = z.object({
  NEXT_PUBLIC_BUILDER_API_KEY: z.string(),
  NEXT_PUBLIC_BUILDER_SITE_URL: z.string(),
});

export const clientEnv = {
  NEXT_PUBLIC_BUILDER_API_KEY: process.env.NEXT_PUBLIC_BUILDER_API_KEY,
  NEXT_PUBLIC_BUILDER_SITE_URL: process.env.NEXT_PUBLIC_BUILDER_SITE_URL,
};
