import { movieApis } from "../data/apis";

export const initialState = {
  slideIndex: 0
}; 

export const slidesReducer = (state, action) => { 
  if (action.type === "PREV") {
    return {
      ...state, 
      slideIndex: (state.slideIndex + 1) % movieApis.length
    }
  }
  if (action.type === "NEXT") {
    return {
      ...state, 
      slideIndex: state.slideIndex === 0 ? movieApis.length - 1 : state.slideIndex - 1
    }
  }
}