import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPhotoByDate, setDate } from "../reducers/currentPhotoSlice";
import moment from "moment";
import store from "../store";
import { RootState } from "../reducers/index"
import { PhotoCom } from "./photo"

interface currentProps {
  date: string
  //currently optional because it may or may not be dispatched??
  fetchPhotoByDate?: (newDate: string) => void
}

//Need to create a state interface for local state values
interface IState {
  currentDate: string;
  today: string;
}

//You need to define the prop { photo } then state that the prop is a type Photo
class CurrentPhoto extends React.Component<currentProps, IState> {
  constructor(props: currentProps) {
    super(props);
    this.state = {
      currentDate: "",
      today: "",
    },
    //The functions this needs to be bound to the this.state, otherwise the state won't be recognizable
    this.fetchPrevious = this.fetchPrevious.bind(this);
    this.fetchNext = this.fetchNext.bind(this);
  }

  //Need to add a way to check is date is future
  fetchNext() {
    let checkedDate = "";
    if (this.props.date === "") {
      let createCurrent = new Date();
      checkedDate = moment(createCurrent).format("yyyy-MM-DD");
      store.dispatch(setDate(checkedDate))
    } else {
      checkedDate = this.props.date
    }
    let newDate = moment(checkedDate).add(1, "days").format("yyyy-MM-DD");
    store.dispatch(setDate(newDate))
    console.log("hit", newDate);
    store.dispatch(fetchPhotoByDate(newDate));
  }

  fetchPrevious() {
    let checkedDate = "";
    if (this.props.date === "") {
      let createCurrent = new Date();
      checkedDate = moment(createCurrent).format("yyyy-MM-DD");
      store.dispatch(setDate(checkedDate))
    
    } else {
      checkedDate = this.props.date;
    }
    let newDate = moment(checkedDate).subtract(1, "days").format("yyyy-MM-DD");
    console.log("hit", newDate);
    store.dispatch(setDate(newDate))
    store.dispatch(fetchPhotoByDate(newDate));
  }

  checkState(){
    console.log('state set',this.state.currentDate)
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="row align-items-center">
          <button
            className="col btn btn-info ml-5"
            onClick={this.fetchPrevious}>
            Previous
          </button>
          <div className="col-8">
           <PhotoCom></PhotoCom>
          </div>
          <button className="col btn btn-info mr-5" onClick={this.fetchNext}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  console.log('map hit')
  return {
    date: state.currentPhoto.date
  }
}


export default connect(mapStateToProps)(CurrentPhoto);
