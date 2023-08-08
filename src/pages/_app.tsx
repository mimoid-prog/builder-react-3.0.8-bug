import "app/styles/globals.css";

import { builder } from "@builder.io/react";
import { env } from "app/env/client";

import type { AppProps } from "next/app";

builder.init(env.NEXT_PUBLIC_BUILDER_API_KEY);

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
