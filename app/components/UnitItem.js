/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import units from '../data/unitCategories';
import {TextInput} from '@react-native-material/core';
import {useUnitConversion} from '../context/UnitConversionContext';

const UnitItem = ({unit, setUnit, value, setValue, handleChange}) => {
  const {type} = useUnitConversion();
  return (
    <View>
      <SelectDropdown
        defaultValue={unit}
        rowStyle={{backgroundColor: '#000', borderWidth: 0}}
        buttonStyle={{backgroundColor: '#000'}}
        rowTextStyle={{color: '#fff', textAlign: 'left', padding: 10,fontSize:16}}
        buttonTextStyle={{color: '#fff'}}
        data={units.filter(p => p.value == type)[0].items}
        onSelect={(selectedItem, index) => {
          handleChange(value,selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return `${selectedItem.title} (${selectedItem.symbol})`;
        }}
        rowTextForSelection={(item, index) => {
          return `${item.title} (${item.symbol})`;
        }}
      />

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          value={value}
          onChangeText={text => {
            //setValue(text);
            handleChange(text,unit);
          }}
          style={{marginTop: 20, flex: 1}}
          color="secondary"
          inputStyle={{
            color: 'white',
            borderWidth: 0,
            outline: 0,
            height: '100%',
            fontSize: 20,
            textAlign: 'right',
          }}
          variant="fill"
          keyboardType="numeric"
        />
        <Text style={{color: 'white'}}>{unit.symbol}</Text>
      </View>
    </View>
  );
};

export default UnitItem;

const styles = StyleSheet.create({});
