import { Image } from "react-native"
import { StyleSheet } from "react-native";

export const styles = {
    container: {
      paddingTop: 50,
    },
    s: {
      width: 50,
      height: 50,
    },
    m: {
      width: 66,
      height: 58,
    },
    xl: {
      minHeight: 58
    }
  };

export const Logo = ({size}) => {
    size = size ? size:'s';

    return (
        <Image source={require('../assets/icon.png')} style={StyleSheet.create(styles[size])} />
    )
}