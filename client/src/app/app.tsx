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
import NavBar from "../app/components/navbar"
import { User } from "./features/auth0/types"

//App doesn't need to be wrapped here as it already is being wrapped by provider in Index.tsx. If wrapped in two places Redux store won't function right.

export default function App (){

  
//Why should I use useDispatch here instead of AppDispatch? What exactly is the difference for Typescript? 
const dispatch = useDispatch();

//Need to export RootState and set state type to RootState to access reducers
const photoStatus : string = useSelector((state: RootState) => state.currentPhoto.status)
const error : string | null | undefined = useSelector((state: RootState) => state.currentPhoto.error)
const userLoaded : boolean = useSelector((state: RootState) => state.favorites.userLoaded)
const user : User | {} = useSelector((state: RootState) => state.favorites.user)


useEffect(() => {
  if(photoStatus == 'idle')
  dispatch(fetchCurrentPhoto())
  // Adding the empty array as a second argument ensures it only is called once.
}, [])

useEffect(() => {
  if(userLoaded === true)
  dispatch(fetchFavorites(user))
  console.log('useEffect hit?')
  //Watches userLoaded and runs if changed
}, [userLoaded])

let content 
if(photoStatus === 'loading'){
   content =
  <div>
  <p> Loading</p>
   </div>

}  else if (photoStatus === 'succeeded' && userLoaded === true){
    content =
    <div>
      <CurrentPhoto></CurrentPhoto>
      <Favorites></Favorites>
    </div>
} else if (photoStatus === 'succeeded' && userLoaded === false) {
    content = 
    <div>
      <CurrentPhoto></CurrentPhoto>
     <div>To Access Your Favorites Please Log In</div>
    </div>
 } else if (photoStatus === 'failed') {
   content = 
   <div>
   <h3> {error}</h3> 
   <h5>Select A Date isn't in The Future </h5>
   </div>
 }


  return (
    <div className="App">
    <NavBar></NavBar>
    <div>
    <h2 className="pt-2">NASA Picture of The Day</h2>
   {content}
     
    </div>

    </div>
  );
}

