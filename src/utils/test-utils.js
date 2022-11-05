/* eslint-disable import/no-extraneous-dependencies */
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import { NativeBaseProvider } from "native-base";

/** Render helper that renders `ui` within `NavigationContainer`. */
export function renderWithNavigation(ui) {
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };

  return render(
    <NativeBaseProvider initialWindowMetrics={inset}>{ui}</NativeBaseProvider>
  );
}
