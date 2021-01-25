import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function Recommend(props) {
 return (
   <ImageBackground
   source={props.cover}
   style={styles.container}
   blurRadius={1}
   >
       <Text style={[styles.house, styles.shadow]}>
           {props.name}
       </Text>

       <Text style={[styles.offer, styles.shadow]}>
           {props.offer} OFF
       </Text>
   </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container:{
        height: 130,
        width: 230,
        marginRight: 20,
        marginBottom: 40,
        opacity: 1,
        backgroundColor: '#000',
        marginLeft: 3,
        padding: 10,
        marginTop: 20
    },
    house:{
        fontFamily: 'Montserrat_700Bold',
        color: "#FFF",
        fontSize: 15
    },
    offer: {
        fontSize: 12,
        fontFamily: 'Montserrat_700Bold',
        color: '#FFF'
    },
    shadow:{
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 3,
        textShadowColor: '#000'
    }
})