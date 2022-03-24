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
  title: string;
  data: {
    id: string;
    image: string;
    name: string;
    amount: number;
    historic: number[];
  }[];
  onItemPress: (id: string) => void;
};

function ExtendedVerticalList({ title, data, onItemPress, ...rest }: Props) {
  const restyleProps = useRestyle(restyleFunctions, rest);

  return (
    <View {...restyleProps}>
      <Text variant="title" marginBottom="m">
        {title}
      </Text>
      <Box>
        {data.map(item => (
          <ItemWithChart
            key={item.id}
            onPress={() => onItemPress(item.id)}
            {...item}
          />
        ))}
      </Box>
    </View>
  );
}

export default ExtendedVerticalList;
