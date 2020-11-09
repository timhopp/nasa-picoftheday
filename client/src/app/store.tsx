import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk"
// import { useDispatch } from "react-redux";

import rootReducer from "../app/reducers/index";
import { RootState } from "./reducers/index";

const store = configureStore({
  reducer: rootReducer,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept("../app/reducers/index", () => {
    const newRootReducer = require("../app/reducers/index").default
    store.replaceReducer(newRootReducer)
  })
}


export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
//Note -- Do I need this? Why ?
// export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;