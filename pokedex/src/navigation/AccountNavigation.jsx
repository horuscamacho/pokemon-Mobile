import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AccountScreen from "../screens/Account";

const Stack = createNativeStackNavigator();
//AQUI CAMBIE UNAS COSAS
export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountScreen" //AQUI CAMBIE UNAS COSAS
        component={AccountScreen}
        options={{ title: "Mi cuenta" }}
      />
    </Stack.Navigator>
  );
}
