import {
  composeRestyleFunctions,
  spacing,
  SpacingProps,
  useRestyle
} from "@shopify/restyle";
import * as React from "react";
import { View } from "react-native";
import BigBalance from "../molecules/big-balance";
import Rates from "../molecules/rates";
import WalletActions from "../molecules/wallet-actions";
import { Theme } from "../theme";

const restyleFunctions = composeRestyleFunctions([spacing]);

type Props = SpacingProps<Theme> & {
  data: {
    balance: number;
    currency: { symbol: string };
    rate1: number;
    rate2: number;
  };
  onDepositPress: () => void;
  onSendPress: () => void;
};

function WalletBalance({ data, onDepositPress, onSendPress, ...rest }: Props) {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <View {...props}>
      <BigBalance
        balance={data.balance}
        currencySymbol={data.currency.symbol}
        marginBottom="s"
      />
      <Rates
        primary={data.rate1}
        secondary={data.rate2}
        currencySymbol={data.currency.symbol}
        marginBottom="xl"
      />
      <WalletActions
        onDepositPress={onDepositPress}
        onSendPress={onSendPress}
      />
    </View>
  );
}

export default WalletBalance;
