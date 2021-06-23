import React from 'react';
import { RectButton, RectButtonProps, ScrollView } from 'react-native-gesture-handler'
import { View, Image, Text} from 'react-native';

import { styles } from './styles';

type ListHeanderProps = {
  title: string,
  subTitle: string,
}

export function ListHeander({title, subTitle}: ListHeanderProps){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subTitle}>
        {subTitle}
      </Text>
    </View>
  );
}

