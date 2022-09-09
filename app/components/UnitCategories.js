/* eslint-disable prettier/prettier */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';
import {Button} from '@react-native-material/core';
import units from './../data/unitCategories';
import { useUnitConversion } from '../context/UnitConversionContext';

const UnitCategories = () => {
  const {type,setType}=useUnitConversion()
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {units.map((item) => (
          <Button
          onPress={()=>setType(item.value)}
            variant="text"
            color={type==item.value?'white':'grey'}
            style={{marginTop: 20, alignItems: 'center', marginRight: 30}}
            key={item.key}
            title={item.value}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default UnitCategories;

const styles = StyleSheet.create({});
