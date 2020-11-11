import { createSlice, PayloadAction, createAsyncThunk} from"@reduxjs/toolkit";
import { Photo } from "../features/photos/types";
import { User } from "../features/auth0/types"
import axios from "axios"


export interface FavoriteState {
  favorites: Photo[],
  currentFavorite: Photo[],
  user: {},
  userLoaded: boolean,
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null | undefined
}

const initialState: FavoriteState = {
favorites: [] as Photo[],
currentFavorite: [] as Photo [],
user: {} as User,
userLoaded: false,
status: 'idle',
error: null
}

//Allows server to connect when hosted locally or on Heroku
let base = window.location.host.includes("localhost") ? "//localhost:3000/" : "/";

let api = axios.create({
  baseURL: base ,
  timeout: 3000,
})

export const fetchFavorites = createAsyncThunk(
  "reducers/fetchFavorites",
  async (user : User) => {
     const response = await api.get<Photo>(
      "favorites/" + user.sub
    );
   return response.data;
  }
)

export const addFavorite = createAsyncThunk(
  "reducers/addFavorite",
  async(updatedFav: Photo) => {
    const response = await api.post<Photo>(
      "addFavorite", updatedFav 
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
    },
    setUser(state, action: PayloadAction<User>){
      state.user = action.payload
      console.log('user set')
      state.userLoaded = true
    },
    loginChange(state){
      state.userLoaded = false
    }

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
    })
    builder.addCase(addFavorite.fulfilled, (state, action) => {
      state.favorites.push(action.payload)
      console.log('fav added', action.payload)
    })
  }
});

 export const { setCurrentFavorite, setUser, loginChange } = favoriteSlice.actions 

export default favoriteSlice.reducer;