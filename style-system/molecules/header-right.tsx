import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Box from "../atoms/box";

const styles = StyleSheet.create({
  container: { margin: 4 }
});

function HeaderRight({ onPress }: { onPress: () => void }) {
  const theme = useTheme();

  return (
    <Pressable onPress={onPress}>
      <Box
        width={40}
        height={40}
        alignItems="center"
        justifyContent="center"
        backgroundColor="headerButtonBackground"
        borderRadius={8}
        style={styles.container}>
        <Icon
          name="add-outline"
          size={25}
          color={theme.colors.headerButtonForeground}
        />
      </Box>
    </Pressable>
  );
}

export default HeaderRight;
