import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20
  },  
  title: {  
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    marginBottom: 4,
  },
  type: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  }

});