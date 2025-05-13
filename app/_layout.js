import { Stack } from "expo-router";
import { View, Pressable } from "react-native";
import { Link } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';


export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
        headerTitle: "",
        headerLeft: () => {},
        headerRight: () => (
          <View style={{ backgroundColor: "blue", paddingRight: 12 }}>
            <Link href="/about" asChild>
              <Pressable>
                <Entypo name="info-with-circle" size={24} color="white" />
              </Pressable>
            </Link>
          </View>
        ),
        headerRightContainerStyle: {
          
          overflow: "visible",
        },
      }}
    />
  );
}