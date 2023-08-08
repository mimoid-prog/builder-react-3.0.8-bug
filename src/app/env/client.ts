import { clientEnv, clientSchema } from "./schema";

import type { ZodFormattedError, SafeParseReturnType } from "zod";

const _clientEnv = clientSchema.safeParse(clientEnv);

export const formatErrors = (
  errors: ZodFormattedError<
    typeof _clientEnv extends SafeParseReturnType<infer Value, unknown>
      ? Value
      : never,
    string
  >
) =>
  Object.entries(errors)
    .map(([name, value]) => {
      if (value && "_errors" in value)
        return `${name}: ${value._errors.join(", ")}\n`;
    })
    .filter(Boolean);

if (_clientEnv.success === false) {
  console.error(
    "❌ Invalid environment variables:\n",
    ...formatErrors(_clientEnv.error.format())
  );
  throw new Error("Invalid environment variables");
}

/**
 * Validate client-side env are exposed to the client
 */

for (const key of Object.keys(_clientEnv.data)) {
  if (!key.startsWith("NEXT_PUBLIC_")) {
    console.warn("❌ Invalid public environment variable name:\n", key);
    throw new Error("Invalid public environment variable name");
  }
}

export const env = _clientEnv.data;
