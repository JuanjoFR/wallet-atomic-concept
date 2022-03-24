import * as React from "react";
import HeaderButton from "../atoms/header-button";

function HeaderLeft({ onPress }: { onPress: () => void }) {
  return <HeaderButton icon="menu" onPress={onPress} />;
}

export default HeaderLeft;
