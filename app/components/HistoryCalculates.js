/* eslint-disable prettier/prettier */
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useOperation } from '../context/OperationContext';
import {  Button } from "@react-native-material/core";
const HistoryCalculates = () => {
  const [calculates, setCalculates] = useState([]);
  const {setInput}=useOperation()
  const getCalculates = async () => {
    const data = await AsyncStorage.getItem('history-calculate');
    setCalculates(JSON.parse(data));
  };
  useEffect(() => {
    getCalculates()
  }, []);
  const clearHistory=async () => {
    await AsyncStorage.removeItem('history-calculate');
    await getCalculates();
  }
  return <View style={{position:'relative',flex:1}}>
    
    <FlatList data={calculates}  style={{marginBottom:70}}
     keyExtractor={(item) => item}
    renderItem={({item})=>(
        <TouchableOpacity onPress={()=>setInput(item)}>
        <Text style={{textAlign:'center',fontSize:20,margin:10}}>{item}</Text>
        </TouchableOpacity>
    )}/>
    <View style={{alignItems:'center'}}>
    <Button onPress={clearHistory} style={{position:'absolute',bottom:30}} variant="contained" title="Clear History" color='white' />
    </View>

  </View>;
};

export default HistoryCalculates;

const styles = StyleSheet.create({});
