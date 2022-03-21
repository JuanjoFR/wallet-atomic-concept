import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@shopify/restyle";
import * as React from "react";
import { Alert } from "react-native";
import CollectionsScreen from "../screens/collections";
import LiveScreen from "../screens/live";
import NewsScreen from "../screens/news";
import TokensScreen from "../screens/tokens";
import {
  getNavigatorProperties,
  getScreenProperties
} from "../style-system/utilities";

const Tab = createBottomTabNavigator();

function handleHeaderTitlePress() {
  Alert.alert("Open wallet menu");
}

function handleHeaderLeftPress() {
  Alert.alert("Open application menu");
}

function handleHeaderRightPress() {
  Alert.alert("Add wallet");
}

function Application(): JSX.Element {
  const theme = useTheme();

  return (
    <Tab.Navigator
      {...getNavigatorProperties({
        theme,
        titleValue: "Wallet 1 (dsfasdsadgdsffdsfasdre)",
        onHeaderTitlePress: handleHeaderTitlePress,
        onHeaderLeftPress: handleHeaderLeftPress,
        onHeaderRightPress: handleHeaderRightPress
      })}>
      <Tab.Screen
        {...getScreenProperties({ icon: "folder" })}
        name="Tokens"
        component={TokensScreen}
      />
      <Tab.Screen
        {...getScreenProperties({ icon: "grid" })}
        name="Collections"
        component={CollectionsScreen}
      />
      <Tab.Screen
        {...getScreenProperties({ icon: "flash" })}
        name="Live"
        component={LiveScreen}
      />
      <Tab.Screen
        {...getScreenProperties({ icon: "globe" })}
        name="News"
        component={NewsScreen}
      />
    </Tab.Navigator>
  );
}

export default Application;
