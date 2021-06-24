import React, { ReactNode } from 'react';
import { View , Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
 
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { BorderlessButton } from 'react-native-gesture-handler';

type HeaderProps = {
  title: string;
  action?: ReactNode;
}

export function Header({ title, action }: HeaderProps)  {
  const navigation = useNavigation();

  const { secondary40 ,secondary100 , heading} = theme.colors;

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary40, secondary100]}
    >
      <BorderlessButton
        onPress={handleGoBack}
      >
        <Feather 
          name="arrow-left"
          size={24}
          color={heading}
        />
      </BorderlessButton>

      <Text style={styles.title}>
        {title}
      </Text>

      {
        action && (
          <View>
            {action}
          </View>
        )
      }

    </LinearGradient>
  );
}

