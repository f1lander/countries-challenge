import React from "react";

import { useCountries } from "../../hooks/useCountries";
import { Box, Text } from "../Atoms";
import { CountryCard } from "../Molecules";

export const ListOfCountries: React.FC<any> = (props): JSX.Element => {
  const { isLoading, error, data } = useCountries(props.country);

  if (isLoading) return <Text>Loading...</Text>;

  if (error)
    return (
      <Text size="xl" error>
        Country not found
      </Text>
    );

  return (
    <Box
      css={{
        display: "flex",
        gap: "$md",
        flexWrap: "wrap",
        height: "78vh",
        overflowY: "scroll",
      }}
    >
      {data &&
        data.map((item: any, index: number) => {
          return (
            <CountryCard
              key={`country-${index}`}
              flag={item.flags.svg || item.flags.svg}
              name={item.name.common}
              region={item.region}
              subregion={item.subregion}
              location={item.maps.googleMaps}
            ></CountryCard>
          );
        })}
    </Box>
  );
};
