import {
  composeRestyleFunctions,
  spacing,
  SpacingProps,
  useRestyle
} from "@shopify/restyle";
import * as React from "react";
import { View } from "react-native";
import Box from "../atoms/box";
import Text from "../atoms/text";
import ItemWithChart from "../molecules/item-with-chart";
import { Theme } from "../theme";

const restyleFunctions = composeRestyleFunctions([spacing]);

type Props = SpacingProps<Theme> & {
  data: {
    id: string;
    image: string;
    name: string;
    amount: number;
    historic: number[];
  }[];
  onTokenPress: (id: string) => void;
};

function TokensList({ data, onTokenPress, ...rest }: Props) {
  const restyleProps = useRestyle(restyleFunctions, rest);

  return (
    <View {...restyleProps}>
      <Text variant="title" marginBottom="m">
        My Tokens
      </Text>
      <Box>
        {data.map(token => (
          <ItemWithChart
            key={token.id}
            onPress={() => onTokenPress(token.id)}
            {...token}
          />
        ))}
      </Box>
    </View>
  );
}

export default TokensList;
