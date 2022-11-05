import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Location from "expo-location";
import { View } from "native-base";
import React, { useEffect, useState } from "react";
import EnableLocation from "../../usecases/EnableLocation";
import SubmitLongLat from "../../usecases/SubmitLongLat";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const [initialRouteName, setInitialRouteName] = useState(null);
  useEffect(() => {
    (async () => {
      let { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        setInitialRouteName("EnableLocation");
        return;
      }
      setInitialRouteName("SubmitLongLat");
    })();
  }, []);

  if (!initialRouteName) {
    return <View />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen
          name="EnableLocation"
          component={EnableLocation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SubmitLongLat"
          component={SubmitLongLat}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
