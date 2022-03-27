import { Platform, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import Config from "react-native-config";

export default function Website(props) {
    const url = props.url || Config.WEBSITE_URL;


    const styles = StyleSheet.create({
        ...Platform.select({
            ios: {
                marginTop: 30
            },
            android: {
                marginBottom: 50
            }
        })
    });

    return (
        <SafeAreaProvider>
            <WebView source={{ uri: url }} style={styles} />
        </SafeAreaProvider>
    );
};