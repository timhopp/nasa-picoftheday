import React from "react";
import { Photo } from "../features/photos/types";
import { connect } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { deleteFavorite } from "../reducers/favoriteSlice";

interface favProps {
  fav: Photo
  deleteFavorite: (fav: Photo) => void
}
//The prop needs to be passed in, then also compared (need to know why it can't be just the right object though)
class Favorite extends React.Component<favProps>{
  
  constructor(props: favProps){
    super(props)
  }
  
  render(){
    return (
      <div className="col-3 p-2 bg-info m-3">
        <div>{this.props.fav.title}</div>
        <img className="favimg" src={this.props.fav.url} alt="Image Not Available"></img>
        <button className="btn btn-danger" onClick={() => this.props.deleteFavorite(this.props.fav)}>Remove</button>
      </div>
    )

  }

}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    deleteFavorite: (fav: Photo) => dispatch(deleteFavorite(fav))
  }
}


export default connect(null, mapDispatchToProps)(Favorite)