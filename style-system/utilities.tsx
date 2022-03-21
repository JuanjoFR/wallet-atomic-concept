import * as React from "react";
import BottomTabBarIcon from "./atoms/bottom-tab-bar-icon";
import Header from "./organisms/header";
import theme from "./theme";

type GetNavigatorPropertiesProps = {
  titleValue: string;
  onHeaderTitlePress: () => void;
  onHeaderLeftPress: () => void;
  onHeaderRightPress: () => void;
};
type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

export function getNavigatorProperties({
  titleValue,
  onHeaderTitlePress,
  onHeaderLeftPress,
  onHeaderRightPress
}: GetNavigatorPropertiesProps) {
  return {
    screenOptions: {
      headerTransparent: true,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: theme.colors.tabBarBackground,
        borderTopWidth: 0
      },
      tabBarInactiveTintColor: theme.colors.tabBarInactiveForeground,
      tabBarActiveTintColor: theme.colors.tabBarActiveForeground,
      header: () => (
        <Header
          titleValue={titleValue}
          onTitlePress={onHeaderTitlePress}
          onLeftPress={onHeaderLeftPress}
          onRightPress={onHeaderRightPress}
        />
      )
    }
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
