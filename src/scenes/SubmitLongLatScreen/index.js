import {
  Box,
  Button,
  FormControl,
  Input,
  WarningOutlineIcon,
} from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

const SubmitLongLatScreen = ({ onPress }) => {
  return (
    <Box flex={1} alignItems="center" justifyContent={"center"}>
      <FormControl isRequired w="75%" maxW="300px">
        <FormControl.Label>Latitude</FormControl.Label>
        <Input />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please add the Latitude above
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl style={{ marginTop: 10 }} isRequired w="75%" maxW="300px">
        <FormControl.Label>Longitude</FormControl.Label>
        <Input />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please add the Longitude above
        </FormControl.ErrorMessage>
      </FormControl>
      <Button
        colorScheme="green"
        style={{ width: "50%", marginTop: 30 }}
        onPress={onPress}
      >
        Submit
      </Button>
    </Box>
  );
};

export default SubmitLongLatScreen;

const styles = StyleSheet.create({});
