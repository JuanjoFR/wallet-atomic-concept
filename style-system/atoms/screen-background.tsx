import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const styles = StyleSheet.create({
  gradient: {
    flex: 1
  }
});

type Props = {
  children: JSX.Element;
};

function ScreenBackground({ children }: Props) {
  const theme = useTheme();

  return (
    <LinearGradient
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 0.25 }}
      colors={[theme.colors.mainBackground1, theme.colors.mainBackground2]}
      style={styles.gradient}>
      {children}
    </LinearGradient>
  );
}

export default ScreenBackground;
