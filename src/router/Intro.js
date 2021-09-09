import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Intro from "./pages/Intro";

const Stack = createStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#00325a",
        },
      }}
    >
      <Stack.Screen name="Intro" component={Intro} />
    </Stack.Navigator>
  );
}
