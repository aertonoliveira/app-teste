import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import PropTypes from "prop-types";

import Auth from "./router/Auth";
import Application from "./router/Application";

export default function Routes({ signed }) {
  return (
    <NavigationContainer independent={1}>
      {signed ? <Application /> : <Auth />}
    </NavigationContainer>
  );
}

Routes.propTypes = {
  signed: PropTypes.bool,
};

Routes.defaultProps = {
  signed: null,
};
