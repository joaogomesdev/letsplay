import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text} from 'react-native';

import { styles } from './styles';

type ButtonIconProps = RectButtonProps & {
  text: string,
}

export function Button({ text , ...rest} : ButtonIconProps){
  return (
    <RectButton
      style={styles.container} 
      {...rest}
    >
    <Text style={styles.title}>
      {text}
    </Text>
  </RectButton>
  );
}

