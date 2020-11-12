
import { Photo } from "../features/photos/types";
import axios from "axios"; 
import { createSlice, createAsyncThunk, PayloadAction } from"@reduxjs/toolkit";


//Need an interface to declare the initial states type
export interface PhotoState {
  photo: Photo,
  date: string,
  today: string,
  status: 'idle' | 'loading' | 'succeeded' | 'failed' | any,
  error: string | null | undefined
}


const initialState: PhotoState = {
  //Array of photo types
  photo: {} as Photo,
  date: "",
  today: "",
  status: 'idle',
  error: null
}

export const fetchCurrentPhoto = createAsyncThunk(
  "reducers/fetchCurrentPhoto",
  async () => {
    let apikey = process.env.API_KEY
     const response = await axios.get<Photo>(
      "https://api.nasa.gov/planetary/apod?api_key=" + 
      `${process.env.API_KEY}`
    );
   return response.data;
  }
)

// formattedDate needs to be passed in through the async
export const fetchPhotoByDate = createAsyncThunk(
  "reducers/fetchPhotoByDate",
  async (formattedDate : string) => {
       const response =
        await axios.get<Photo>(
          "https://api.nasa.gov/planetary/apod?api_key=" + `${process.env.API_KEY}` + "&date=" + formattedDate
        );
      return response.data;
    }
  
)

  //State can be mutated directly since it uses Immer behind the scenes
const currentPhotoSlice = createSlice ({
  name: "currentPhoto",
  initialState,
  reducers: {
    setDate(state, action: PayloadAction<string>) {
      state.date = action.payload
    },
    setToday(state, action: PayloadAction<string>) {
      state.today = action.payload
     },
  },


  extraReducers: 
  builder => {
    builder.addCase(fetchCurrentPhoto.pending, (state, action) => {
      console.log('loaded')
      state.status = "loading";
  })
    builder.addCase(fetchCurrentPhoto.fulfilled, (state, action) => {
      console.log('success')
      state.status = "succeeded";
      state.photo = action.payload;
    })
  
    builder.addCase(fetchCurrentPhoto.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })

    //builders for fetchByDate
    //Purposely don't have a loading builder so there is always a photo loaded

    builder.addCase(fetchPhotoByDate.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.photo = action.payload  
    })
  
    builder.addCase(fetchPhotoByDate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
    })
  }
});

export const { setDate, setToday } = currentPhotoSlice.actions

export default currentPhotoSlice.reducer;

