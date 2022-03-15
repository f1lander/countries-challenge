import { useRef, useState } from "react";
import { Box, Text, Button } from "../Atoms";
import { SearchInput } from "../Molecules";
import { ListOfCountries } from "../Organisms/ListOfCountries";

export const Countries = () => {
  const [country, setCountry] = useState<string | null>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleOnClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }

    setCountry(null);
  };
  return (
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
      <Box
        css={{
          display: "flex",
          gap: "$md",
        }}
      >
        <SearchInput onClick={handleOnClear} ref={inputRef} />
        <Button
          size="medium"
          color="gray"
          onClick={() => setCountry(inputRef.current?.value)}
        >
          Search 🔎️
        </Button>
      </Box>
      <ListOfCountries country={country} />
    </Box>
  );
};
