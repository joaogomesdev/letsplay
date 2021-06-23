import React from 'react';
import { 
    View ,
    Text, 
    Image,
  } from 'react-native';

import { styles } from './styles';
import illustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';

export function SignIn(){

  return (
    <View style={styles.container}>
     
      
      <Image 
        source={illustrationImg} 
        style={styles.image} 
        resizeMode="stretch"
      />

      <View style={styles.content}>
          <Text style={styles.title}>
            Conecta-te {'\n'}
            e organiza as tuas {'\n'}
            gameplays {'\n'}
          </Text>

          <Text style={styles.subtitle}>
            Cria um grupo e aproveita os melhores jogos {'\n'}
            com os teus amigos
          </Text>

          <ButtonIcon 
            text="Entra com o discord"
            activeOpacity={0.7}
          />               
               
      </View>
    </View>
    
  );
}

