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
import SimpleItem from "../molecules/simple-item";
import { Theme } from "../theme";

const restyleFunctions = composeRestyleFunctions([spacing]);

type Props = SpacingProps<Theme> & {
  title: string;
  data: {
    id: string;
    name: string;
    image: string;
    count: number;
  }[];
  onItemPress: (id: string) => void;
};

function SimpleVerticalList({ title, data, onItemPress, ...rest }: Props) {
  const restyleProps = useRestyle(restyleFunctions, rest);

  return (
    <View {...restyleProps}>
      <Text variant="title" marginBottom="m">
        {title}
      </Text>
      <Box>
        {data.map(item => (
          <SimpleItem
            key={item.id}
            onPress={() => onItemPress(item.id)}
            {...item}
          />
        ))}
      </Box>
    </View>
  );
}

export default SimpleVerticalList;
