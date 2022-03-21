import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Box from "../atoms/box";

function HeaderRight({ onPress }: { onPress: () => void }) {
  const theme = useTheme();

  return (
    <Pressable onPress={onPress}>
      <Box
        width={44}
        height={44}
        alignItems="center"
        justifyContent="center"
        backgroundColor="headerButtonBackground"
        borderRadius={8}>
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
