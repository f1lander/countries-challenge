import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { globalStyles } from "./stitches.config";
import { Countries } from "./components/Pages/Countries";
const queryClient = new QueryClient();
function App() {
  globalStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <Countries />
    </QueryClientProvider>
  );
}

export default App;
