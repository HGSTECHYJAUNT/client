"use clientS";
import { queryClient } from "@/config/query";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";

const QueryClient = ({ children }: PropsWithChildren) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryClient;
