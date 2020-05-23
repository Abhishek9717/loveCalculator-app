import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const displayLove = (props) => {
    return(
        (props.percent)?<View style={styles.container}>
            <Text style={styles.text}>{props.percent} %</Text>
            <Text style={styles.text}>{props.result}</Text>
        </View>:<View/>
    );
}

export default displayLove;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    text:{
        fontSize:30,
        textAlign:"center",
        color:"red"
    }
  });