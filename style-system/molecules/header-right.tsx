import * as React from "react";
import HeaderButton from "../atoms/header-button";

function HeaderRight({ onPress }: { onPress: () => void }) {
  return (
    <HeaderButton
      backgroundColor="headerButtonBackground"
      icon="add"
      onPress={onPress}
    />
  );
}

export default HeaderRight;
