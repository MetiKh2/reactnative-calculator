/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from '@react-native-material/core';
import { useOperation } from '../context/OperationContext';

const OperationInput = () => {
  const {input}=useOperation();
  return (
    <View style={styles.container}>
      <TextInput
      value={input}
        style={styles.input}
        color="secondary"
        inputStyle={{color: 'white', borderWidth: 0, outline: 0,height:'100%',fontSize:30}}
        variant="fill"
        showSoftInputOnFocus={false}
        
      />
    </View>
  );
};

export default OperationInput;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex:1
  },
  input: {
    color: 'white !important',
  },
});
