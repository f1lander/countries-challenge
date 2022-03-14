import { styled } from "../../../stitches.config";

export const TextField = styled("input", {
  "&:focus": {
    border: "1px solid $lightBlue",
  },
  "&::placeholder": {
    color: "$placeholder",
  },
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  background: "$lightBackground",
  borderRadius: "8px",

  fontWeight: "$light",
  fontSize: "$7",
  lineHeight: "$base",
  padding: "$md",

  height: "$2xl",
  color: "$text",
  variants: {
    size: {
      sm: {
        width: "calc($2xl * 5)",
      },
      md: {
        width: "calc($2xl * 10)",
      },
      lg: {
        width: "calc($2xl * 15)",
      },
    },
    error: {
      true: {
        border: "1px solid $red",
        boxSizing: "border-box",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
