import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CategoryList } from '../../components/CategoryList';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { Background } from '../../components/Background';


import { styles } from './styles';

export function Home() {
  const navigation = useNavigation();

  const [category, setCategory] = useState('');

  
  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }  
  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails')
  }  
  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate')
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
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'      
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'      
    },
    
  ]


  return (

    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd 
          onPress={handleAppointmentCreate}
        />
      </View>
    
      <CategoryList 
        categorySelected={category}
        setCategory={handleCategorySelect}
        // hasCheckedBox={true}
      />

      <View style={styles.content}>
        <ListHeader 
          title="Partidas marcadas"
          subTitle="Total 6"
        />

        <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
            <Appointment 
              data={item} 
              onPress={handleAppointmentDetails}
              />            
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>
  );  
}