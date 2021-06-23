import React, { useEffect } from 'react';
import { useState } from 'react';
import { FlatList, View , Text } from 'react-native'

import { styles } from './styles';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategoryList } from '../../components/CategoryList';
import { ListHeander } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { Appointment } from '../../components/Appointment';



export function Home() {

  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
      categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 ás 20:00',
      description: 'Bla vla vla vla vla vla vla vbla vla vla vla vla vlas'
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Os Mamões',
        icon: null,
        owner: true
      },
      category: '2',
      date: '30/06 ás 19:00',
      description: 'Bla vla vla vla vla vla vla vbla vla vla vla vla vlas'
    },
  ]

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View >
        <CategoryList 
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <View style={styles.content}>
          <ListHeander 
            title="Partidas marcadas"
            subTitle="Total 6"
          />

          <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={( { item } ) => (
              <Appointment 
                data={item}
              />
            )}
          />
        </View>
      </View>
    </View>
    
    
  );
}

