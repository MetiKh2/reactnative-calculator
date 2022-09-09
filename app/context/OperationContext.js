/* eslint-disable prettier/prettier */
import  React,{ useContext, createContext, useState, useEffect } from "react";
const OperationContext = createContext();

export const OperationProvider = ({ children }) => {
const [input, setInput] = useState('')    
const [result, setResult] = useState('')
useEffect(() => {
 try {
    setResult(String(parseFloat(eval(input).toFixed(4))))
 } catch (error) {
    setResult('')
 }
}, [input])

    return (
    <OperationContext.Provider value={{input,setInput,result,setResult}}>
      {children}
    </OperationContext.Provider>
  );
};

export const useOperation = () => useContext(OperationContext);