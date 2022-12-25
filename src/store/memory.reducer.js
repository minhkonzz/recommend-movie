import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../data/questions";

const memoryReducer = createSlice({
  name: "working_memory", 
  initialState: {
    movies: ![],
    userEvents: {
      ...questions.reduce((accumulator, question) => {
        return {
          ...accumulator,
          [question.alias]: []
        }
      }, {})
    }
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload; 
    },
    addNewUserEvent: (state, action) => {
      const { inputValue, alias, answersType } = action.payload; 
      state.userEvents = {
        ...state.userEvents, 
        [alias]: answersType === "radio" ? [ inputValue ] : [ ...state.userEvents[alias], inputValue ]
      }
    }, 
    removeUserEvent: (state, action) => {
      const { inputValue, alias } = action.payload; 
      state.userEvents = {
        ...state.userEvents, 
        [alias]: state.userEvents[alias].filter((event) => event !== inputValue)
      }
    }
  }
}); 

export const { setMovies, addNewUserEvent, removeUserEvent } = memoryReducer.actions;
export default memoryReducer.reducer;