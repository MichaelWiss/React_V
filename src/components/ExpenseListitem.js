import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';


const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onChange={(e) => {
	  	props.dispatch(removeExpense(e.target.value));
	  }}>Remove</button>
  </div>
);

export default connect(removeExpense)(ExpenseListItem);