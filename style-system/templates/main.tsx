import * as React from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenBackground from "../atoms/screen-background";

type Props = {
  body: JSX.Element;
  headerHeight: number;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

function Main({ headerHeight, body }: Props): JSX.Element {
  return (
    <ScreenBackground>
      <SafeAreaView edges={["right", "left"]} style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView
          style={{
            marginTop: headerHeight
          }}
          // contentContainerStyle={{
          //   paddingBottom: insets.bottom
          // }}
          // indicatorStyle="white"
        >
          {body}
        </ScrollView>
      </SafeAreaView>
    </ScreenBackground>
  );
}

export default Main;
