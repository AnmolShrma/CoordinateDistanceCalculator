import {
  Box,
  Button,
  FormControl,
  Input,
  WarningOutlineIcon,
} from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

const SubmitLongLatScreen = ({ onPress }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  return (
    <Box flex={1} alignItems="center" justifyContent={"center"}>
      <FormControl isRequired w="75%" maxW="300px">
        <FormControl.Label>Latitude</FormControl.Label>
        <Input
          keyboardType={"decimal-pad"}
          onChangeText={(value) => setLatitude(value)}
          value={latitude}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please add the Latitude above
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl style={{ marginTop: 10 }} isRequired w="75%" maxW="300px">
        <FormControl.Label>Longitude</FormControl.Label>
        <Input
          keyboardType={"decimal-pad"}
          onChangeText={(value) => setLongitude(value)}
          value={longitude}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please add the Longitude above
        </FormControl.ErrorMessage>
      </FormControl>
      <Button
        isDisabled={!(longitude && latitude)}
        colorScheme="green"
        style={{ width: "50%", marginTop: 30 }}
        onPress={() => onPress({ latitude, longitude })}
      >
        Submit
      </Button>
    </Box>
  );
};

export default SubmitLongLatScreen;

const styles = StyleSheet.create({});
