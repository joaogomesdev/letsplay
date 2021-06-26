import React , { useContext } from 'react';
import { 
    View ,
    Text, 
    Image,
    Alert,
    ActivityIndicator
  } from 'react-native';


import { styles } from './styles';
import illustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/theme';



export function SignIn(){
  const { user , loading , signIn} = useAuth();

  
  async function handleSignIn() {
    try {

      await signIn();

    } catch (error) {

      Alert.alert(error);

    }
  }
  return (
    <Background>

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

          {   
            loading 
            ?
              <ActivityIndicator 
                color={theme.colors.primary}
              />
            :  
              <ButtonIcon 
                text="Entra com o discord"
                onPress={handleSignIn}
              />

          }             
               
      </View>
    </View>
  </Background>
    
  );
}

