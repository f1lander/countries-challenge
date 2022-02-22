import React from "react";

import { CSS } from "../../../stitches.config";

import { Box } from "../../Atoms";

import * as Flags from "react-flat-flags";

type FlagsType = keyof typeof Flags;

export interface CountryCardProps {
  country: FlagsType;
  description: string;
  children?: React.ReactNode;
  css?: CSS;
}

export const CountryCard: React.FC<CountryCardProps> = (props): JSX.Element => {
  const Flag = Flags[props.country];
  return (
    <Box
      css={{
        backgroundColor: "$cardBackground",
      }}
    >
      <Flag />
    </Box>
  );
};
