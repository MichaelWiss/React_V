import React from 'react';
import ExpenseForm from './ExpenseForm.js';

import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const AddExpensePage = () => (
	  <div>
	    <h1>Add Expense</h1>
	    <ExpenseForm />
	 </div>
);

export default AddExpensePage;