// base
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { pagesType } from "./config";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// pages
import HomePage from "./HomeGroup/main";
import MessagePage from "./MessageGroup/message";
import OrderPage from "./OrderGroup/order";
import CompanyPage from "./HomeGroup/company";
import ProductsPage from "./HomeGroup/products";
function HomeStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomePage"
        component={HomePage}
      />
      <Stack.Screen
        options={{ headerTitle: "" }}
        name="CompanyPage"
        component={CompanyPage}
      />
      <Stack.Screen
        options={({ route }: any) => ({ title: route.params.header , headerTitleAlign : "center"})}
        name="ProductsPage"
        component={ProductsPage}
      />
    </Stack.Navigator>
  );
}

export default function Pages() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Homes"
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: { padding: 4 },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        options={{
          title: "سفارشات",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="shopping-cart" size={24} color={color} />
          ),
        }}
        name="Order"
        component={OrderPage}
      />
      <Tab.Screen
        options={{
          title: "صفحه اصلی",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
        name="Homes"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          title: "پیام ها",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="message-text"
              size={24}
              color={color}
            />
          ),
        }}
        name="Message"
        component={MessagePage}
      />
    </Tab.Navigator>
  );
}
