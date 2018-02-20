import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

const ExpenseSummary = ({ expenseCoun, expenseTotal }) => {
	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
	const formattedExpensesTotal = numeral(expenseTotal / 100).format('$0,0.00');
   return (
   	<div>
   	  <h1>Viewing {expenseCount} {expenseWord} totaling {formattedExpensesTotal}</h1>
   	</div>
   	)
};
