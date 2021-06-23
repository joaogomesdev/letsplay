import React from 'react';
import { View , Text, Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type AvatarProps = {
  urlImage: string
}

export function Avatar({ urlImage } : AvatarProps) {
  const {secondary50, secondary70} = theme.colors;

  return (
    <View>
      <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image 
        source={{ uri: urlImage }}
        style={styles.avatar}
      />
    </LinearGradient>

        
    </View>
    
    
  );
}

