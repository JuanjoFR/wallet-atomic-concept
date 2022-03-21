import * as React from "react";
import Text from "../style-system/atoms/text";
import MainTemplate from "../style-system/templates/main";

function News(): JSX.Element {
  return <MainTemplate body={<Text variant="body">News</Text>} />;
}

export default News;
