import React from 'react';
import { connect } from 'react-redux';

const ExpenseListitem = (props) => (
  <div>
    <h1>Expense List Item</h1>
    {props.filters.text}
    {props.expenses}
  </div>
);