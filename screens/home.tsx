import * as React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function Home(): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
      <Icon name="home-outline" color={"tomato"} size={50} />
    </View>
  );
}

export default Home;
