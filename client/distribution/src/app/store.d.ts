import { Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import rootReducer from "../app/reducers/index";
export declare type RootState = ReturnType<typeof rootReducer>;
declare const store: import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
    currentPhoto: import("./reducers/currentPhotoSlice").PhotoState;
    favorites: import("./reducers/favoriteSlice").FavoriteState;
}>, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
    currentPhoto: import("./reducers/currentPhotoSlice").PhotoState;
    favorites: import("./reducers/favoriteSlice").FavoriteState;
}>, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
    currentPhoto: import("./reducers/currentPhotoSlice").PhotoState;
    favorites: import("./reducers/favoriteSlice").FavoriteState;
}>, import("redux").AnyAction, undefined>]>;
export declare type AppDispatch = typeof store.dispatch;
export declare type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export default store;
