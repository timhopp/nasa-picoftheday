import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk"
// import { useDispatch } from "react-redux";

import rootReducer from "../app/reducers/index";

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
//Note -- Do I need this? Why ?
// export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;