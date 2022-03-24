import * as React from "react";
import { Alert } from "react-native";
import data from "../features/collections/data.json";
import HorizontalList from "../style-system/organisms/horizontal-list";
import SimpleVerticalList from "../style-system/organisms/simple-vertical-list";
import MainTemplate from "../style-system/templates/main";

function handleCategorizedCollectionPress(id: string) {
  Alert.alert(`Go to collection ${id} screen`);
}

function handleUncategorizedPress(id: string) {
  Alert.alert(`Go to project ${id} screen`);
}

function Collections(): JSX.Element {
  return (
    <MainTemplate
      body={
        <React.Fragment>
          <SimpleVerticalList
            title="My Collections"
            data={data.categorized}
            marginHorizontal="m"
            marginBottom="l"
            onItemPress={handleCategorizedCollectionPress}
          />
          <HorizontalList
            title="Uncategorized"
            data={data.uncategorized}
            marginHorizontal="m"
            marginBottom="l"
            onItemPress={handleUncategorizedPress}
          />
        </React.Fragment>
      }
    />
  );
}

export default Collections;
