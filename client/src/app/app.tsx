import React, { useEffect } from 'react';
import './app.css';
import { applyMiddleware, createStore, compose } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentPhoto} from "../app/reducers/currentPhotoSlice";
import { fetchFavorites } from "../app/reducers/favoriteSlice";
import thunkMiddleware from "redux-thunk";
import CurrentPhoto from "../app/components/currentPhoto"
import Favorites from "../app/components/favorites";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RootState } from "./reducers/index"



const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer);


const AppWrapper = () => {
  // const store = createStore(rootReducer, undefined, composedEnhancers);

  return (
   
      <App/>

  )
}

const App = () => {

  
//Why should I use useDispatch here instead of AppDispatch? What exactly is the difference for Typescript? 
const dispatch = useDispatch();

//Need to export RootState and set state type to RootState to access reducers
const photoStatus : string = useSelector((state: RootState) => state.currentPhoto.status)
const error : string | null | undefined = useSelector((state: RootState) => state.currentPhoto.error)


useEffect(() => {
  if(photoStatus == 'idle')
  dispatch(fetchCurrentPhoto())
  dispatch(fetchFavorites())
  // Adding the empty array as a second argument ensures it only is called once.
}, [])

let content 
if(photoStatus === 'loading'){
   content =
  <div>
  <h1>NASA Picture of The Day</h1>
  <p> Loading</p>
   </div>

} else if (photoStatus === 'succeeded') {
   content = 
   <div>
     <CurrentPhoto></CurrentPhoto>
   </div>

} else if (photoStatus === 'failed') {
   content = 
   <div> {error}</div> 
 }


  return (
    <div className="App">
    <div>
    <h2 className="pt-2">NASA Picture of The Day</h2>
   {content}
       <Favorites></Favorites>
    </div>



    </div>
  );
}

export default AppWrapper;