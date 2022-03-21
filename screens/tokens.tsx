import * as React from "react";
import Text from "../style-system/atoms/text";
import MainTemplate from "../style-system/templates/main";

function Tokens(): JSX.Element {
  return <MainTemplate body={<Text variant="body">Tokens</Text>} />;
}

export default Tokens;
