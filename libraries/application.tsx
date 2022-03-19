import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ApplicationNavigator from "../navigators/application";

const styles = StyleSheet.create({
  gestureHandlerRootView: { flex: 1 }
});

function Application(): JSX.Element {
  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootView}>
      <NavigationContainer>
        <ApplicationNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default Application;
