import React, { useState } from 'react';
import { View , Text, TextInput, TextInputProps} from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';




export function TextArea({...rest}: TextInputProps)  {
  return ( 
    <TextInput 
      style={styles.container}
      {...rest}
    />
  );
}

