import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "Map",
  },
  {
    id: "458",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "Eats",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
          disabled={!origin}
        >
          <View className={!origin && "opacity-20"}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{
                uri: item.image,
              }}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
            <View className="p-2 bg-black rounded-full w-10 mt-4">
              <Icon name="arrowright" color={"white"} type="antdesign" />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
