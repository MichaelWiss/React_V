import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm.js';

import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const AddExpensePage = () => (
	  <div>
	    <h1>Add Expense</h1>
	    <ExpenseForm 
           onSubmit={(expense) => {
             console.log(expense);
           }}
	    />
	 </div>
);


export default connect()(AddExpensePage);