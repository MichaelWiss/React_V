import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm.js';
import { addExpense } from '../actions/expenses';

import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const AddExpensePage = (props) => (
	  <div>
	    <h1>Add Expense</h1>
	    <ExpenseForm 
           onSubmit={(expense) => {
             //props.dispatch(addExpense(expense));
             props.onSubmit(expense);
             props.history.push('/');
           }}
	    />
	 </div>
);

const mapDispatchToProps = (dispatch) => ({
      onSubmit: (expense) => dispatch(addExpense(expense))
});


export default connect(undefined, )(AddExpensePage);