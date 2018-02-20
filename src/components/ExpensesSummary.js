import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

const ExpenseSummary = ({ expenseCoun, expenseTotal }) => {
	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
   return (
   	<div>
   	  <h1>Viewing {expenseCount} expenses totaling $12.94</h1>
   	</div>
   	)
};
