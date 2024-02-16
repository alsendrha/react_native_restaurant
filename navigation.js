import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen
          name="Basket"
          component={BasketScreen}
          options={{ presentation: "modal", headerShown: false }}
        />
        <Stack.Screen
          name="PreparingOrder"
          component={PreparingOrderScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen name="Delivery" component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});