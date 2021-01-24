import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import Carro1 from './components/Carro1'
import Carro2 from './components/Carro2'
import Carro3 from './components/Carro3'
import Carro4 from './components/Carro4'
import Carro5 from './components/Carro5'
import Carro6 from './components/Carro6'

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
      <Carro1
        cover={require('../pages/assets/carro1.jpg')}
        name='VW SAVEIRO'
        description='CARRO 1.6 MI TROOPER CE 8V FLEX 2P MANUAL G.V'
        onPress={() => navigation.navigate('detail')}
      />
      
     
      <Carro2
        cover={require('../pages/assets/carro2.jpg')}
        name='FORD FUSION'
        description='2.0 TITANIUM FWD 16V GASOLINA 4P AUTOMÁTICO'
        onPress={() => {}}
      />

      <Carro3
        cover={require('../pages/assets/carro3.jpg')}
        name='CHEVROLET ONIX'
        description='1.4 MPFI LTZ 8V FLEX 4P MANUAL'
        onPress={() => {}}
      />

      <Carro4
        cover={require('../pages/assets/carro4.jpg')}
        name='FIAT UNO'
        description='1.0 MPI MILLE WAY ECONOMY 8V FLEX 4P MANUAL'
        onPress={() => {}}
      />

      <Carro5
        cover={require('../pages/assets/carro5.jpg')}
        name='CITROËN C3'
        description='1.4 I GLX 8V FLEX 4P MANUAL'
        onPress={() => {}}
      />

      <Carro6
        cover={require('../pages/assets/carro6.jpg')}
        name='LEXUS ES 350'
        description='3.5 V6 GASOLINA 4P AUTOMÁTICO'
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