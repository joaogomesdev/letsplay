import React from 'react';
import { View , Text, ImageBackground} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';


import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import  BannerImg  from '../../assets/banner.png';
import { ListHeader } from '../../components/ListHeader';
import { FlatList } from 'react-native-gesture-handler';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

export function AppointmentDetails()  {
  const members = [
    {
      id: '1',
      username: 'Dara Alves',
      avatar_url: 'https://github.com/JoaoGomes5.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Dara Alves',
      avatar_url: 'https://github.com/Diego3g.png',
      status: 'offline'
    },
    {
      id:'3',
      username: 'Dara Alves',
      avatar_url: 'https://github.com/JoaoGomes5.png',
      status: 'online'
    },
    {
      id: '4',
      username: 'Dara Alves',
      avatar_url: 'https://github.com/Diego3g.png',
      status: 'offline'
    },
  ]

  return (
    <Background>
      <Header 
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto 
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground 
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}> 
            Lendários
          </Text>
          
          <Text style={styles.subTitle}>
            Bla bla bla bla bla bla bla bla bla bla bla bla 
          </Text>

        </View>

      </ImageBackground>

      <ListHeader 
          title="Jogadores"
          subTitle="Total 3"
      />

      <FlatList 
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
      <ButtonIcon 
        text="Entrar na partida"  
        />

      </View>


    </Background>
  );
}

