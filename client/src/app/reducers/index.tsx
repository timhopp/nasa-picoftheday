import { combineReducers } from "redux";
import  currentPhotoSlice  from "./currentPhotoSlice"
import favoriteSlice from "./favoriteSlice";

//rootReducer combines all reducers into one to pass to the store.
//Export Rootstate, which will be used in selectors for strongly typed access to the Redux state.

const rootReducer = combineReducers({
  currentPhoto: currentPhotoSlice,
  favorites: favoriteSlice
});


export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;