import React from 'react';
import { 
  View , 
  Text, 
  ImageBackground, 
  Alert,
  Platform, 
  Share
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';


import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import  BannerImg  from '../../assets/banner.png';
import { ListHeader } from '../../components/ListHeader';
import { FlatList } from 'react-native-gesture-handler';
import { Member, MemberDataProps } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useRoute } from '@react-navigation/native';
import { AppointmentProps } from '../../components/Appointment';
import { api } from '../../services/api';
import { useState } from 'react';
import { useEffect } from 'react';
import { Load } from '../../components/Load';
import { BackHandler } from 'react-native';

type Params = {
  guildSelected: AppointmentProps
}

type GuildWidget = {
  id: string,
  name: string,
  instant_invite: string,
  members: MemberDataProps[],
}


export function AppointmentDetails()  {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true)
  const route = useRoute();

  const { guildSelected } = route.params as Params;

  
  async function fecthGuildWidget() {
    try {
      const response = await api.get(`guilds/${guildSelected.guild.id}/widget.json`);
      setWidget(response.data)
      setLoading(false)
    } catch  {
      Alert.alert('Algo correu mal :( Verifica se o servidor tem o Widget ativado :)')
    } finally {
      setLoading(false)
    }
  }

  useEffect (() => {
    fecthGuildWidget()
  },[])


  function handleShareInvite() {
    const message = Platform.OS === 'ios' 
    ? `Junte-se a ${guildSelected.guild.name}`
    : widget.instant_invite

    Share.share({
      message,
      url: widget.instant_invite
    })

  }

  return (
    <Background>
      <Header 
        title="Detalhes"
        action={
          guildSelected.guild.owner && 
          <BorderlessButton onPress={handleShareInvite}>
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
            {guildSelected.guild.name}
          </Text>
          
          <Text style={styles.subTitle}>
            {guildSelected.description} 
          </Text>

        </View>

      </ImageBackground>

      { 

      loading ? <Load /> :
      <>
      <ListHeader 
          title="Jogadores"
          subTitle={`Total ${widget.members.length}`}
      />


      <FlatList 
          data={widget.members ? widget.members : []}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Member data={item} />
          )}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          style={styles.members}
        />
        </>
      }

      <View style={styles.footer}>
      <ButtonIcon 
        text="Entrar na partida"  
        />

      </View>


    </Background>
  );
}

