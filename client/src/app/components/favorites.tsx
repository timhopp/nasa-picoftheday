import React,{ Component } from "react";
import { connect } from "react-redux"
import { AppDispatch} from "../store"
import { RootState } from "../reducers/index";
import { addFavorite } from "../reducers/favoriteSlice";
import { Photo } from "../features/photos/types";
import DateSelector from "./datePicker";
import Favorite from "./favoriteCom";


//Both actions and objects need to be passed into the component as a prop with a type
interface favoriteProps {
  currentPhoto: Photo
  currentFav: Photo
  favorites: Photo[]
  addFavorite: (currentPhoto: Photo) => void
}


class Favorites extends React.Component<favoriteProps> {

  constructor(props: favoriteProps) {
    super(props)
  }

  render(){
    return (
      <div>
      <div className="container-fluid">
       <div className= "row justify-content-center">
      <div className="col">

      <button className="btn btn-success"  onClick={() => this.props.addFavorite(this.props.currentPhoto)}> Favorite</button>
      </div>
      <div> You have {this.props.favorites.length} favorites</div>
      <div className="col">


      <div className="">Date</div>
        <DateSelector></DateSelector> 
      </div>
      </div>
      <div className = "container-fluid">
        <div className= "row justify-content-center">
        <h5>Favorites</h5>

        </div>
        <div className="row justify-content-center">
          {this.props.favorites.map((fav) => (
            <div className="col-3 bg-info m-3" key={fav._id} data-toggle="modal" data-target="#exampleModal">
              <Favorite key={fav.title} fav={fav}></Favorite>

            </div>
          ))}
       
      </div>
      </div>
    </div>

{this.props.currentFav? 

    <div className="modal" id="exampleModal"  role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Current Favorite</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div>
<h2 className="mt-2">{this.props.currentFav.title}</h2>
            <div className="row justify-content-center">
              <img
                className="img mb-5"
                src={this.props.currentFav.url}
                alt="Image Not Available"
              ></img>
            </div>
            <p className="mt-3">{this.props.currentFav.explanation}</p>
</div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Save changes</button>
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


: null
}



    </div>
    )
  }
}
const mapStateToProps = (state: RootState ) => {
  return { 
    currentPhoto: state.currentPhoto.photo[0],
    favorites: state.favorites.favorites,
    currentFav: state.favorites.currentFavorite[0],
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    addFavorite: (newFavorite: Photo) => dispatch(addFavorite(newFavorite))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
(Favorites);