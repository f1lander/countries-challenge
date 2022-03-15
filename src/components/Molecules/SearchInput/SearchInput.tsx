import { forwardRef } from "react";
import { Box, TextField, Button } from "../../Atoms";

export const SearchInput = forwardRef<HTMLInputElement, { onClick(): void }>(
  (props, ref) => {
    return (
      <Box
        css={{
          display: "flex",
          borderRadius: "$3",
          backgroundColor: "$lightBackground",
          p: "$xs",
        }}
      >
        <TextField variant="search" ref={ref} size="md" />
        <Button variant="clear" onClick={props.onClick}>
          ✖
        </Button>
      </Box>
    );
  }
);
