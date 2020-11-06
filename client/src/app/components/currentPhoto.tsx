import React, { Component } from "react"
import { Photo } from "../features/photos/types"
import { connect } from "react-redux"

import { fetchPhotoByDate } from "../reducers/currentPhotoSlice";
import moment from "moment"
import  store, {  RootState }  from "../store"

interface currentProps {
  currentPhoto: Photo

  // currentDate: string,
  //currently optional because it may or may not be dispatched?? 
  fetchPhotoByDate?: (newDate: string) => void

}

//Need to create a state interface for local state values
interface IState { 
  currentDate: string,
  today: string
}

//You need to define the prop { photo } then state that the prop is a type Photo
class  CurrentPhoto extends React.Component<currentProps, IState>{

  constructor(props: currentProps) {
    super(props)
    this.state = {
        currentDate: "",
        today: ""
      };
      //The functions this needs to be bound to the this.state, otherwise the state won't be recognizable
      this.fetchPrevious = this.fetchPrevious.bind(this);
      this.fetchNext = this.fetchNext.bind(this);
  }

  //Need to add a way to check is date is future
  fetchNext(){
    let checkedDate = ""
    if(this.state.currentDate === ""){
      let createCurrent = new Date()
      checkedDate = moment(createCurrent).format("yyyy-MM-DD")
      this.setState({ currentDate : checkedDate})
      this.setState({ today: checkedDate})
    } else {
      checkedDate = this.state.currentDate 
    }
   let newDate = moment(checkedDate).add(1, 'days').format("yyyy-MM-DD")
   this.setState({ currentDate: newDate})
   console.log('hit', newDate)
   store.dispatch(fetchPhotoByDate(newDate))
  }

  fetchPrevious(){
    let checkedDate = ""
    if(this.state.currentDate === ""){
      let createCurrent = new Date()
      checkedDate = moment(createCurrent).format("yyyy-MM-DD")
      this.setState({ currentDate : checkedDate})
      this.setState({ today: checkedDate})
    } else {
      checkedDate = this.state.currentDate 
    }
    let newDate = moment(checkedDate).subtract(1, 'days').format("yyyy-MM-DD")
    this.setState({ currentDate: newDate})
    console.log('hit', newDate)
    store.dispatch(fetchPhotoByDate(newDate))
    
  }
//  const dispatch = useDispatch()

  // const fetchNewDate = useCallback(() => {

  // })
  

render(){
  return(
    <div className="container-fluid">
      <div className="row align-items-center">
      <button className="col btn btn-info ml-2" 
      //Cannot call the function, as it returns void and is not assignable to onClick. So you need a new function that calls handleChange
      //WHY does that not work though? has to call directly???
      onClick={this.fetchPrevious}
      // onClick={() => this.props.fetchPhotoByDate(this.props.newDate)}
      
      >Previous</button>
      <div className="col-8">
        <h2>{this.props.currentPhoto.title}</h2>
        <img className="img" src={this.props.currentPhoto.url} alt="Image Not Available"></img>
        <p>{this.props.currentPhoto.explanation}</p>
        
        </div>
      <button className="col btn btn-info mr-2" onClick={this.fetchNext}>Next</button>
      </div>
  
    </div>
  )
}
}

const mapStateToProps = (state: RootState ) => {
  console.log('map hit',state)
  return { 
    currentPhoto: state.currentPhoto.photo[0],
  }
}
// const mapDispatchToProps = (dispatch: AppDispatch) => {
//   return {
//     fetchPhotoByDate: (date: string) => dispatch(fetchPhotoByDate(date))
//   }
// }

export default connect(mapStateToProps)(CurrentPhoto)

