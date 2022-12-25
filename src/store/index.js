import { configureStore } from "@reduxjs/toolkit";
import MemoryReducer from "./memory.reducer";

const store = configureStore({
  reducer: {
    memory: MemoryReducer
  }
});

export default store;