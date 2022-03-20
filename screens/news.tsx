import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

function News(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>News</Text>
    </View>
  );
}

export default News;
