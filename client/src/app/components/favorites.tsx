import React,{ Component } from "react";
import { connect } from "react-redux"
import { AppDispatch} from "../store"
import { RootState } from "../reducers/index";
import { addFavorite, removeFavorite, } from "../reducers/favoriteSlice";
import { Photo } from "../features/photos/types";
import { User } from "../features/auth0/types"
import DateSelector from "./datePicker";
import Favorite from "./favoriteCom";
import { Modal } from "react-bootstrap"
import '../app.css';
import  store  from "../store"


//Both actions and objects need to be passed into the component as a prop with a type
interface favoriteProps {
  currentPhoto: Photo
  currentFav: Photo
  favorites: Photo[]
  user: User
  removeFavorite: (currentFav: Photo) => void
}

interface IState {
  show: boolean
}

class Favorites extends React.Component<favoriteProps, IState> {

  constructor(props: favoriteProps) {
    super(props);
    this.state = {
      show: false,
    }
    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleShow(){ this.setState({ show: true }) } 
  handleClose(){ this.setState({  show: false }) }

  addFavorite(newFavorite : Photo){
    debugger
    if(this.props.favorites.filter(fav => fav.title === newFavorite.title).length > 0 ){
      alert("Cannot have the same favorite twice!")
    } else {
     let updatedFav = Object.assign({}, newFavorite, {email: this.props.user.email})
      store.dispatch(addFavorite(updatedFav))
  }
}


  render(){
    return (
      <div>

      <div className="container-fluid">
       <div className= "row justify-content-center">
      <div className="col">

      <button className="btn btn-success"  onClick={() => this.addFavorite(this.props.currentPhoto)}>Add To Favorites</button>
      </div>
      <div className="col">


      <h5 className="">Select A Date</h5>
        <DateSelector></DateSelector> 
      </div>
      </div>
      <div className = "container-fluid">
        <div className= "row justify-content-center">
        <h5>Favorites</h5>

        </div>
        <div className="row justify-content-center">
          {this.props.favorites.map((fav) => (
            <div className="col-2 bg-info m-3 rounded pointer hover" key={fav._id} onClick={this.handleShow}>
              <Favorite key={fav.title} fav={fav}></Favorite>

            </div>
          ))}
       
      </div>
      </div>
    </div>

{/* Requires turnary, otherwise will error out because currentFav prop doesn't exist */}
{this.props.currentFav? 
  <Modal show={this.state.show}  size="lg" onHide={this.handleClose}>
        <Modal.Body className="bg-dark"  >
          <div className="container-fluid">
            <div className="row justify-content-center text-white">
           <h2>{this.props.currentFav.title}</h2> 
            <img className="img mb-5"
                src={this.props.currentFav.url}
             alt="Image Not Available" ></img>
            <p className="ml-4 mr-4">{this.props.currentFav.explanation}</p>
            <button className="btn btn-danger mr-3" onClick={() => {this.props.removeFavorite(this.props.currentFav); this.handleClose() }}>Remove</button>
            <button className="btn btn-danger ml-3" onClick={this.handleClose}>
            Close
          </button>

            </div>
            </div>
         
        </Modal.Body>
      </Modal>

: null
}
  


    </div>
    )
  }
}
const mapStateToProps = (state: RootState ) => {
  return { 
    currentPhoto: state.currentPhoto.photo,
    favorites: state.favorites.favorites,
    currentFav: state.favorites.currentFavorite[0],
    user: state.favorites.user
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    // addFavorite: (newFavorite: Photo) => dispatch(addFavorite(newFavorite)),
    removeFavorite: (fav: Photo) => dispatch(removeFavorite(fav._id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
(Favorites);