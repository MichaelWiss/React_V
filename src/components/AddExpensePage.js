import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm.js';
import { addExpense } from '../actions/expenses';

import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

export class AddExpensePage extends React.Component {
	onSubmit = (expense) => {
		this.props.addExpense(expense);
		this.props.history.push('/');
	};
	render() {
		return (
		<div>
	      <h1>Add Expense</h1>
	      <ExpenseForm 
             onSubmit={this.onSubmit}
	      />
	    </div>
 )
	}
}



const mapDispatchToProps = (dispatch) => ({
      AddExpense: (expense) => dispatch(addExpense(expense))
});


export default connect(undefined, mapDispatchToProps)(AddExpensePage);