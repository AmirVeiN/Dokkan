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
import { changeDelete } from "../../store/message/slice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
function MessagesItem(props: {
  date: string;
  subject: string;
  message: string;
  id: number;
}) {
  const dispatch = useAppDispatch();

  return (
    <TouchableOpacity
      onLongPress={() =>
        Alert.alert("پاک کردن پیام", "آیا از پاک کردن پیام اطمینان دارید؟", [
          {
            text: "بله",
            style: "default",
            onPress: ()=> dispatch(changeDelete(props.id)),
          },
          {
            text: "خیر",
            style: "default",
          },
        ])
      }
      className="mb-3 flex h-fit w-full flex-col rounded-3xl bg-info"
    >
      <View className="flex h-14 w-full flex-row items-center justify-between p-3 px-7">
        <Text className="font-vazir text-white">{props.subject}</Text>
        <Text className="font-vazir text-white">{props.date}</Text>
      </View>
      <View className="h-fit w-full  items-center justify-start p-5">
        <Text className="p-1 text-center font-vazir text-white">
          {props.message}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default function Message() {
  const items = useAppSelector((item) => item.message);

  return (
    <View className="grow items-center">
      <View className="top-12 h-24 w-[90%] items-center justify-center rounded-b-3xl bg-blue">
        <Text className="top-1 font-vazir text-4xl text-white">پیام ها</Text>
      </View>
      <View className="top-16 h-[79%] w-[90%]">
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <MessagesItem
              date={item.date}
              message={item.message}
              subject={item.subject}
              id={item.id}
            />
          )}
        />
      </View>
    </View>
  );
}
