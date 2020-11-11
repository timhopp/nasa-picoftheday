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
import DateSelector from "./components/datePicker";

export default function App (){

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
      <div className="">
      <h5 className="">Select A Date</h5>
        <DateSelector></DateSelector> 
        <Favorites></Favorites>
      </div>
      </div>


} else if (photoStatus === 'succeeded' && userLoaded === false) {
    content = 
    <div>
      <CurrentPhoto></CurrentPhoto>
      <h5 className="">Select A Date</h5>
        <DateSelector></DateSelector> 
     <h5 className="mt-4">To Access Your Favorites Please Log In</h5>
    </div>
 } else if (photoStatus === 'failed') {
   content = 
   <div>
   <h3> {error}</h3> 
   <h5>Sorry About That! Try selecting A Date isn't in The Future. </h5>
   </div>
 }


  return (
    <div className="App">
    <NavBar></NavBar>
    <div>
    <h2>NASA Picture of The Day</h2>
   {content}
    
    </div>
    </div>
  );
}

