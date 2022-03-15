import { styled } from "../../../stitches.config";

export const Link = styled("a", {
  color: "$lightText",
  textDecoration: "none",

  "&:hover": {
    color: "$green",
  },
});
