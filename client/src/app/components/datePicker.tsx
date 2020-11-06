import React, { useState } from "react";
import  store  from "../store"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fetchPhotoByDate, setDate} from "../reducers/currentPhotoSlice"
import moment from "moment"
import { connect } from "react-redux"
import { AppDispatch, RootState } from "../store" 


interface DateProps {
  startDate?: Date; 
 
}

//{} type is required to create new Date() in state
export default class DateSelector extends React.Component <{}, DateProps>{
constructor(props : DateProps) {
  super(props);
  this.state = {
    startDate: new Date()
  };
  this.handleChange = this.handleChange.bind(this);
}


handleChange(date: Date) {
  let formattedDate = moment(date).format("yyyy-MM-DD")
  console.log('date is here!', formattedDate);
  store.dispatch(setDate(formattedDate))
  store.dispatch(fetchPhotoByDate(formattedDate))
  this.setState({
    startDate: date });
  // this.props.changePhoto(date);
  }



render(){
  const  { startDate } = this.state;
return ( 
    <DatePicker className="m-5"  dateFormat="yyyy/MM/dd" selected={startDate}
     onChange={this.handleChange}  
    showYearDropdown

    />
)
}
};


// const mapDispatchToProps = (dispatch: AppDispatch) => {
//   return {
//   }
// }

// const mapStateToProps = (state: RootState) => {
//   return {
//   }
// }

// const mapDispatchToProps = ( dispatch: AppDispatch) => {
//   return {
// }}

// export default connect()(DateSelector);
