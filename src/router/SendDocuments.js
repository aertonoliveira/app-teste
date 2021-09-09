import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SendDocuments from "../pages/SendDocuments";
import SendDocumentsDescription from "../pages/Auth/SendDocuments";
import SendDocumentsFace from "../pages/Auth/SendDocumentsFace";
import SendDocumentsReverse from "../pages/Auth/SendDocumentsReverse";

import Document from "../pages/Document";
import DocumentFace from "../pages/DocumentFace";
import DocumentReverse from "../pages/DocumentReverse";

import Menu from "./Menu";

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
      <Stack.Screen name="SendDocuments" component={SendDocuments} />
      <Stack.Screen
        name="SendDocumentsDescription"
        component={SendDocumentsDescription}
      />
      <Stack.Screen name="SendDocumentsFace" component={SendDocumentsFace} />
      <Stack.Screen
        name="SendDocumentsReverse"
        component={SendDocumentsReverse}
      />

      <Stack.Screen name="Document" component={Document} />
      <Stack.Screen name="DocumentFace" component={DocumentFace} />
      <Stack.Screen name="DocumentReverse" component={DocumentReverse} />

      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
}
