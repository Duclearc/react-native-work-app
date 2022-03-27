import {
  OpenSans_300Light,
  OpenSans_700Bold
} from "@expo-google-fonts/open-sans";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Homescreen from "./screens/Homescreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_700Bold
  })
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider>
        <Homescreen />
      </SafeAreaProvider>
    );
  }
};