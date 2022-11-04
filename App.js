import { NativeBaseProvider } from "native-base";
import React from "react";
import AppNavigation from "./src/frameworks/navigations";

export default function App() {
  return (
    <NativeBaseProvider>
      <AppNavigation />
    </NativeBaseProvider>
  );
}
