import React, { useRef, useState, useEffect, useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";

import { Text } from "../../../components/typography/text.component";

import * as S from "./camera.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { RootStackParamList } from "../../../infrastructure/navigation/settings.navigator";

type SettingsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Camera"
>;

type SettingsScreenProps = {
  navigation: SettingsScreenNavigationProp;
};

export const CameraScreen = ({
  navigation,
}: SettingsScreenProps): JSX.Element => {
  const { user } = useContext(AuthenticationContext);

  const cameraRef = useRef<Camera | null>(null);

  const [hasPermission, setHasPermission] = useState(false);

  const snap = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <S.ProfileCamera
      ref={(camera: Camera) => {
        cameraRef.current = camera;
      }}
      type={Camera.Constants.Type.front}
    >
      <TouchableOpacity onPress={snap}>
        <S.InnerSnap />
      </TouchableOpacity>
    </S.ProfileCamera>
  );
};
