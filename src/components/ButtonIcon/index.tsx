import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { View, Image, Text} from 'react-native';

import { styles } from './styles';
import DiscordImg from '../../assets/discord.png'

type ButtonIconProps = RectButtonProps & {
  text: string,
}

export function ButtonIcon({ text , ...rest} : ButtonIconProps){
  return (
    <RectButton
      style={styles.container} 
      {...rest}
    >
    <View style={styles.iconWrapper}>
      <Image source={DiscordImg} style={styles.icon} />
    </View>

    <Text style={styles.title}>
      {text}
    </Text>
  </RectButton>
  );
}

