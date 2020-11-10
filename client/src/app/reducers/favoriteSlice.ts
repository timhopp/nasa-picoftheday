import { createSlice, PayloadAction, createAsyncThunk} from"@reduxjs/toolkit";
import { Photo } from "../features/photos/types";
import axios from "axios"



export interface FavoriteState {
  favorites: Photo[],
  currentFavorite: Photo[],
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null | undefined
}

// interface Duplicate {
//   duplicate: number
// }
//Does this simply ensure an empy array is only Photo types? 
const initialState: FavoriteState = {
favorites: [] as Photo[],
currentFavorite: [] as Photo [],
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
    setFavorites(state, action: PayloadAction<Photo>){
      state.favorites.push(action.payload)
    },
    setCurrentFavorite(state, action: PayloadAction<Photo>){
      state.currentFavorite.splice(0, 1,action.payload)
      console.log('favorite set')
    }

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
      state.favorites.push(action.payload.favorite)
      console.log('fav added', action.payload)
    })
  }
});

//Reducers only look at the dispatched action and create a new state value without basing logic on what the current state might be.
//Reducers also cannot handle asynchronous logic 
 export const { setCurrentFavorite } = favoriteSlice.actions 


export default favoriteSlice.reducer;