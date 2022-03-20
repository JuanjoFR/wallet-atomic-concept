import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

function Collections(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Collections</Text>
    </View>
  );
}

export default Collections;
