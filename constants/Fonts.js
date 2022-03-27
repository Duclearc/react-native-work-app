import { StyleSheet } from "react-native";
const defaultFont = "OpenSans_300Light";
const boldFont = "OpenSans_700Bold";
const rem = (fontSize, increaseForMobile = 2) => 0.625 * 16 * fontSize * increaseForMobile;

export const fontStyles = {
  lemFont: {
      fontFamily: defaultFont,
      color: "#333333",
      fontSize: rem(1.1)
    },
    lemLink: {
      fontFamily: defaultFont,
      color: "#073d6b"
    },
    lemBold: {
      fontFamily: boldFont,
      color: "#2a2c34"
    },
    lemHeading: {
      lineHeight: rem(2.5),
      fontSize: rem(2)
    }
}
export default StyleSheet.create(fontStyles);