import React from "react";

import { CSS } from "../../../stitches.config";

import { Box, Text } from "../../Atoms";

export interface CountryCardProps {
  country: string;
  description: string;
  flag: string;
  location: string;
  children?: React.ReactNode;
  css?: CSS;
}

export const CountryCard: React.FC<CountryCardProps> = (props): JSX.Element => {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "$md",
        backgroundColor: "$cardBackground",
        border: "solid 1px",
        borderRadius: "$3",
        width: "calc($xl * 5)",
        height: "calc($xl * 7)",
        backgroundImage: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url(${props.flag})`,
        backgroundSize: "cover",
        justifyContent: "space-between",
      }}
    >
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Text>{props.country}</Text>
        <Text>{props.description}</Text>
      </Box>

      <a target="_blank" href={props.location} rel="noreferrer">
        Location ▼
      </a>
    </Box>
  );
};
