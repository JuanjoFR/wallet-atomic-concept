import {
  composeRestyleFunctions,
  spacing,
  SpacingProps,
  useRestyle
} from "@shopify/restyle";
import * as React from "react";
import { ScrollView, View } from "react-native";
import Text from "../atoms/text";
import BigItem from "../molecules/big-item";
import { Theme } from "../theme";

const restyleFunctions = composeRestyleFunctions([spacing]);

type Props = SpacingProps<Theme> & {
  title: string;
  data: {
    id: string;
    image: string;
  }[];
  onItemPress: (id: string) => void;
};

function HorizontalList({ title, data, onItemPress, ...rest }: Props) {
  const restyleProps = useRestyle(restyleFunctions, rest);

  return (
    <View {...restyleProps}>
      <Text variant="title" marginBottom="m">
        {title}
      </Text>
      <ScrollView horizontal indicatorStyle="white">
        {data.map((item, index) => (
          <BigItem
            key={item.id}
            isLast={index === data.length - 1}
            onPress={() => onItemPress(item.id)}
            {...item}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default HorizontalList;
