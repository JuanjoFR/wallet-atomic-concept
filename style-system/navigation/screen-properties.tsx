import * as React from "react";
import BottomTabBarIcon from "../atoms/bottom-tab-bar-icon";

type Props = { icon: string };
type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

function getScreenProperties({ icon }: Props) {
  return {
    options: {
      tabBarIcon: (props: TabBarIconProps) => (
        <BottomTabBarIcon icon={icon} {...props} />
      )
    }
  };
}

export default getScreenProperties;
