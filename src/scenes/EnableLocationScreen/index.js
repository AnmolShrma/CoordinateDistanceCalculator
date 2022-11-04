import { Box, Button, Heading } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

const EnableLocationScreen = ({ onPress }) => {
  return (
    <Box flex={1} alignItems="center" justifyContent={"center"}>
      <Heading>Please Enable Location</Heading>
      <Button
        colorScheme="green"
        style={{ width: "50%", marginTop: 30 }}
        onPress={onPress}
      >
        Enable
      </Button>
    </Box>
  );
};

export default EnableLocationScreen;

const styles = StyleSheet.create({});
