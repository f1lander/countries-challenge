import React from "react";

import { CSS } from "../../../stitches.config";

import { Box, Text, Link } from "../../Atoms";

export interface CountryCardProps {
  name: string;
  region: string;
  subregion: string;
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
        gap: "$sm",
        backgroundColor: "$cardBackground",
        border: "solid 1px $lightBorder",
        borderRadius: "$3",
        width: "calc($xl * 5)",
        height: "calc($xl * 7)",
        backgroundImage: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url(${props.flag})`,
        backgroundSize: "cover",
        justifyContent: "space-between",
        "@xs": {
          width: "$full",
        },
        p: "$xs",
      }}
    >
      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$sm",
          justifyContent: "space-between",
        }}
      >
        <Text>{props.name}</Text>
        <Text
          css={{ color: "$neutralGrayDark", backgroundColor: "$lightBlue", borderRadius:"$1" }}
        >
          {props.region}
        </Text>
        <Text css={{ color: "$almostWhite", backgroundColor: "$redHover", }}>{props.subregion}</Text>
      </Box>

      <Link target="_blank" href={props.location} rel="noreferrer">
        Location ▼
      </Link>
    </Box>
  );
};
