import { useHeaderHeight } from "@react-navigation/elements";
import * as React from "react";
import Text from "../style-system/atoms/text";
import MainTemplate from "../style-system/templates/main";

function Collections(): JSX.Element {
  const headerHeight = useHeaderHeight();

  return (
    <MainTemplate
      headerHeight={headerHeight}
      body={<Text variant="body">Collections</Text>}
    />
  );
}

export default Collections;
