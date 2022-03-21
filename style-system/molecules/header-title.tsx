import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Box from "../atoms/box";
import Text from "../atoms/text";

const styles = StyleSheet.create({
  pressable: {
    flex: 1
  },
  text: { flexShrink: 1 }
});

type Props = { value: string; onPress: () => void };

function HeaderLeft({ value, onPress }: Props) {
  const theme = useTheme();

  return (
    <Box
      flex={1}
      height={44}
      marginHorizontal="m"
      paddingHorizontal="m"
      borderColor="headerButtonBackground"
      borderWidth={2}
      borderRadius={8}>
      <Pressable onPress={onPress} style={styles.pressable}>
        <Box
          flex={1}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Text
            numberOfLines={1}
            variant="body"
            marginRight="s"
            style={styles.text}>
            {value}
          </Text>
          <Icon
            name="chevron-down-outline"
            size={20}
            color={theme.colors.headerTitleChevron}
          />
        </Box>
      </Pressable>
    </Box>
  );
}

export default HeaderLeft;
