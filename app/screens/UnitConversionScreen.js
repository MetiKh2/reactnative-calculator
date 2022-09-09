/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RFPercentage} from 'react-native-responsive-fontsize';
import UnitCategories from '../components/UnitCategories';
import {Divider} from '@react-native-material/core';
import UnitItem from '../components/UnitItem';
import {useUnitConversion} from '../context/UnitConversionContext';

const UnitConversionScreen = ({navigation}) => {
  const {
    firstUnit,
    secondUnit,
    setFirstUnit,
    setSecondUnit,
    firstValue,
    secondValue,
    setFirstValue,
    setSecondValue,
    handleFirstUnit,
    handleSecondUnit,
  } = useUnitConversion();
  const backgroundStyle = {
    backgroundColor: true ? Colors.black : Colors.lighter,
    flex: 1,
  };
  const handleChange = () => {};
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={true ? 'light-content' : 'dark-content'} />
      <View style={{flex: 1, paddingHorizontal: 15}}>
        <UnitCategories />
        <Divider color="grey" style={{marginVertical: 15}} />
        <UnitItem
          unit={firstUnit}
          setUnit={setFirstUnit}
          value={firstValue}
          setValue={setFirstValue}
          handleChange={handleFirstUnit}
        />
        <Divider color="grey" style={{marginVertical: 15}} />
        <UnitItem
          unit={secondUnit}
          setUnit={setSecondUnit}
          value={secondValue}
          setValue={setSecondValue}
          handleChange={handleSecondUnit}
        />
        <Divider color="grey" style={{marginVertical: 15}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingBottom: RFPercentage(1),
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default UnitConversionScreen;
