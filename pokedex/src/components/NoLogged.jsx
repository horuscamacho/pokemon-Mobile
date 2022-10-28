import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function NoLogged() {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.text}>Para poder acceder a favoritos debes iniciar sesión</Text>
      <Button title="Ir al Login" onPress={() => navigation.navigate("AccountNavigation")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 50
  },
  text:{
    textAlign: "center",
    marginBottom: 10
  }
});
