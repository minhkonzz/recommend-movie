import { useState, createContext } from "react";
import { questions } from "../data/questions";

export const InputsContext = createContext(); 

export default function InputsProvider({ children }) {
  const [ dataStore, setDataStore ] = useState({
    ...questions.reduce((accumulator, question) => {
      return {
        ...accumulator,
        [question.alias]: []
      }
    }, {})
  });

  const updateNewUserInputs = (inputValue, alias, answersType) => {
    setDataStore({
      ...dataStore, 
      [alias]: answersType === "radio" ? [ inputValue?.symbol ] : [ ...dataStore[alias], inputValue?.symbol ]
    });
  }
 
  return <InputsContext.Provider value={{ dataStore, updateNewUserInputs }}>{children}</InputsContext.Provider>
}