import { styled } from "../../../stitches.config";

export const Text = styled("span", {
  lineHeight: "1",
  margin: "0",
  fontWeight: "$normal",
  fontVariantNumeric: "tabular-nums",
  display: "flex",
  alignItems: "center",
  fontFamily: "Space Mono, sans-serif",
  variants: {
    size: {
      xl: {
        fontSize: "xxx-large",
      },
    },
    error: {
      true: {
        color: "$redÎ"
      }
    }
  },
});

export default Text;
