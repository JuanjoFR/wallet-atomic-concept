import {
  composeRestyleFunctions,
  spacing,
  SpacingProps,
  useRestyle
} from "@shopify/restyle";
import * as React from "react";
import Box from "../atoms/box";
import Text from "../atoms/text";
import { Theme } from "../theme";

const restyleFunctions = composeRestyleFunctions([spacing]);

type Props = SpacingProps<Theme> & {
  primary: number;
  secondary: number;
  currencySymbol: string;
};

function Rates({ primary, secondary, currencySymbol, ...rest }: Props) {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      {...props}>
      <Text variant="lead3" marginRight="s">
        {`+${currencySymbol}${primary.toFixed(2).toString()}`}
      </Text>
      <Text variant="lead3">{`+${secondary.toFixed(2).toString()}%`}</Text>
    </Box>
  );
}

export default Rates;
