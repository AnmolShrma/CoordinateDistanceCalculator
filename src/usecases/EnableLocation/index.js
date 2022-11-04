import React from "react";
import EnableLocationScreen from "../../scenes/EnableLocationScreen";

const EnableLocation = ({ navigation }) => {
  const checkLocationPermission = () => {
    navigation.navigate("SubmitLongLat");
  };
  return <EnableLocationScreen onPress={checkLocationPermission} />;
};

export default EnableLocation;
