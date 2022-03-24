import {
  composeRestyleFunctions,
  spacing,
  SpacingProps,
  useRestyle
} from "@shopify/restyle";
import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Theme } from "../theme";
import Box from "./box";
import Text from "./text";

const restyleFunctions = composeRestyleFunctions([spacing]);
const styles = StyleSheet.create({
  pressable: {
    borderRadius: 8
  }
});

type Props = SpacingProps<Theme> & { text: string; onPress: () => void };

function Button({ text, onPress, ...rest }: Props) {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <Box flex={1} {...props}>
      <Pressable style={styles.pressable} onPress={onPress}>
        {({ pressed }) => (
          <Box
            flex={1}
            height={44}
            paddingHorizontal="m"
            alignItems="center"
            justifyContent="center"
            backgroundColor={
              pressed ? "buttonActiveBackground" : "buttonInactiveBackground"
            }
            borderRadius={8}>
            <Text variant="button">{text}</Text>
          </Box>
        )}
      </Pressable>
    </Box>
  );
}

export default Button;
