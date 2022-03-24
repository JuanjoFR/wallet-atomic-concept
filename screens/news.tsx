import * as React from "react";
import EmptyContent from "../style-system/molecules/empty-content";
import MainTemplate from "../style-system/templates/main";

function News() {
  return <MainTemplate body={<EmptyContent text="Empty Screen" />} />;
}

export default News;
