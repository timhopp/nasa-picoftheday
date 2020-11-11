import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk"
import rootReducer from "../app/reducers/index";
import { RootState } from "./reducers/index";


//CongfigureStore has predefined middleware, enabling asyncthunk to work without specifying it here
const store = configureStore({
  reducer: rootReducer,
});


//These aren't truley needed with Redux Toolkit, but are essential for normal reducers which is why I haven't removed them. 
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>


export default store;