import React from 'react';
import { RectButton, RectButtonProps, ScrollView } from 'react-native-gesture-handler'
import { View, Image, Text} from 'react-native';

import { styles } from './styles';
type GuildProps = {
  id: string,
  name: string,
  icon: null,
  owner: boolean
}

export type AppointmentDataProps = {
  id: string,
  guild: GuildProps,
  category: string,
  date: string,
  description: string
};


type AppointmentProps = RectButton & {
  data: AppointmentDataProps
}

export function GuildIcon(){

  return (
   <Image 
    source={{ uri: "https://cdn.discordapp.com/icons/624689100292751431/a_c0830a183ef04769ac4b21ac55e4b21d.png"}}
    style={styles.image}
    resizeMode="cover"
   />
  );
}

