import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useAppSelector } from "../../store/hooks";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function Element(props: { name: string; minPrice: number; maxPrice: number }) {
  return (
    <TouchableOpacity className="mb-5 flex h-28 w-full flex-row justify-between rounded-xl bg-white p-3">
      <View className=" flex w-1/2 flex-col justify-around">
        <View className="flex flex-row space-x-1">
          <Text className="font-vazir">تومان</Text>
          <Text className="font-vazir">
            {Intl.NumberFormat("fa").format(props.maxPrice)}
          </Text>
          <Text className="font-vazir">تا</Text>
          <Text className="font-vazir">
            {Intl.NumberFormat("fa").format(props.minPrice)}
          </Text>
        </View>
        <View className="flex flex-row space-x-2">
          <AntDesign name="upcircle" size={24} color="tomato" />
          <Text className="font-vazir">
            {Intl.NumberFormat("fa").format(
              Math.round(
                100 *
                  Math.abs(
                    (props.minPrice - props.maxPrice) /
                      ((props.minPrice + props.maxPrice) / 2)
                  )
              )
            )}
            %
          </Text>
        </View>
      </View>
      <View className=" w-1/2 justify-around">
        <Text className="font-vazir text-xl pr-3">{props.name}</Text>
        <Text></Text>
      </View>
    </TouchableOpacity>
  );
}

export default function Products({ route }: any) {
  const item = useAppSelector((items) => items.company);

  const data = item.filter((y) => y.productName === route.params.name);

  const useData: { [key: string]: [number, number, string] } = {};

  for (let i of data) {
    const list = data
      .filter((e) => e.listName === i.listName)
      .map((b) => b.Price);
    useData[i.listName] = [Math.min(...list), Math.max(...list), i.Name];
  }

  return (
    <View className="grow">
      <View className="p-5 ">
        <FlatList
          data={Object.entries(useData)}
          renderItem={({ item }) => (
            <Element
              name={item[1][2]}
              minPrice={item[1][0]}
              maxPrice={item[1][1]}
            />
          )}
        />
      </View>
    </View>
  );
}
