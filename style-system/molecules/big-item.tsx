import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import Box from "../atoms/box";
import { Theme } from "../theme";

const styles = StyleSheet.create({
  image: { borderRadius: 4 },
  active: { opacity: 0.8 }
});

type Props = {
  isLast: boolean;
  image: string;
  onPress: () => void;
};

function BigItem({ isLast, image, onPress }: Props) {
  const theme = useTheme<Theme>();

  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <Box marginBottom="s" borderRadius={4}>
          <Image
            source={[
              {
                uri: image,
                width: 110,
                height: 80
              }
            ]}
            width={110}
            height={80}
            style={[
              styles.image,
              pressed ? styles.active : null,
              isLast ? null : { marginRight: theme.spacing.m }
            ]}
          />
        </Box>
      )}
    </Pressable>
  );
}

export default BigItem;
