import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import SingIn from "../pages/Auth/SingIn";
import SingUp from "../pages/Auth/SingUp";
import SendDocuments from "../pages/Auth/SendDocuments";
import SendDocumentsReverse from "../pages/Auth/SendDocumentsReverse";
import SendDocumentsFace from "../pages/Auth/SendDocumentsFace";
import Document from "../pages/Document";
import DocumentFace from "../pages/DocumentFace";
import DocumentReverse from "../pages/DocumentReverse";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import SelectService from "../pages/SelectService";

import IntroApp from "../pages/IntroApp";
import IntroAppSecond from "../pages/IntroApp/IntroAppSecond";
import IntroAppThird from "../pages/IntroApp/IntroAppThird";
import IntroAppFourth from "../pages/IntroApp/IntroAppFourth";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function IntroStack() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 0,
        },
      }}
    >
      <Tab.Screen name="IntroApp" component={IntroApp} />
      <Tab.Screen name="IntroAppSecond" component={IntroAppSecond} />
      <Tab.Screen name="IntroAppThird" component={IntroAppThird} />
      <Tab.Screen name="IntroAppFourth" component={IntroAppFourth} />
    </Tab.Navigator>
  );
}

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
      <Stack.Screen name="SingIn" component={SingIn} />
      <Stack.Screen name="SingUp" component={SingUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

      {/* documents */}

      <Stack.Screen name="SendDocuments" component={SendDocuments} />
      <Stack.Screen name="Document" component={Document} />

      <Stack.Screen
        name="SendDocumentsReverse"
        component={SendDocumentsReverse}
      />
      <Stack.Screen name="DocumentReverse" component={DocumentReverse} />

      {/* documents with face */}

      <Stack.Screen name="SendDocumentsFace" component={SendDocumentsFace} />
      <Stack.Screen name="DocumentFace" component={DocumentFace} />

      {/* define service */}
      <Stack.Screen name="SelectService" component={SelectService} />

      <Stack.Screen name="Intro" component={IntroStack} />
    </Stack.Navigator>
  );
}
