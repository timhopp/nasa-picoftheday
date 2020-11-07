import React, { useEffect } from 'react';
import './App.css';
import rootReducer from "../app/reducers/index";
import {Provider} from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentPhoto} from "../app/reducers/currentPhotoSlice";
import { fetchFavorites } from "../app/reducers/favoriteSlice";
import thunkMiddleware from "redux-thunk";
import CurrentPhoto from "../app/components/currentPhoto"
import Favorites from "../app/components/favorites";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RootState } from "../app/store"


const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer);


const AppWrapper = () => {
  const store = createStore(rootReducer, undefined, composedEnhancers);

  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

const App = () => {

  
//Why should I use useDispatch here instead of AppDispatch? What exactly is the difference for Typescript? 
const dispatch = useDispatch();

//Need to export RootState and set state type to RootState to access reducers
const photoStatus = useSelector((state: RootState) => state.currentPhoto.status)
const error = useSelector((state: RootState) => state.currentPhoto.error)
// const currentPhoto = useSelector((state: RootState) => state.currentPhoto.photo[0]); 
// const updated = useSelector((state: RootState) => state.currentPhoto.updated )


useEffect(() => {
  if(photoStatus == 'idle')
  dispatch(fetchCurrentPhoto())
  dispatch(fetchFavorites())
  //Adding the empty array as a second argument ensures it only is called once. 
  //https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once
}, [])




let content 
if(photoStatus === 'loading'){
   content =
  <div> Loading </div>
} else if (photoStatus === 'succeeded') {
   content = 
  <div>
   <CurrentPhoto></CurrentPhoto>

    </div>
} else if (photoStatus === 'failed') {
   content = 
   <div>{error}</div> 
 }

  return (
    <div className="App">
      <header className="App-header">
       NASA Picture of The Day App
      </header>
    <div>
    {content}
       <Favorites></Favorites>
    </div>



    </div>
  );
}

export default AppWrapper;