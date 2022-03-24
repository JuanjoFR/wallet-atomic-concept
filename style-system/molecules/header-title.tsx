import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Box from "../atoms/box";
import Text from "../atoms/text";
import { Theme } from "../theme";

const styles = StyleSheet.create({
  pressable: {
    flex: 1
  },
  container: { marginVertical: 4 },
  text: { flexShrink: 1 }
});

type Props = { value: string; onPress: () => void };

function HeaderLeft({ value, onPress }: Props) {
  const theme = useTheme<Theme>();

  return (
    <Pressable
      onPress={onPress}
      style={[styles.pressable, { marginHorizontal: theme.spacing.m }]}>
      <Box
        flex={1}
        height={40}
        paddingHorizontal="s"
        borderColor="headerButtonBackground"
        borderWidth={2}
        borderRadius={8}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        style={styles.container}>
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
  );
}

export default HeaderLeft;
