import * as React from "react";
import Box from "../atoms/box";
import Text from "../atoms/text";

type Props = {
  text: string;
};

function EmptyContent({ text }: Props) {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text variant="title">{text}</Text>
    </Box>
  );
}

export default EmptyContent;
