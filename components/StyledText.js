import { Text } from 'react-native';
import Fonts from '../constants/Fonts';

export function StyledText(props) {
  return <Text {...props} style={[Fonts.lemFont, props.style]} />;
}
