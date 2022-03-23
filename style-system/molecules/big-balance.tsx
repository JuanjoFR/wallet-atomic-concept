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

type Props = SpacingProps<Theme> & { balance: number; currencySymbol: string };

function WalletBalance({ balance, currencySymbol, ...rest }: Props) {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      {...props}>
      <Text variant="lead2" marginRight="s">
        {currencySymbol}
      </Text>
      <Text variant="lead1">{balance.toFixed(2).toString()}</Text>
    </Box>
  );
}

export default WalletBalance;
