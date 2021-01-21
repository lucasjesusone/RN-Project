import React from 'react';
import { View, Text, Touchable, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

export default function New(props) {
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
        
        <Text style={styles.badge} ></Text> 

        </View>


   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#FFF',
        height: 250,
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

    },
    dot:{

    },
    badge:{

    }
})