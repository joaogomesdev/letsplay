import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { GuildProps } from '../../components/Guild';

import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';
import { api } from '../../services/api';

import { styles } from './styles';

type GuildsProps = {
  handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelected }: GuildsProps){
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds');

    setGuilds(response.data)
    setLoading(false)
  }

  useEffect(() => {
      fetchGuilds()
  },[guilds])

  return (
    <View style={styles.container}>
     { 
     loading ? <Load /> :
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
      }
    </View>
  );
}