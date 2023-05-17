import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useAppSelector } from "../../store/hooks";

function Element(props: { CompanyName: string; Price: number }) {
  return (
    <TouchableOpacity className="mb-5 flex h-28 w-full flex-row items-center justify-between rounded-xl bg-white p-3">
      <View className="flex flex-row space-x-2">
        <Text className="font-vazir text-base text-green">تومان</Text>
        <Text className="font-vazir text-base">
          {Intl.NumberFormat("fa").format(props.Price)}
        </Text>
      </View>
      <Text className="pr-2 font-vazir text-base">{props.CompanyName}</Text>
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
            <Element CompanyName={item[1].CompanyName} Price={item[1].Price} />
          )}
        />
      </View>
    </View>
  );
}
