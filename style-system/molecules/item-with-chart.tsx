import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import Box from "../atoms/box";
import MiniLineChart from "../atoms/mini-line-chart";
import Text from "../atoms/text";
import { Theme } from "../theme";

const styles = StyleSheet.create({
  image: { borderRadius: 50 }
});

type Props = {
  name: string;
  image: string;
  amount: number;
  historic: number[];
  onPress: () => void;
};

function ItemWithChart({ name, image, amount, historic, onPress }: Props) {
  const theme = useTheme<Theme>();

  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <Box
          flexDirection="row"
          alignItems="center"
          padding="s"
          marginBottom="s"
          borderRadius={8}
          backgroundColor={
            pressed ? "listItemActiveBackground" : "listItemInactiveBackground"
          }>
          <Image
            source={[
              {
                uri: image,
                width: 48,
                height: 48
              }
            ]}
            width={48}
            height={48}
            style={[styles.image, { marginRight: theme.spacing.m }]}
          />
          <Box flex={1}>
            <Text variant="body" marginRight="m" numberOfLines={1}>
              {name}
            </Text>
          </Box>
          <Text variant="body" marginRight="m">
            {amount.toFixed(2).toString()}
          </Text>
          <Box>
            <MiniLineChart data={historic} />
          </Box>
        </Box>
      )}
    </Pressable>
  );
}

export default ItemWithChart;
