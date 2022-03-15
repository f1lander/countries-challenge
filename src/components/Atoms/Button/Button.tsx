import { styled } from "../../../stitches.config";

export const Button = styled("button", {
  px: "$lg",
  py: "$sm",
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",
  textAlign: "center",
  lineHeight: "$shorter",

  color: "White",
  variants: {
    color: {
      red: {
        backgroundColor: "$red",
        color: "white",
        "&:hover": {
          backgroundColor: "$redHover",
        },
      },
      gray: {
        backgroundColor: "$gray400",
        color: "white",
        "&:hover": {
          backgroundColor: "$lightGray",
        },
      },
    },
    size: {
      large: {
        alignItems: "center",
        lineHeight: "$tall2",
        fontSize: "$5",
        fontWeight: "$bold",
        textTransform: "none",
        borderRadius: "$4",
      },
      medium: {
        fontSize: "$4",
        fontWeight: "$bold",
        lineHeight: "$shorter",
        borderRadius: "$4",
      },
      small: {
        fontSize: "$2",
        fontWeight: "$medium",
        lineHeight: "$shorter",
        borderRadius: "$3",
      },
    },
    variant: {
      clear: {
        background: "$lightBackground",
        borderRadius: "8px",
        color: "$darkRed",
        px: "$md",
      },
    },
    fullWidth: {
      true: {
        width: "$full",
      },
    },
    outlined: {
      true: {
        backgroundColor: "transparent",
        border: "1px solid",
      },
    },
  },
  compoundVariants: [
    {
      color: "red",
      outlined: true,
      css: {
        color: "$red",
        borderColor: "$red",
        "&:hover": {
          backgroundColor: "$lightRed",
        },
      },
    },
    {
      color: "gray",
      outlined: true,
      css: {
        color: "$lightText",
        borderColor: "$lightText",
        "&:hover": {
          backgroundColor: "$lightGray",
        },
      },
    },
  ],
});
