import { BackgroundColorProps, useTheme } from "@shopify/restyle";
import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Theme } from "../theme";
import Box from "./box";

const styles = StyleSheet.create({
  container: { margin: 4 }
});

type Props = BackgroundColorProps<Theme> & {
  icon: string;
  onPress: () => void;
};

function HeaderButton({ icon, onPress, ...rest }: Props) {
  const theme = useTheme<Theme>();

  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <Box
          width={40}
          height={40}
          alignItems="center"
          justifyContent="center"
          borderRadius={8}
          opacity={pressed ? 0.5 : 1}
          style={styles.container}
          {...rest}>
          <Icon
            name={`${icon}-outline`}
            size={25}
            color={theme.colors.headerButtonForeground}
          />
        </Box>
      )}
    </Pressable>
  );
}

export default HeaderButton;
