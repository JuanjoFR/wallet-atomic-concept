import * as React from "react";
import Icon from "react-native-vector-icons/Ionicons";

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
  icon: string;
};

function BottomTabBarIcon({ icon, color, size }: TabBarIconProps): JSX.Element {
  return <Icon name={`${icon}-outline`} size={size} color={color} />;
}

export default BottomTabBarIcon;
