import { createSlice, PayloadAction, createAsyncThunk} from"@reduxjs/toolkit";
import { AppThunk, AppDispatch } from "../store";
import { Photo } from "../features/photos/types";
import axios from "axios"


export interface FavoriteState {
  favorites: Photo[],
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null | undefined
}

// interface Duplicate {
//   duplicate: number
// }
//Does this simply ensure an empy array is only Photo types? 
let initialState: FavoriteState = {
favorites: [] as Photo[],
status: 'idle',
error: null
}


let base = window.location.host.includes("localhost") ? "//localhost:3000/" : "/";

let api = axios.create({
  baseURL: base ,
  timeout: 3000,
})

export const fetchFavorites = createAsyncThunk(
  "reducers/fetchFavorites",
  async () => {
     const response = await api.get<Photo>(
      "favorites"
    
    );
  // console.log(response.data)
   return response.data;
  //  dispatch(setFavorites(response.data))

  }
)

export const addFavorite = createAsyncThunk(
  "reducers/addFavorite",
  async(newFavorite: Photo) => {
    const response = await api.post<Photo>(
      "addFavorite", newFavorite 
    )
    return response.data;
  }
)

export const removeFavorite = createAsyncThunk(
  "reducers/deleteFavorite",
  async (id: string) => {
     await api.delete<Photo>(
      "deletefavorite/" + id
    );
      return id;
  }
)

//createSlice automatically generates action creators and action types, reducing the Redux boilerplate
const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    //By using PayloadAction, actions are strongly typed so that the action only suppoerts objects of the type Favorite 
    //<Favorite> is passing in the type to be checked

    // addFavorite(state, action: PayloadAction<Photo>){
    //   //Hmm hmm
    //    let duplicate = state.favorites.filter(favorite => favorite.title === action.payload.title)
    //    if(duplicate.length > 0){
    //     console.log("Cant duplicate favs")
    //     console.log(duplicate.length)
    //   } else {
    //     state.favorites.push(action.payload)
    //     console.log('Hit favorite')
    //     console.log(JSON.stringify(state.favorites[0]))
    //     console.log(duplicate)
  
    //   }
    // },
    setFavorites(state, action: PayloadAction<Photo>){
      state.favorites.push(action.payload)
    },

    // deleteFavorite(state, action: PayloadAction<Photo>  ){ 
 
      
    // },
  },
  extraReducers: builder =>{
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      console.log('success')
      state.status = "succeeded";
      state.favorites = state.favorites.concat(action.payload)
    })
    builder.addCase(removeFavorite.fulfilled, (state, action) => {
      let deleted = state.favorites.find(fav => fav._id === action.payload)
      state.favorites = state.favorites.filter(favorite => favorite !== deleted)
      //why can't I do this in one step like below?? 
      // state.favorites = state.favorites.filter(favorite => favorite._id !== action.payload),
    })
    builder.addCase(addFavorite.fulfilled, (state, action) => {
      state.favorites.push(action.payload)
      console.log('fav added', action.payload)
    })
  }
});

//Reducers only look at the dispatched action and create a new state value without basing logic on what the current state might be.
//Reducers also cannot handle asynchronous logic 



export default favoriteSlice.reducer;