import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-[#ff6d86] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/images/loading.gif")}
        className="h-96 w-96"
        animation="slideInUp"
        iterationCount={1}
      />
      <Animatable.Text
        animation={"slideInUp"}
        iterationCount={1}
        className="px-4 pb-4 text-lg font-bold text-center text-white"
      >
        레스토랑이 주문을 수락하기를 기다리고 있습니다!
      </Animatable.Text>
      <Progress.Circle size={60} color="white" indeterminate={true} />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;

const styles = StyleSheet.create({});
