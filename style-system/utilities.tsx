import * as React from "react";
import BottomTabBarIcon from "./atoms/bottom-tab-bar-icon";

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

export function getNavigatorProperties() {
  return {
    screenOptions: { tabBarShowLabel: false }
    // headerStyle: {
    //   backgroundColor: theme.colors.headerBackground
    // },
    // headerTitle: HeaderTitle,
    // headerTitleAlign: "left",
    // tabBarActiveTintColor: theme.colors.tabBarActiveTint,
    // tabBarInactiveTintColor: theme.colors.tabBarInactiveTint
  };
}

export function getScreenProperties({ icon }: { icon: string }) {
  return {
    options: {
      tabBarIcon: (props: TabBarIconProps) => (
        <BottomTabBarIcon icon={icon} {...props} />
      )
    }
  };
}
