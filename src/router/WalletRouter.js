import React from "react";

import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

import Favorite from "../pages/Wallet/Favorite";
import NewAccount from "../pages/Wallet/NewAccount";

import colors from "../utils/GlobalStyles/colors";

const tabBarConfig = {
  activeTintColor: colors.BackgroundRounded,
  labelStyle: { fontSize: 14, fontWeight: "bold" },
  style: { backgroundColor: colors.Background, marginTop: 10 },
  indicatorStyle: {
    backgroundColor: colors.BackgroundRounded,
  },
};

export default function WalletRouter() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.BackgroundAuth }}>
      <NavigationContainer independent={1}>
        <Tab.Navigator tabBarOptions={tabBarConfig}>
          <Tab.Screen
            options={{ title: "Novo" }}
            name="NewAccount"
            component={NewAccount}
          />
          <Tab.Screen
            options={{ title: "Favoritos" }}
            name="Favorite"
            component={Favorite}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
