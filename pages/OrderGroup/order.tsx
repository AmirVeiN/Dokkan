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

export function Element(props: {
  companyName: string;
  price: number;
  listName: string;
  Name: string;
}) {
  return (
    <View className="mb-16 h-52 w-full">
      <View className="flex flex-row items-center justify-around ">
        <View className="flex h-52 w-44 flex-col justify-around rounded-xl bg-[#DB005B]  p-3">
          <View className="flex flex-col items-center space-y-2">
            <Text className="font-vazir text-xl text-white">نام محصول</Text>
            <Text className="font-vazir text-xl text-white">{props.Name}</Text>
          </View>
          <View className="flex flex-col items-center justify-center space-y-2">
            <Text className="font-vazir text-xl text-white">نام لاتین</Text>
            <Text className="font-vazir text-xl text-white">
              {props.listName}
            </Text>
          </View>
        </View>
        <View className="flex w-1/2 flex-col space-y-3">
          <View className="h-24 w-full items-center justify-center rounded-xl bg-[#DB005B]">
            <Text className="font-vazir text-xl text-white">
              {props.companyName}
            </Text>
          </View>
          <View className="h-24 w-full items-center justify-center rounded-xl bg-[#DB005B]">
            <Text className="top-1 font-vazir text-xl text-white">
              {Intl.NumberFormat("fa").format(props.price)} تومان
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
export default function Order() {
  const items = useAppSelector((item) => item.reciept);
  var allPrice = 0;
  var len = 0;
  for (let i of items) {
    allPrice += i.Price;
  }
  for (let i of items) {
    len++;
  }
  return (
    <View className="grow ">
      <View className="flex h-40 w-full flex-row items-end justify-around space-x-1 p-2">
        <View className="flex h-24 w-44 flex-col items-center justify-evenly rounded-xl bg-[#DB005B]">
          <Text className="font-vazir text-base text-white">
            مقدار سفارشات فعال
          </Text>
          <Text className="text-center font-vazir text-base text-white">
            {Intl.NumberFormat("fa").format(len)} عدد
          </Text>
        </View>
        <View className="flex h-24 w-48 flex-col items-center justify-evenly rounded-xl bg-[#DB005B]">
          <Text className="font-vazir text-base text-white">
            قیمت کل سفارشات فعال
          </Text>
          <View className="flex flex-row space-x-1">
            <Text className="font-vazir text-base text-white">تومان</Text>
            <Text className="font-vazir text-base text-white">
              {Intl.NumberFormat("fa").format(allPrice)}
            </Text>
          </View>
        </View>
      </View>
      <View className="h-[80%] p-2 mt-10">
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <Element
              companyName={item.CompanyName}
              price={item.Price}
              Name={item.Name}
              listName={item.listName}
            />
          )}
        />
      </View>
    </View>
  );
}
