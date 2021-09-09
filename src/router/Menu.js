import React, { useState } from "react";

import { View, Image, ActivityIndicator } from "react-native";
import HeaderDrawer from "../components/HeaderDrawer";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import CheckProvider from "../pages/CheckProvider";
import ChatWithClient from "../pages/ChatWithClient";
import Profile from "../pages/Profile";
import Wallet from "../pages/Wallet";
import Chat from "../pages/Chat";
import Services from "../pages/Services";
import ProviderStatus from "../pages/ProviderStatus";
import ServicesHistoric from "../pages/ServicesHistoric";
import ProfileAbout from "../pages/ProfileAbout";

import Historic from "../pages/Wallet/Historic";
import FutureReleases from "../pages/Wallet/FutureReleases";

import MenuDrawer from "../pages/MenuDrawer";

import Faq from "../pages/MenuDrawer/Faq";
import Suporte from "../pages/MenuDrawer/Suporte";
import CheckFaq from "../pages/MenuDrawer/CheckFaq";

import Plans from "../pages/Plans";
import PlansYears from "../pages/Plans/PlansYears";

import ConfirmData from "../pages/ConfirmData";

//import RequestProvider from './pages/RequestProvider';

const Stack = createStackNavigator();
const TabNavigator = createMaterialBottomTabNavigator();
const TabTopNavigator = createMaterialTopTabNavigator();
const TabTopNavigator2 = createMaterialTopTabNavigator();

import colors from "../utils/GlobalStyles/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// actions

// icons

import HomeIcon from "../assets/other-icons/bx_bx-home-heartactive.png";
import HomeIconDisable from "../assets/other-icons/bx_bx-home-heart.png";

import ServicesIcon from "../assets/other-icons/ic_outline-home-repair-serviceactive.png";
import ServicesIconDisable from "../assets/other-icons/ic_outline-home-repair-service.png";

import WalletIconDisabled from "../assets/other-icons/tabler_wallet.png";
import WalletIcon from "../assets/other-icons/tabler_walletactive.png";

import ChatIconDisabled from "../assets/other-icons/chat.png";
import ChatIcon from "../assets/other-icons/chatactive.png";

import UserIcon from "../assets/other-icons/bytesize_useractive.png";
import UserIconDisabled from "../assets/other-icons/bytesize_user.png";

import SendDocuments from "./SendDocuments";

import api from "../services/api";

import { useSelector } from "react-redux";

const tabBarConfig = {
  activeTintColor: "#fff",
  labelStyle: { fontSize: 14, fontWeight: "bold" },
  style: { backgroundColor: colors.Background, marginTop: 10 },
  indicatorStyle: {
    backgroundColor: colors.BackgroundRounded,
  },
};

function PlansStack() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.Background }}>
      <HeaderDrawer close={true} />
      <TabTopNavigator.Navigator tabBarOptions={tabBarConfig}>
        <TabTopNavigator.Screen
          options={{ title: "Cobrança trimestral" }}
          name={"Plans"}
          component={Plans}
        />
        <TabTopNavigator.Screen
          options={{ title: "Cobrança anual" }}
          name={"PlansYears"}
          component={PlansYears}
        />
      </TabTopNavigator.Navigator>
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PlansStack" component={PlansStack} />
      <Stack.Screen name="CheckService" component={CheckProvider} />
      <Stack.Screen name="ChatWithClient" component={ChatWithClient} />
    </Stack.Navigator>
  );
}

function ChatStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatWithClient" component={ChatWithClient} />
    </Stack.Navigator>
  );
}

function ServicesStack() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.Background }}>
      <HeaderDrawer />
      <TabTopNavigator.Navigator tabBarOptions={tabBarConfig}>
        <TabTopNavigator.Screen
          options={{ title: "Serviços" }}
          name={"Services"}
          component={Services}
        />
        <TabTopNavigator.Screen
          name={"ServicesHistoric"}
          component={ServicesHistoric}
          options={{
            title: "Histórico",
          }}
        />
      </TabTopNavigator.Navigator>
    </View>
  );
}

function ProfileStack() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.Background }}>
      <HeaderDrawer />
      <Profile />
      <TabTopNavigator.Navigator tabBarOptions={tabBarConfig}>
        <TabTopNavigator.Screen
          options={{ title: "Sobre Você" }}
          name={"ProfileAbout"}
          component={ProfileAbout}
        />
      </TabTopNavigator.Navigator>
    </View>
  );
}

function WalletStack() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.Background }}>
      <HeaderDrawer />
      <Wallet />
      <TabTopNavigator2.Navigator tabBarOptions={tabBarConfig}>
        <TabTopNavigator2.Screen
          options={{ title: "Histórico" }}
          name={"Historic"}
          component={Historic}
        />
        <TabTopNavigator2.Screen
          name={"FutureReleases"}
          component={FutureReleases}
          options={{
            title: "Lançamentos Futuros",
          }}
        />
      </TabTopNavigator2.Navigator>
    </View>
  );
}

function UserAprovedNavigator() {
  return (
    <TabNavigator.Navigator
      initialRouteName="Home"
      barStyle={{
        backgroundColor: colors.Background,
        // borderTopWidth: 1,
        // borderTopColor: 'rgba(255, 255, 255, 0.1)',
      }}
      activeColor={colors.TabNavigatorActived}
      inactiveColor={colors.TabNavigatorInActived}
      tabBarSelectedItemStyle={{
        borderTopWidth: 10,
        borderTopColor: "#000",
      }}
      shifting={false}
    >
      <TabNavigator.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Image source={HomeIcon} />
            ) : (
              <Image source={HomeIconDisable} />
            ),
        }}
      />
      <TabNavigator.Screen
        name="Serviços"
        component={ServicesStack}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Image source={ServicesIcon} />
            ) : (
              <Image source={ServicesIconDisable} />
            ),
        }}
      />
      <TabNavigator.Screen
        name="Carteira"
        component={WalletStack}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Image source={WalletIcon} />
            ) : (
              <Image source={WalletIconDisabled} />
            ),
        }}
      />
      <TabNavigator.Screen
        name="Chat"
        component={ChatStack}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Image source={ChatIcon} />
            ) : (
              <Image source={ChatIconDisabled} />
            ),
        }}
      />
      <TabNavigator.Screen
        name="Perfil"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Image source={UserIcon} />
            ) : (
              <Image source={UserIconDisabled} />
            ),
        }}
      />
    </TabNavigator.Navigator>
  );
}

function UserInactiveNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="UserInactive" component={ProviderStatus} />
    </Stack.Navigator>
  );
}

export default function Menu() {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("active");
  const [userSendDocument, setUserSendDocument] = useState(false);

  const userData = useSelector((state) => state.user.profile);

  async function loadStatusUser() {
    const response = await api.get(`/users/${userData.id}`);

    setStatus(response.data.status);
    setUserSendDocument(response.data.send_document);

    setLoading(false);
  }

  loadStatusUser();

  return (
    <NavigationContainer independent={1}>
      {loading ? (
        <ActivityIndicator color="#fff" size="large" />
      ) : (
        <>
          {userSendDocument ? (
            <>
              {status === "active" ? (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                  <Stack.Screen
                    name="HomeInitialStack"
                    component={UserAprovedNavigator}
                  />
                  <Stack.Screen name="MenuDrawer" component={MenuDrawer} />
                  <Stack.Screen name="Faq" component={Faq} />
                  <Stack.Screen name="CheckFaq" component={CheckFaq} />
                  <Stack.Screen name="Suporte" component={Suporte} />
                  <Stack.Screen name="ConfirmData" component={ConfirmData} />
                </Stack.Navigator>
              ) : (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                  <Stack.Screen
                    name="HomeInitialStack"
                    component={UserInactiveNavigator}
                  />
                  <Stack.Screen name="MenuDrawer" component={MenuDrawer} />
                  <Stack.Screen name="Faq" component={Faq} />
                  <Stack.Screen name="CheckFaq" component={CheckFaq} />
                  <Stack.Screen name="Suporte" component={Suporte} />
                </Stack.Navigator>
              )}
            </>
          ) : (
            <SendDocuments />
          )}
        </>
      )}
    </NavigationContainer>
  );
}
