import React from "react";
import { Photo } from "../features/photos/types";
import { connect } from "react-redux"
import { AppDispatch } from "../store"
import {  setCurrentFavorite } from "../reducers/favoriteSlice";

interface favProps {
  fav: Photo
  currentFavorite: (fav: Photo) => void
}

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
   currentFavorite: (fav: Photo) => dispatch(setCurrentFavorite(fav))
  }
}


export default connect(null, mapDispatchToProps)(Favorite)