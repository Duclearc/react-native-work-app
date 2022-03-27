import {
    OpenSans_300Light,
    OpenSans_700Bold
} from "@expo-google-fonts/open-sans";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from 'react-native';
import { StyledText } from '../components/StyledText';
import { Logo } from '../components/Logo';

export default function Homescreen() {
    return (
        <View style={styles.container}>
            <StyledText>Hello World</StyledText>
            <Logo />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
