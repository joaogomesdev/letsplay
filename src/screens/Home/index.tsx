import React, { useEffect } from 'react';
import { useState } from 'react';
import { View } from 'react-native'
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategoryList } from '../../components/CategoryList';

import { Profile } from '../../components/Profile';
import { styles } from './styles';


export function Home() {

  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
      categoryId === category ? setCategory('') : setCategory(categoryId)
  }

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
      </View>
    </View>
    
    
  );
}

