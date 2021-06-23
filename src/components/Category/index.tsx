import React from 'react';
import { View , Text} from 'react-native'
import { SvgProps } from 'react-native-svg'
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type CategoryProps = RectButtonProps &  {
  title: string,
  icon: React.FC<SvgProps>,
  checked?: boolean 
}
export function Category({ 
  title,
  icon: Icon, 
  checked = true,
  ...rest
} : CategoryProps) {

  const {secondary50, secondary70} = theme.colors;
  
  return (
    <RectButton
    {...rest}
    >
         <LinearGradient
          style={styles.container}
          colors={[secondary50, secondary70]}
          >
            <View 
              style={[styles.content, {opacity: checked ? 1 : 0.4}]}
            >
              <View 
                style={checked ? styles.checked : styles.check} 
              />

              <Icon 
                  width={48}
                  height={48}
                />

              <Text style={styles.title}>
                {title}
              </Text>

            </View>
          </LinearGradient>
    </RectButton>
    
    
  );
}

