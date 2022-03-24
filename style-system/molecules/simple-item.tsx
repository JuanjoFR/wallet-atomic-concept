import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import Box from "../atoms/box";
import Text from "../atoms/text";
import { Theme } from "../theme";

const styles = StyleSheet.create({
  image: { borderRadius: 50 }
});

type Props = {
  name: string;
  image: string;
  count: number;
  onPress: () => void;
};

function SimpleItem({ name, image, count, onPress }: Props) {
  const theme = useTheme<Theme>();

  return (
    <Pressable onPress={onPress}>
      <Box
        flexDirection="row"
        alignItems="center"
        padding="s"
        marginBottom="s"
        borderRadius={8}
        backgroundColor="listItemBackground">
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
        <Text variant="body" marginRight="s">
          {count.toString()}
        </Text>
      </Box>
    </Pressable>
  );
}

export default SimpleItem;
