import React from "react";
import { Photo } from "../features/photos/types";
import { connect } from "react-redux"
import  { RootState } from "../store";
import { AppDispatch } from "../store"
import { removeFavorite, setCurrentFavorite } from "../reducers/favoriteSlice";

interface favProps {
  fav: Photo
  removeFavorite: (fav: Photo) => void
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
        <img className="favimg pt-2 pb-2" src={this.props.fav.url} alt="Image Not Available"></img>

        </div>
        <button className="btn btn-danger m-2" onClick={() => this.props.removeFavorite(this.props.fav)}>Remove</button>
      </div>
    )

  }

}


const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    // deleteFavorite: (fav: Photo) => dispatch(deleteFavorite(fav)),
    removeFavorite: (fav: Photo) => dispatch(removeFavorite(fav._id)),
    currentFavorite: (fav: Photo) => dispatch(setCurrentFavorite(fav))
  }
}


export default connect(null, mapDispatchToProps)(Favorite)