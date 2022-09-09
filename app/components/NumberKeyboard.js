/* eslint-disable prettier/prettier */
import {Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';

const NumberKeyboard = ({title,color='white',backgroundColor='#222',onClick}) => {
  return (
    <Pressable style={[styles.container,{backgroundColor}]} onPress={onClick}>
      <Text style={[styles.text,{color}]}>{title}</Text>
    </Pressable>
  );
};

export default NumberKeyboard;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 100,
    marginHorizontal: RFPercentage(1.2),
  },
});
