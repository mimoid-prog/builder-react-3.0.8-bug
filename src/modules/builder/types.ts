import type { BuilderContent } from "@builder.io/sdk";

export type BuilderEntry<TData = void> = BuilderContent & {
  data: BuilderContent["data"] & TData;
};

export interface BuilderReference<TData> {
  "@type": "@builder.io/core:Reference";
  id: string;
  model: string;
  // TODO: find correct typing for value
  /* `value` can be undefined if reference is nested too deep in Builder structures */
  value?: {
    data: TData;
  };
}
