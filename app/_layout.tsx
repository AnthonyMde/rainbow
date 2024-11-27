import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return <Stack screenOptions={screenOptions}>
      <Stack.Screen name="(home)" />
    </Stack>
}

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
