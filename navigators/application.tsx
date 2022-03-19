import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import HomeScreen from "../screens/home";

const Stack = createStackNavigator();

function Application(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default Application;
