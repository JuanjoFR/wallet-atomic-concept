import * as React from "react";
import { Alert } from "react-native";
import data from "../features/collections/data.json";
import SimpleVerticalList from "../style-system/organisms/simple-vertical-list";
import MainTemplate from "../style-system/templates/main";

function handleCollectionPress(id: string) {
  Alert.alert(`Go to collection ${id} screen`);
}

function Collections(): JSX.Element {
  return (
    <MainTemplate
      body={
        <React.Fragment>
          <SimpleVerticalList
            title="My Collections"
            data={data}
            marginHorizontal="m"
            onItemPress={handleCollectionPress}
          />
        </React.Fragment>
      }
    />
  );
}

export default Collections;
