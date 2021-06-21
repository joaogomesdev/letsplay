import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background
  },
  image: {
    width: '100%',
    height: 360,
  },
  content : {
    padding: 50,
    marginTop: -100
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 12
  }, 
  subtitle: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 64
  }
});
