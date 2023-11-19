"use client";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";

export default function QueryProvider({ children }) {
  const [QueryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={QueryClient}>{children}</QueryClientProvider>
  );
}
