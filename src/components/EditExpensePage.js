import React from 'react';
import { connect } from 'react-router';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const EditExpensePage = (props) => {
    console.log(props);
	return (
	  <div>
	   Editing the expense with id of {props.match.params.id} 
	  </div>
	);
};

const mapStateToProps = (state, props) => {
   return {
     expense: state.expenses.find(expense) => {

     }
  }
};  

export default EditExpensePage;