import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Stack } from "expo-router";

const HomeLayout = () => {
    return <Stack screenOptions={screenOptions} />
}

export default HomeLayout;

const screenOptions: NativeStackNavigationOptions = {
    headerShown: false
}