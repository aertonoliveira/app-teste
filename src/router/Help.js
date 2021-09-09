import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HelpList from "./pages/Help/HelpList";
import HelpShow from "./pages/Help/HelpShow";

const Stack = createStackNavigator();

export default function Help() {
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
      <Stack.Screen name="HelpList" component={HelpList} />
      <Stack.Screen name="HelpShow" component={HelpShow} />
    </Stack.Navigator>
  );
}
