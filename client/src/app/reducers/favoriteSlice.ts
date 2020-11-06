import { createSlice, PayloadAction} from"@reduxjs/toolkit";
import { AppThunk, AppDispatch } from "../store";
import { Photo } from "../features/photos/types";


interface FavoriteState {
  favorites: Photo[]
}

// interface Duplicate {
//   duplicate: number
// }
//Does this simply ensure an empy array is only Photo types? 
let initialState: FavoriteState = {
favorites: [] as Photo[]
}


//createSlice automatically generates action creators and action types, reducing the Redux boilerplate
const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    //By using PayloadAction, actions are strongly typed so that the action only suppoerts objects of the type Favorite 
    //<Favorite> is passing in the type to be checked

    addFavorite(state, action: PayloadAction<Photo>){
      //Hmm hmm
       let duplicate = state.favorites.filter(favorite => favorite.title === action.payload.title)
       if(duplicate.length > 0){
        console.log("Cant duplicate favs")
        console.log(duplicate.length)
      } else {
        state.favorites.push(action.payload)
        console.log('Hit favorite')
        console.log(JSON.stringify(state.favorites))
        console.log(duplicate)
  
      }
    },

    deleteFavorite(state, action: PayloadAction<Photo>  ){ 
    state.favorites = state.favorites.filter(favorite => favorite.title !== action.payload.title)
 
    }
  }
});

//Reducers only look at the dispatched action and create a new state value without basing logic on what the current state might be.
//Reducers also cannot handle asynchronous logic 




export const { addFavorite, deleteFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer;