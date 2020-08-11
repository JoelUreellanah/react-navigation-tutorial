import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { Feather as Icon } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

interface RoutesProps {}

type StackParams = {
  Home: undefined;
};

export type StackNavProps<T extends keyof StackParams> = {
  navigation: StackNavigationProp<StackParams, T>;
  route: RouteProp<StackParams, T>;
};

const Stack = createStackNavigator<StackParams>();

const Tab = createBottomTabNavigator();

const Search = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SearchScreen</Text>
    </View>
  );
};

interface HomeProps {}
const Home = ({}: HomeProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Search") {
            iconName = "search";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

const Routes = ({}: RoutesProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={AppTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
