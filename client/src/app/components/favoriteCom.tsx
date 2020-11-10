import React from "react";
import { Photo } from "../features/photos/types";
import { connect } from "react-redux"
import { AppDispatch } from "../store"
import {  setCurrentFavorite } from "../reducers/favoriteSlice";

interface favProps {
  fav: Photo
  
  currentFavorite: (fav: Photo) => void
}
//The prop needs to be passed in, then also compared (need to know why it can't be just the right object though)
class Favorite extends React.Component<favProps>{
  
  constructor(props: favProps){
    super(props)
  }
  
  render(){
    return (

      <div className=""  onClick={() => this.props.currentFavorite(this.props.fav)}>
        <div className="">{this.props.fav.title}</div>
        <div className="row justify-content-center">
        <img className="favimg p-1" src={this.props.fav.url} alt="Image Not Available"></img>

        </div>
        
      </div>
    )

  }

}


const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    // deleteFavorite: (fav: Photo) => dispatch(deleteFavorite(fav)),
  
    currentFavorite: (fav: Photo) => dispatch(setCurrentFavorite(fav))
  }
}


export default connect(null, mapDispatchToProps)(Favorite)