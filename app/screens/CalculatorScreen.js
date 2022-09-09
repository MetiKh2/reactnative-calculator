/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {IconButton} from '@react-native-material/core';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import OperationInput from '../components/OperationInput';
import Entypo from 'react-native-vector-icons/Entypo';
import NumbersKeyboard from '../components/NumbersKeyboard';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {useOperation} from '../context/OperationContext';
import HistoryCalculates from '../components/HistoryCalculates';

const CalculatorScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const {setInput, result} = useOperation();
  const [status, setStatus] = useState('calculator');
  const backgroundStyle = {
    backgroundColor: true ? Colors.black : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={true ? 'light-content' : 'dark-content'} />
      <View style={{flex: 1, paddingHorizontal: 15}}>
        <OperationInput />
        <View style={{marginBottom: 10, marginLeft: 30}}>
          <Text>{result}</Text>
        </View>
        <View style={styles.iconContainer}>
          <View style={{flexDirection: 'row'}}>
            <IconButton onPress={()=>setStatus('history')}
              icon={p => <Entypo name="clock" size={25} {...p} />}
              color="white"
            />
            <IconButton onPress={()=>setStatus('calculator')}
              icon={p => <Entypo name="calculator" size={25} {...p} />}
              color="white"
            />
            <IconButton onPress={()=>navigation.navigate('UnitConversionScreen')}
              icon={p => <Entypo name="ruler" size={25} {...p} />}
              color="white"
            />
          </View>
          <View>
            <IconButton
              onPress={() => setInput(prev => prev.slice(0, -1))}
              icon={p => <Entypo name="erase" size={25} {...p} />}
              color="white"
            />
          </View>
        </View>
        <View style={{flex: 2}}>
          {status == 'calculator' && <NumbersKeyboard />}
          {status == 'history' && <HistoryCalculates />}
        </View>
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

export default CalculatorScreen;
