import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ApplicationNavigator from "../navigators/application";
import ThemeProvider from "../style-system/provider";

const styles = StyleSheet.create({
  gestureHandlerRootView: { flex: 1 }
});

// TODO add theme provider here to send light or dark theme
function Application(): JSX.Element {
  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootView}>
      <SafeAreaProvider>
        <ThemeProvider>
          <NavigationContainer>
            <ApplicationNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default Application;
