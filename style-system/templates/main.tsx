import { useHeaderHeight } from "@react-navigation/elements";
import * as React from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenBackground from "../atoms/screen-background";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

type Props = {
  body: JSX.Element;
};

function Main({ body }: Props) {
  const headerHeight = useHeaderHeight();

  return (
    <ScreenBackground>
      <SafeAreaView edges={["right", "left"]} style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ScrollView
          style={{
            marginTop: headerHeight
          }}
          indicatorStyle="white">
          {body}
        </ScrollView>
      </SafeAreaView>
    </ScreenBackground>
  );
}

export default Main;
