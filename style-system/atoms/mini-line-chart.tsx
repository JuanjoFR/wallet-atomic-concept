import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 20
  }
});

type Props = { data: number[] };

function MiniLineChart({ data }: Props) {
  const theme = useTheme();

  function getColor() {
    const firstValue = data[0];
    const lastValue = data[data.length - 1];

    if (firstValue > lastValue) return theme.colors.increase;
    if (firstValue < lastValue) return theme.colors.decrease;

    return theme.colors.equal;
  }

  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" viewBox="0 0 30 20">
        <Path
          d={`M0,${data[0]} ${data
            .slice(1)
            .map(
              (item: number, index: number) => `L${index * 5 + 5},${item}`
            )}`}
          stroke={getColor()}
          strokeWidth="2"
        />
      </Svg>
    </View>
  );
}

export default MiniLineChart;
