import React from 'react';
import { View , Text} from 'react-native'
import { Avatar } from '../Avatar';
import { styles } from './styles';


export function Profile() {

  return (
    <View style={styles.container}>

        <Avatar urlImage="https://cdn.discordapp.com/avatars/586250941313974291/78fbe8d2866cb010cb5b2124893acf88.png"/>

        <View>
          <View style={styles.user}> 
            <Text style={styles.greeting}>
              Olá,
            </Text>

            <Text style={styles.username}>
              João
            </Text>
          </View>

          <Text style={styles.message}>
            Hoje é dia de wins
          </Text>

         
        </View>
    </View>
    
    
  );
}

