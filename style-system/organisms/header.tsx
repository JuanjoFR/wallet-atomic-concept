import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Box from "../atoms/box";
import HeaderLeft from "../molecules/header-left";
import HeaderRight from "../molecules/header-right";
import HeaderTitle from "../molecules/header-title";

type Props = {
  titleValue: string;
  onTitlePress: () => void;
  onLeftPress: () => void;
  onRightPress: () => void;
};

function Header({
  titleValue,
  onTitlePress,
  onLeftPress,
  onRightPress
}: Props) {
  return (
    <SafeAreaView edges={["top"]}>
      <Box
        flex={1}
        flexDirection="row"
        height={44}
        paddingHorizontal="m"
        marginVertical="s"
        alignItems="center"
        justifyContent="space-between">
        <HeaderLeft onPress={onLeftPress} />
        <HeaderTitle value={titleValue} onPress={onTitlePress} />
        <HeaderRight onPress={onRightPress} />
      </Box>
    </SafeAreaView>
  );
}

export default Header;
