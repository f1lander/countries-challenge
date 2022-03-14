import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { Box, Text, TextField } from "./components/Atoms";
import { ListOfCountries } from "./components/Organisms";
import "./App.css";

import { globalStyles } from "./stitches.config";
const queryClient = new QueryClient();
function App() {
  globalStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "$md",
          p: "$xl",
        }}
      >
        <Text size="xl">List of countries</Text>
        <TextField size="md" />
        <ListOfCountries />
      </Box>
    </QueryClientProvider>
  );
}

export default App;
