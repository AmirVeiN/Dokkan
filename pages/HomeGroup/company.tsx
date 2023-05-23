import {
  View,
  Modal,
  Alert,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { add } from "../../store/reciept/slice";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

function Element(props: {
  CompanyName: string;
  Price: number;
  Name: string;
  productName: string;
  listName: string;
}) {
  const dispatch = useAppDispatch();
  const [modalVisible, modalVisibleHandler] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => modalVisibleHandler(true)}
      className="mb-5 flex h-28 w-full flex-row items-center justify-between rounded-xl bg-white p-3"
    >
      <View className="flex flex-row space-x-2">
        <Text className="font-vazir text-base text-green">تومان</Text>
        <Text className="font-vazir text-base">
          {Intl.NumberFormat("fa").format(props.Price)}
        </Text>
      </View>
      <Text className="pr-2 font-vazir text-base">{props.CompanyName}</Text>
      <View className="absolute grow">
        <Modal
          animated={true}
          animationType={"fade"}
          transparent={false}
          visible={modalVisible}
        >
          <View className="grow ">
            <ImageBackground
              resizeMode="contain"
              className="flex grow flex-col justify-evenly p-10 "
              source={require("./resid6.png")}
            >
              <View className="mt-16">
                <View className="flex h-16 w-full flex-row items-center justify-between">
                  <TouchableOpacity
                    onPress={() => modalVisibleHandler(false)}
                    className="h-12 w-12 items-center justify-center"
                  >
                    <Ionicons
                      name="ios-arrow-undo-sharp"
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>
                  <View className="flex flex-row space-x-2">
                    <View className="flex flex-row items-center space-x-2">
                      <Text className="font-vazir text-lg">{props.Name}</Text>
                      <Text className="font-vazir text-lg">سفارش</Text>
                    </View>
                    <TouchableOpacity className="h-12 w-12 items-center justify-center">
                      <MaterialCommunityIcons
                        name="bell-ring-outline"
                        size={24}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View className=" -top-3 h-80 px-1">
                <View className="flex grow flex-row items-start justify-between">
                  <View className="top-1 flex flex-row space-x-2">
                    <Text className="font-vazir text-xl  font-bold text-green">
                      تومان
                    </Text>
                    <Text className="font-vazir text-lg">
                      {Intl.NumberFormat("fa").format(props.Price)}
                    </Text>
                  </View>
                  <Text className="font-vazir text-xl font-bold">
                    قیمت ........................
                  </Text>
                </View>
              </View>
              <View className="-top-10">
                <View className="h-24 w-full items-center justify-center ">
                  <TouchableOpacity
                    onLongPress={() => (
                      Alert.alert(
                        "سفارش شما با موفقیت ثبت شد",
                        "میتوانید در بخش سفارشات پیگیری کنید",
                        [{ text: "باشه", style: "destructive" }]
                      ),
                      dispatch(
                        add({
                          CompanyName: props.CompanyName,
                          productName: props.productName,
                          listName: props.listName,
                          Name: props.Name,
                          Price: props.Price,
                        })
                      )
                    )}
                    className="h-14 w-36 items-center justify-center rounded-xl bg-resid"
                  >
                    <Text className="top-0.5 font-vazir text-2xl text-white">
                      سفارش
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  );
}

export default function Company({ route }: any) {
  const dataItem = useAppSelector((item) => item.company).filter(
    (e) => e.listName === route.params.name
  );
  return (
    <View className="grow">
      <View className="p-5">
        <FlatList
          data={Object.entries(dataItem)}
          renderItem={({ item }) => (
            <Element
              CompanyName={item[1].CompanyName}
              productName={item[1].productName}
              listName={item[1].listName}
              Name={item[1].Name}
              Price={item[1].Price}
            />
          )}
        />
      </View>
    </View>
  );
}
