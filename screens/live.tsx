import * as React from "react";
import Text from "../style-system/atoms/text";
import MainTemplate from "../style-system/templates/main";

function Live(): JSX.Element {
  return <MainTemplate body={<Text variant="body">Live</Text>} />;
}

export default Live;
