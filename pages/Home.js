import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import Home1 from './components/Home1'
import Home2 from './components/Home2'
import Home3 from './components/Home3'

export default function Home() {
    const navigation = useNavigation();


  return (
   <ScrollView 
  showsVerticalScrollIndicator={false}
  style={{backgroundColor:'#FFF'}}
   >
     <View style={styles.header}>
       <View style={styles.inputArea}>
          <Feather name='search' size={24} color='black'/>
          <TextInput
          placeholder='What are you looking for?'
          style={styles.input}
          />
       </View>
     </View>
   
      <View style={styles.contentNew}> 
        <Text style={styles.title}>Novidades</Text>
      </View>
   
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15, }} >
      <Home1
        cover={require('../pages/assets/house1.jpg')}
        name='Casa de Praia'
        description='Casa nova a uma quadra do mar e segurança reforçada,
        
        Diárias a partir de'
        onPress={() => navigation.navigate('detail')}
      />
      
     
      <Home2
        cover={require('../pages/assets/house2.jpg')}
        name='Rancho Vila Maria '
        description='Casa com excelente localização'
        onPress={() => {}}
      />

      <Home3
        cover={require('../pages/assets/house3.jpg')}
        name='Casa Alphaville'
        description='Casa com excelente localização'
        onPress={() => {}}
      />
    </ScrollView>
   
   </ScrollView>

  );
}


const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
   marginVertical: 15
  },

  inputArea: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor: '#FFF',
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,

  },

  input: {
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 10,
    fontSize: 14,
    width: '90%'
  },


  contentNew: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  title: {
    paddingHorizontal: 15,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#4f4a4a',
    
  }
})