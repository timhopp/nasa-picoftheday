import { createSlice, PayloadAction, createAsyncThunk  } from "@reduxjs/toolkit";
import { Photo } from "../features/photos/types";
import axios from "axios";


//Need an interface to declare the initial states type
export interface PhotoState {
  photo: Photo[],
  date: string
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  // updated: boolean
  error: string | null | undefined
}


const initialState: PhotoState = {
  //Array of photo types
  photo: [] as Photo[],
  date: "",
  status: 'idle',
  // updated: false, 
  error: null
}

export const fetchCurrentPhoto = createAsyncThunk(
  "reducers/fetchCurrentPhoto",
  async () => {
     const response = await axios.get<Photo>(
      "https://api.nasa.gov/planetary/apod?api_key=gb8EyxhtZFQDFJtgS4FlKoumVutmPTkYStGt0MF5"
    
    );
   return response.data;

  }
)

//formattedDate needs to be passed in through the async
export const fetchPhotoByDate =  createAsyncThunk(
  "reducers/fetchPhotoByDate",
  async (formattedDate : string) => {
       const response =
        await axios.get<Photo>(
        "https://api.nasa.gov/planetary/apod?api_key=gb8EyxhtZFQDFJtgS4FlKoumVutmPTkYStGt0MF5&date=" + formattedDate
      )
      return response.data;
    }
  
)



const currentPhotoSlice = createSlice ({
  name: "currentPhoto",
  initialState,
  reducers: {
    setDate(state, action: PayloadAction<string>) {
     state.date = ""
     state.date = state.date.concat(action.payload)
      console.log(JSON.stringify(state.date))
    },
  },

  //State can be mutated directly since it uses Immer behind the scenes
  extraReducers: builder => {
    builder.addCase(fetchCurrentPhoto.pending, (state, action) => {
      console.log('loaded')
      state.status = "loading";
  })
    builder.addCase(fetchCurrentPhoto.fulfilled, (state, action) => {
      console.log('success')
      state.status = "succeeded";
      // state.photo.splice(0, 1, action.payload)
      state.photo[0] = action.payload;
      // console.log(JSON.stringify(state.photo[0]))
    })
  
    builder.addCase(fetchCurrentPhoto.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })

    //builders for fetchByDate

    builder.addCase(fetchPhotoByDate.pending, (state, action) => {
      console.log('loaded')
      state.status = 'loading';
  })
    builder.addCase(fetchPhotoByDate.fulfilled, (state, action) => {
      state.status = "succeeded";
      // state.photo.slice(0, 1)
      // state.photo.slice(0, 1)
      // state.photo[0] = action.payload
      state.photo.push(action.payload)
      // state.photo.push(action.payload)
      // console.log('photo changed')

         // ...state,
        // staus: "succeeded",
        // photo: state.photo.splice(0, 1, action.payload),
   
    })
  
    builder.addCase(fetchPhotoByDate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
    })
  }
});


//use middleware Thunk to be able to do an async function
//dispatch must be definied as type AppDispatch(more explanation!)
//.get function must be defined as type Photo, otherwise it will be type any and cause error in Typescript
   //However.. it still comes in as an object with the API's defined names and additional info
   export const { setDate } = currentPhotoSlice.actions

export default currentPhotoSlice.reducer;

