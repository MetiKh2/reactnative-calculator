/* eslint-disable prettier/prettier */
import React, {useContext, createContext, useState, useEffect} from 'react';
const UnitConversionContext = createContext();

export const UnitConversionProvider = ({children}) => {
  const [firstUnit, setFirstUnit] = useState({});
  const [secondUnit, setSecondUnit] = useState({});
  const [firstValue, setFirstValue] = useState();
  const [secondValue, setSecondValue] = useState();
  const [type, setType] = useState('Length');
  const handleFirstUnit = (value = null,unit=null) => {
    if (value && unit?.scale && secondUnit?.scale) {
      setSecondValue(
        ((value * unit?.scale) / secondUnit?.scale).toString(),
      );
    }
    if (value) setFirstValue(value);
    if (unit) setFirstUnit(unit);
  };
  const handleSecondUnit = (value = null,unit=null) => {
    if (value && firstUnit?.scale && unit?.scale) {
      setFirstValue(
        ((value * unit?.scale) / firstUnit?.scale).toString(),
      );
    }
    setSecondValue(value); 
     setSecondUnit(unit);
  };
  useEffect(() => {
    setFirstUnit({})
    setSecondUnit({})
    setFirstValue('')
    setSecondValue('')
  
  }, [type])
  
  return (
    <UnitConversionContext.Provider
      value={{
        firstUnit,
        setFirstUnit,
        setSecondUnit,
        setSecondValue,
        setType,
        type,
        secondValue,
        setFirstValue,
        secondUnit,
        firstValue,
        handleFirstUnit,
        handleSecondUnit,
      }}>
      {children}
    </UnitConversionContext.Provider>
  );
};

export const useUnitConversion = () => useContext(UnitConversionContext);
