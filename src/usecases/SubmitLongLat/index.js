import React, { useEffect, useRef, useState } from "react";
import SubmitLongLatScreen from "../../scenes/SubmitLongLatScreen";
import * as Location from "expo-location";
import { Audio, InterruptionModeIOS, InterruptionModeAndroid } from "expo-av";
import { Heading, HStack, Spinner } from "native-base";

const SubmitLongLat = () => {
  const [location, setLocation] = useState(null);
  const [sound, setSound] = React.useState();
  const startSound = useRef(null);
  const playSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/audio/eas_text_tone.mp3")
      );
      setSound(sound);

      await sound.playAsync();
    } catch (err) {
      console.log("Sound initialization error", err);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    Audio.setAudioModeAsync({
      staysActiveInBackground: true,
      interruptionModeIOS: InterruptionModeIOS.DoNotMix,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
    });
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const getDistance = ({ lat1 = 0, lon1 = 0, lat2 = 0, lon2 = 0 }) => {
    const radius = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = radius * c * 1000;
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const calculateDistance = ({ latitude, longitude }) => {
    clearInterval(startSound.current);
    const calculatedDistance = getDistance({
      lat1: location?.coords?.latitude,
      lon1: location?.coords?.longitude,
      lat2: latitude,
      lon2: longitude,
    });
    alert(`Current distance in meters: ${Math.floor(calculatedDistance)}`);
    if (Math.floor(calculatedDistance) > 1000) {
      playSound();
      startSound.current = setInterval(() => playSound(), 2000);
    }
  };

  if (!location) {
    return (
      <HStack flex={1} space={2} alignItems={"center"} justifyContent="center">
        <Spinner size="lg" color="emerald.500" />
        <Heading color="emerald.500" fontSize="lg">
          Loading
        </Heading>
      </HStack>
    );
  }
  return <SubmitLongLatScreen onPress={calculateDistance} />;
};

export default SubmitLongLat;
