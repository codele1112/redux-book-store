import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookSliceReducer from "./bookSlice";
import listSliceReducer from "./listSlice";

const store = configureStore({
  reducer: combineReducers({
    book: bookSliceReducer,
    list: listSliceReducer,
  }),
});

export default store;
