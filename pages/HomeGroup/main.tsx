// base
import * as React from "react";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/core";

const data = [
  [
    0,
    "ironTools",
    "آهن آلات",
    "bg-iron",
    <Entypo name="tools" size={24} color="black" />,
  ],
  [
    1,
    "tools",
    "ابزار آلات",
    "bg-abzar",
    <FontAwesome5 name="tools" size={24} color="black" />,
  ],
  [
    2,
    "machinery",
    "ماشین آلات",
    "bg-mashin",
    <MaterialCommunityIcons name="wheel-barrow" size={24} color="black" />,
  ],
  [
    3,
    "buildingMaterials",
    "مصالح ساختمانی",
    "bg-sakhteman",
    <FontAwesome name="building" size={24} color="black" />,
  ],
  [
    4,
    "material",
    "مواد اولیه",
    "bg-avalie",
    <Fontisto name="first-aid-alt" size={24} color="black" />,
  ],
  [
    5,
    "medicinalSubstances",
    "مواد دارویی",
    "bg-daro",
    <MaterialCommunityIcons name="pill" size={24} color="black" />,
  ],
  [
    6,
    "woodPaper",
    "چوب و کاغذ",
    "bg-wood",
    <MaterialCommunityIcons name="notebook" size={24} color="black" />,
  ],
  [
    7,
    "foodStuffs",
    "مواد غذایی",
    "bg-food",
    <Ionicons name="fast-food" size={24} color="black" />,
  ],
];

function Element(props: {
  name: string;
  color: string;
  icon: any;
  onPress: string;
}) {
  type RootStackParamList = {
    ProductsPage: { name: string; header: string } | undefined;
  };

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      className={`m-2 h-44 w-44 items-center justify-center rounded-lg ${props.color}`}
      onPress={() =>
        navigation.navigate("ProductsPage", {
          name: props.onPress,
          header: props.name,
        })
      }
    >
      {props.icon}
      <Text className="text-xl font-bold">{props.name}</Text>
    </TouchableOpacity>
  );
}

export default function Main() {
  return (
    <View className="flex grow flex-col items-center justify-start">
      <View className="flex h-28 w-full flex-row justify-between p-5 pt-10 ">
        <View className="flex w-20 flex-row items-center justify-around">
          <Entypo name="grid" size={32} color="tomato" />
          <AntDesign name="setting" size={32} color="gray" />
        </View>
        <View className="right-1 flex flex-row items-center justify-around">
          <Text className="-bottom-2 right-2 text-center font-marhey text-2xl ">
            دکان
          </Text>
          <Entypo name="shop" size={32} color="gray" />
        </View>
      </View>
      <View className="w-full flex-1 items-center justify-start">
        <FlatList
          scrollEnabled={true}
          data={data}
          keyExtractor={(e) => e[0].toString()}
          numColumns={2}
          renderItem={(e) => (
            <Element
              onPress={e.item[1].toString()}
              name={e.item[2].toString()}
              color={e.item[3].toString()}
              icon={e.item[4]}
            />
          )}
        />
      </View>
    </View>
  );
}
