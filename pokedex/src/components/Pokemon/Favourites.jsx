import React, { useEffect, useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  addPokemonFavouriteApi,
  isPokemonFavouriteApi,
  removePokemonFavouriteApi
} from "../../api/favourite";

export default function Favourites(props) {
  const { id } = props;
  const [isFavourite, setisFavourite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false)
  const Icon = isFavourite ? FontAwesome : FontAwesome5;
  


  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavouriteApi(id);
        setisFavourite(response);
      } catch (error) {
        setisFavourite(false);
      }
    })();
  }, [id, reloadCheck]);

  const onReloadCheckFavourit = () => {
    setReloadCheck((prev) => !prev)
  }

  const addFavourite = async () => {
    try {
      await addPokemonFavouriteApi(id);
      onReloadCheckFavourit()
    } catch (error) {
      console.log("Este es el de AddPokemonFavouriteApi", error);
    }
  };

  const removeFromFavourite = async () => {
    try {
      await removePokemonFavouriteApi(id)
      onReloadCheckFavourit()
    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={isFavourite ? removeFromFavourite : addFavourite}
      style={{ marginRight: 20 }}
    />
  );
}
