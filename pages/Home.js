import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import CarrosMenu from './components/CarrosMenu'
import Cars from './components/Cars'
import Recommend from './components/Recommend'

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
      <CarrosMenu
        cover={require('../pages/assets/carro1.jpg')}
        name='VW SAVEIRO'
        description='CARRO 1.6 MI TROOPER CE 8V FLEX 2P MANUAL G.V'
        condition='USADO'
        price='R$ 20.990'
        year='Ano: 2009/2010'
        onPress={() => navigation.navigate('detail')}
      />
      
     
      <CarrosMenu
        cover={require('../pages/assets/carro2.jpg')}
        name='FORD FUSION'
        description='2.0 TITANIUM FWD 16V GASOLINA 4P AUTOMÁTICO'
        condition='Semi-Novo'
        price='R$ 100.000'
        year='Ano: 2017/2018'
        onPress={() => navigation.navigate('detail') }
      />

      <CarrosMenu
        cover={require('../pages/assets/carro3.jpg')}
        name='CHEVROLET ONIX'
        description='1.4 MPFI LTZ 8V FLEX 4P MANUAL'
        condition='USADO'
        price='R$ 30.500'
        year='Ano: 2014/2015'
        onPress={() => navigation.navigate('detail')}
      />

      <CarrosMenu
        cover={require('../pages/assets/carro4.jpg')}
        name='FIAT UNO'
        description='1.0 MPI MILLE WAY ECONOMY 8V FLEX 4P MANUAL'
        condition='USADO'
        price='R$ 11.500'
        year='Ano: 2008/2009'
        onPress={() => navigation.navigate('detail')}
      />

      <CarrosMenu
        cover={require('../pages/assets/carro5.jpg')}
        name='CITROËN C3'
        description='1.4 I GLX 8V FLEX 4P MANUAL'condition='USADO'
        price='R$ 18.500'
        year='Ano: 2011/2012'
        onPress={() => navigation.navigate('detail')}
      />

      <CarrosMenu
        cover={require('../pages/assets/carro6.jpg')}
        name='LEXUS ES 350'
        description='3.5 V6 GASOLINA 4P AUTOMÁTICO'
        condition='USADO'
        price='R$ 124.400'
        year='Ano: 2016/2017'
        onPress={() => navigation.navigate('detail')}
      />
    </ScrollView>
      
      
      <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }} >
        <Text style={[styles.title, { marginTop: 20 }]}>Próximo de você</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15,}}>
        <Cars
        cover={require('./assets/nextme.jpg')}
        nameCar ='TOYOTA HILUX SW4'
        description='3.0 SRV 4X4 16V TURBO INTERCOOLER DIESEL 4P AUTOMÁTICO'
        price='R$ 145.000'
        />
        <Cars
        cover={require('./assets/nextme1.jpg')}
        nameCar='VOLKSWAGEN AMAROK'
        description='3.0 V6 TDI DIESEL HIGHLINE CD 4MOTION AUTOMÁTICO'
        price='R$ 182.900'
        />
        <Cars
        cover={require('./assets/nextme2.jpg')}
        nameCar='CHEVROLET S10'
        description='2.4 LS 4X2 CD 8V FLEX 4P MANUAL'
        price='R$ 72.900'
        />
        <Cars
        cover={require('./assets/nextme3.jpg')}
        nameCar='MITSUBISHI PAJERO FULL'
        description={'3.8 HPE 4X4 V6 24V GASOLINA 4P AUTOMÁTICO'}
        price='R$ 120.900'
        />
      </ScrollView>

      <Text style={[styles.title, { marginTop: 20 }]}>
        Ofertas do Dia
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}} >
        <Recommend
        cover={require('./assets/offer.jpg')}
        name="HONDA CIVIC"
        year='2018/2018'
        offer="12%"
        />
        <Recommend
        cover={require('./assets/offer1.jpg')}
        name="BMW X3"
        year='2017/2018'
        offer="25%"
        />
        <Recommend
        cover={require('./assets/offer2.jpg')}
        name="AUDI A3"
        year='2018/2018'
        offer="20%"
        />
         <Recommend
        cover={require('./assets/offer3.jpg')}
        name="PORSCHE CAYENNE "
        year='2015/2016'
        offer="9%"
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