import React from 'react';
import { RectButton, RectButtonProps, ScrollView } from 'react-native-gesture-handler'
import { View, Image, Text} from 'react-native';

import { styles } from './styles';
import { categories } from '../../utils/categories';
import { Category } from '../Category';

type CategoryListProps = {
  categorySelected: string,
  hasCheckedBox?: boolean,
  setCategory: (categoryId: string) => void;
}

export function CategoryList({ 
  categorySelected , 
  setCategory,
  hasCheckedBox = false,
}: CategoryListProps){
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => (
          <Category 
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
            hasCheckedBox={hasCheckedBox}
          />
        ))
      }
    </ScrollView>
  );
}

