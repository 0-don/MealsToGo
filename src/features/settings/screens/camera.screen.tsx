import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import { Camera } from "expo-camera";
import React, { useContext, useEffect, useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { RootStackParamList } from "../../../infrastructure/navigation/settings.navigator";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import * as S from "./camera.styles";

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
      const { status } = await Camera.requestCameraPermissionsAsync();
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
      ratio={"16:9"}
    >
      <TouchableOpacity onPress={snap}>
        <S.InnerSnap />
      </TouchableOpacity>
    </S.ProfileCamera>
  );
};
