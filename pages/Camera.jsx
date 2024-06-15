import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { purpleExtra, white } from "../customs/colors";
import { Feather } from "@expo/vector-icons";

export default function Camera() {
  const [facing, setFacing] = useState("front");
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    if (!permission || !permission.granted) {
      requestPermission();
    }
  }, [permission, requestPermission]); //Fires immediately

  if (!permission) {
    return <View />; //This has to be like this idk why, in documentation this will break
  }

  // Now if you don't want the permisson to fire, to make it available all the time use this

  // if (!permission.granted) {
  //
  //   return (
  //     <SafeAreaView style={styles.container}>
  //       <Header />
  //       <View
  //         style={[
  //           styles.videoContainer,
  //           { backgroundColor: backgroundOpacitiy },
  //         ]}
  //       >
  //         {/*  */}
  //         <View style={styles.permission}>
  //           <MediumFont style={{ textAlign: "center" }}>
  //             We need your permission to show the camera
  //           </MediumFont>
  //           <Pressable
  //             onPress={requestPermission}
  //             style={styles.allowPermisson}
  //           >
  //             <HeaderMedium style={{ color: white }}>Allow</HeaderMedium>
  //           </Pressable>
  //         </View>
  //         {/*  */}
  //       </View>
  //     </SafeAreaView>
  //   );
  // }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.videoContainer}>
        <CameraView facing={facing} style={styles.camera}>
          <TouchableOpacity
            onPress={toggleCameraFacing}
            style={styles.changePosition}
          >
            <Feather name="rotate-ccw" size={30} color={white} />
          </TouchableOpacity>
        </CameraView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
    gap: 15,
  },
  videoContainer: {
    borderWidth: 2,
    borderColor: purpleExtra,
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  // permission: {
  //   borderColor: purple,
  //   borderWidth: 2,
  //   width: "80%",
  //   aspectRatio: 4 / 3,
  //   borderRadius: 8,
  //   padding: 20,
  //   alignItems: "center",
  //   justifyContent: "space-between",
  // },
  // allowPermisson: {
  //   width: "100%",
  //   backgroundColor: purpleExtra,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: 50,
  //   borderRadius: 8,
  // },
  camera: {
    flex: 1,
    width: "100%",
    position: "relative",
  },
  changePosition: {
    position: "absolute",
    right: 10,
    bottom: 10,
    backgroundColor: purpleExtra,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
