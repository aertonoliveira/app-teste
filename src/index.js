import React, { Component } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Alert } from "react-native";
import SplashScreen from "react-native-splash-screen";

import { store, persistor } from "./store";
import App from "./App";
import colors from "./utils/GlobalStyles/colors";

class Index extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <StatusBar
              barStyle="light-content"
              backgroundColor={colors.Background}
            />
            <App />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

export default Index;
