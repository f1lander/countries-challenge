import React from "react";

import { useCountries } from "../../hooks/useCountries";
import { Box, Text } from "../Atoms";
import { CountryCard } from "../Molecules";

export const ListOfCountries: React.FC<any> = (props): JSX.Element => {
  const { isLoading, error, data } = useCountries();

  if (isLoading) return <Text>Loading...</Text>;

  if (error)
    return <Text error>{`An error has occurred:  + error.message`}</Text>;

  return (
    <Box
      css={{
        display: "flex",
        gap: "$md",
        flexWrap: "wrap",
        justifyContent: "space-between",
        height: "78vh",
        overflowY: "scroll"
      }}
    >
      {data &&
        data.map((item: any) => {
          return (
            <CountryCard
              flag={item.flags.svg || item.flags.svg}
              country={item.name.common}
              description={item.name.official}
              location={item.maps.googleMaps}
            ></CountryCard>
          );
        })}
    </Box>
  );
};
