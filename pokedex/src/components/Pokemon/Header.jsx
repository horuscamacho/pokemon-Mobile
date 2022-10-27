import { StyleSheet, View, Text, Image } from "react-native";
import { capitalize } from "lodash";
import React from "react";
import getColorPokemonBy from "../../utils/getColorByPokemonTag";

export default function Header(props) {
  const { name, id, image, type } = props;
  const color = getColorPokemonBy(type);

  const bgStyle = [{ backgroundColor: color, ...styles.bg }];

  return (
    <>
      <View style={bgStyle} />
      <View style={styles.header}>
        <Text style={styles.name}>{capitalize(name)}</Text>
        <Text style={styles.order}>#{`${id}`.padStart(3,0)}</Text>
      </View>
      <View style={styles.contentImg}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{scaleX: 2}]
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 70
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 27,
    marginLeft: 20,
    
  },
  order: {
    color: "white",
    fontWeight: "bold",
    marginRight: 20 
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",   
  },
  image: {
    width: 350,
    height: 350,
    shadowOffset: {width: -1, height: 4},
    shadowColor: "#000000",
    shadowOpacity: .7,
    shadowRadius: 3
  },
});
