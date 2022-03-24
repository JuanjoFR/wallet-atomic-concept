import * as React from "react";
import EmptyContent from "../style-system/molecules/empty-content";
import MainTemplate from "../style-system/templates/main";

function Live() {
  return <MainTemplate body={<EmptyContent text="Empty Screen" />} />;
}

export default Live;
