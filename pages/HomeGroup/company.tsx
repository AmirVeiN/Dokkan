import {
  View,
  Modal,
  Alert,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useAppSelector } from "../../store/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { BlurView } from "@react-native-community/blur";
import { Ionicons } from "@expo/vector-icons";

function Element(props: { CompanyName: string; Price: number; Name: string }) {
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
      <View className="grow absolute">
        <Modal
          animated={true}
          animationType={"fade"}
          transparent={false}
          visible={modalVisible}
        >
          <View className="grow p-12">
            <View className="flex grow flex-col rounded-xl bg-prime-100">
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
              <View className="flex grow flex-row items-start justify-between p-4">
                <View className="flex flex-row items-center justify-center space-x-2">
                  <Text className="font-vazir text-xl font-bold text-green">
                    تومان
                  </Text>
                  <Text className="font-vazir text-lg">
                    {Intl.NumberFormat("fa").format(props.Price)}
                  </Text>
                </View>
                <Text className="font-vazir text-xl font-bold">قیمت</Text>
              </View>
              <View className="h-24 w-full items-center justify-center">
                <TouchableOpacity onLongPress={()=> Alert.alert("سفارش شما با موفقیت ثبت شد" ,"میتوانید در بخش سفارشات پیگیری کنید")} className="h-14 w-36 items-center justify-center rounded-xl bg-red">
                  <Text className="font-vazir text-xl font-bold text-white">
                    سفارش
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
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
              Name={item[1].Name}
              Price={item[1].Price}
            />
          )}
        />
      </View>
    </View>
  );
}
