import React from 'react';
import { 
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

import { styles } from './styles';
import DiscordImg from '../../assets/discord.png'

type ButtonIconProps = TouchableOpacityProps &{
  text: string,
}

export function ButtonIcon({ text , ...rest} : ButtonIconProps){
  return (
    <TouchableOpacity 
      style={styles.container} 
      {...rest}
    >
    <View style={styles.iconWrapper}>
      <Image source={DiscordImg} style={styles.icon} />
    </View>

    <Text style={styles.title}>
      {text}
    </Text>
  </TouchableOpacity>
  );
}

