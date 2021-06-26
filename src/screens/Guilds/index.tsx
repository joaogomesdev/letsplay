import React from 'react';
import { View, FlatList } from 'react-native';
import { GuildProps } from '../../components/Guild';

import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type GuildsProps = {
  handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelected }: GuildsProps){
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Galera do Game',
      icon: 'image.png',
      owner: true
    },
    {
      id: '3',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '4',
      name: 'Galera do Game',
      icon: 'image.png',
      owner: true
    },
    {
      id: '5',
      name: 'Galera do Game',
      icon: 'image.png',
      owner: true
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList 
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild 
            data={item}
            onPress={() => handleGuildSelected(item)} 
          />
        )}    
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 68 , paddingTop: 104}}
        ListHeaderComponent={() => <ListDivider isCentered/>}
        ItemSeparatorComponent={() => <ListDivider isCentered/>}
        style={styles.guilds}
      />
    </View>
  );
}