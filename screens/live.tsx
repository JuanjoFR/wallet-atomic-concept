import { useHeaderHeight } from "@react-navigation/elements";
import * as React from "react";
import Text from "../style-system/atoms/text";
import MainTemplate from "../style-system/templates/main";

function Live(): JSX.Element {
  const headerHeight = useHeaderHeight();

  return (
    <MainTemplate
      headerHeight={headerHeight}
      body={<Text variant="body">Live</Text>}
    />
  );
}

export default Live;
