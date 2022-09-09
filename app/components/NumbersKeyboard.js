/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import NumberKeyboard from './NumberKeyboard';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {useOperation} from '../context/OperationContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
const NumbersKeyboard = () => {
  const {setInput, input, setResult, result} = useOperation();
  useEffect(() => {
    async function name(params) {
    
     }
     name()
  }, [])
  
  const handleInput = inp => {
    if (inp === 0) {
      console.log(inp);
      if (input != '') setInput(prev => `${prev}0`);
      return;
    }
    if (inp == '*' || inp == '/' || inp == '+' || inp == '-') {
      if (
        input != '' &&
        input.slice(-1) != '*' &&
        input.slice(-1) != '-' &&
        input.slice(-1) != '/' &&
        input.slice(-1) != '+'
      )
        setInput(prev => `${prev}${inp}`);
      return;
    }
    if (String(input).charAt(0) == 0) {
      setInput(`${inp}`);
      return;
    }
    setInput(prev => `${prev}${inp}`);
  };
  const handelEqual = async () => {
    const historyString =
      (await AsyncStorage.getItem('history-calculate')) || '[]';
    const history =JSON.parse(historyString);
    history.push(input)
    await AsyncStorage.setItem(
      'history-calculate',
      JSON.stringify(history),
    );
    setInput(String(result));
    setResult('');
  };
  return (
    <View>
      <View style={styles.row}>
        <NumberKeyboard
          onClick={() => setInput('')}
          title={'C'}
          color={'crimson'}
        />
        <NumberKeyboard
          title={'( '}
          color="yellowgreen"
          onClick={() => handleInput('(')}
        />
        <NumberKeyboard
          title={' )'}
          color="yellowgreen"
          onClick={() => handleInput(')')}
        />
        <NumberKeyboard
          onClick={() => handleInput('/')}
          title={<Feather name="divide" size={30} />}
          color="yellowgreen"
        />
      </View>
      <View style={styles.row}>
        <NumberKeyboard onClick={() => handleInput(7)} title={7} />
        <NumberKeyboard onClick={() => handleInput(8)} title={8} />
        <NumberKeyboard onClick={() => handleInput(9)} title={9} />
        <NumberKeyboard
          onClick={() => handleInput('*')}
          title={<AntDesign name="close" size={30} />}
          color="yellowgreen"
        />
      </View>
      <View style={styles.row}>
        <NumberKeyboard onClick={() => handleInput(4)} title={4} />
        <NumberKeyboard onClick={() => handleInput(5)} title={5} />
        <NumberKeyboard onClick={() => handleInput(6)} title={6} />
        <NumberKeyboard
          onClick={() => handleInput('-')}
          title={<Entypo name="minus" size={30} />}
          color="yellowgreen"
        />
      </View>
      <View style={styles.row}>
        <NumberKeyboard onClick={() => handleInput(1)} title={1} />
        <NumberKeyboard onClick={() => handleInput(2)} title={2} />
        <NumberKeyboard onClick={() => handleInput(3)} title={3} />
        <NumberKeyboard
          onClick={() => handleInput('+')}
          title={<Entypo name="plus" size={30} />}
          color="yellowgreen"
        />
      </View>
      <View style={styles.row}>
        <NumberKeyboard title={'+/-'} />
        <NumberKeyboard onClick={() => handleInput(0)} title={0} />
        <NumberKeyboard title={'.'} onClick={() => handleInput('.')} />
        <NumberKeyboard
          onClick={handelEqual}
          title={<MaterialCommunityIcons name="equal" size={30} />}
          backgroundColor="darkgreen"
        />
      </View>
    </View>
  );
};

export default NumbersKeyboard;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: RFPercentage(1),
  },
});
