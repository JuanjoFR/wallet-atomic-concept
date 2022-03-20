import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import CollectionsScreen from "../screens/collections";
import LiveScreen from "../screens/live";
import NewsScreen from "../screens/news";
import TokensScreen from "../screens/tokens";
import {
  getNavigatorProperties,
  getScreenProperties
} from "../style-system/utilities";

const Tab = createBottomTabNavigator();

function Application(): JSX.Element {
  return (
    <Tab.Navigator {...getNavigatorProperties()}>
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
