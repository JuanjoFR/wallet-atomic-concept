import * as React from "react";
import Header from "../organisms/header";
import theme from "../theme";

type Props = {
  titleValue: string;
  onHeaderTitlePress: () => void;
  onHeaderLeftPress: () => void;
  onHeaderRightPress: () => void;
};

function getNavigatorProperties({
  titleValue,
  onHeaderTitlePress,
  onHeaderLeftPress,
  onHeaderRightPress
}: Props) {
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

export default getNavigatorProperties;
