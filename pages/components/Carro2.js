import React from 'react';
import { View, Text, Touchable, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

export default function Home2(props) {
 return (
   <TouchableOpacity onPress={props.onPress} style={styles.container}>
       <Image
        source={props.cover}
        style={styles.cover}
       />

        <View style={styles.content} >
            <Text style={styles.title}>{props.name}</Text>
        
        <View style={styles.dot} >
        </View>
        
        <Text style={styles.badge}>Semi-Novo</Text> 

        </View>

        <Text style={styles.description} >
            {props.description}
        </Text>

        <View style={styles.footer} >
            <View style={{width: '80%'}} >
                <Text style={styles.price}>R$ 100.000</Text>
            </View>
            <View style={{ width: '20%' }}>
                <Ionicons name='ios-add-circle' size={24} color='black'></Ionicons>
            </View>
        </View>


   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#FFF',
        height: 300,
        width: 200,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5,
    },
    cover: {
        width: 170,
        height: 110,
        borderRadius: 10,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    title:{
        fontFamily: 'montSerrat_700Bold',
        fontSize: 15,
        color: '#4f4a4a',
        
    },
    dot:{
        width: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: 'red',
        marginHorizontal: 5,    
    },
    badge:{
        color: 'red',
        fontSize: 12,
        fontFamily: 'montSerrat_400Medium',
        padding: 5,
        fontWeight: 'bold'
    },
    description: {
        fontFamily: 'Montserrat_500Medium', 
        fontSize: 15
    },

    footer: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    price: {
        fontFamily: 'montSerrat_700Bold',
        fontWeight: 'bold',
        fontSize: 15,
      
        
    }
})