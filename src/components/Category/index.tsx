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
  hasCheckedBox?: boolean,
  checked?: boolean 
}
export function Category({ 
  title,
  icon: Icon, 
  hasCheckedBox = false,
  checked = false,
  ...rest
} : CategoryProps) {

  const { secondary50, secondary70, secondary85, secondary40} = theme.colors;
  
  return (
    <RectButton
    {...rest}
    >
         <LinearGradient
            style={styles.container}
            colors={[secondary50, secondary70]}
          >
            <LinearGradient 
              style={[styles.content, {opacity: checked ? 1 : 0.5}]}
              colors={[checked ? secondary85 : secondary50, secondary40 ]}
            >
              {
                hasCheckedBox && (
                  <View 
                  style={checked ? styles.checked : styles.check} 
                />
                )
             
              }

              <Icon 
                  width={48}
                  height={48}
                />

              <Text style={styles.title}>
                {title}
              </Text>

            </LinearGradient>
          </LinearGradient>
    </RectButton>
    
    
  );
}

