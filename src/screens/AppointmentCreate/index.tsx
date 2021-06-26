import React, { useState } from 'react';
import { 
  View , 
  Text , 
  Platform,
  ScrollView, 
  KeyboardAvoidingView,
  Modal
} from 'react-native';

import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';

import { CategoryList } from '../../components/CategoryList';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import { Guilds } from '../Guilds';
import { GuildProps } from '../../components/Guild';



export function AppointmentCreate()  {
  const [openGuildModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const [category, setCategory] = useState('');


  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }  

  function handleOpenGuilds() {
    setOpenGuildsModal(true)
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false)
  }

  function handleSelectedGuild(selectedGuild: GuildProps) {
    setGuild(selectedGuild)
    setOpenGuildsModal(false)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}

    >
        <Background>
      <ScrollView>
          
        <Header 
          title="Marcar partida"
          />

        <Text style={[ styles.label, { marginLeft: 24, marginTop: 26, marginBottom: 18}]}>
          Categoria
        </Text>

        <CategoryList
          hasCheckedBox
          categorySelected={category}
          setCategory={handleCategorySelect}
          />

      <View style={styles.form}>
          <RectButton
            onPress={handleOpenGuilds}
          >

            <View style={styles.select}>

                {      
                  guild.icon 
                  ? <GuildIcon />
                  : <View style={styles.image}/>
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {
                      guild.name 
                      ? guild.name 
                      : 'Escolha um servidor'
                    }
                  </Text>

                </View>

                  <Feather 
                    name="chevron-right"
                    color={theme.colors.heading}
                    size={18}
                    />
            </View>
          </RectButton>
        
        <View style={styles.field}>
            <View>
              <Text style={[styles.label, { marginBottom: 12}]}>
                  Dia e mês
                </Text>  

                <View style={styles.column}>
                  <SmallInput maxLength={2}/>
                  <Text style={styles.divider}>
                      /
                  </Text>
                  <SmallInput maxLength={2}/>
                </View> 
            </View> 

            <View>
              <Text style={[styles.label, { marginBottom: 12}]}>
                  Hora e minuto
                </Text>  

                <View style={styles.column}>
                  <SmallInput maxLength={2}/>
                  <Text style={styles.divider}>
                      :
                  </Text>
                  <SmallInput maxLength={2}/>
                </View> 
            </View> 
            
            

        </View>

        <View style={[styles.field, {marginBottom: 12}]}>
          <Text style={styles.label}>
            Descrição
          </Text>

          <Text style={styles.caracteresLimit}>
            Max 100 caracteres
          </Text>
        </View>
    
        <TextArea 
          multiline
          maxLength={100}
          numberOfLines={5}
          autoCorrect={false}
          />

        <View style={styles.footer}>
          <Button 
            text="Confirmar"
            />
        </View>
      </View>
    </ScrollView>
      </Background>

     <ModalView 
      closeModal={handleCloseGuilds}
      visible={openGuildModal}
     >
       <Guilds 
        handleGuildSelected={handleSelectedGuild}
       />
     </ModalView>

    </KeyboardAvoidingView>
  );
}

