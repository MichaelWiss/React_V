import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
           props.dispatch(editExpense(props.expense.id, expense));
           props.history.push('/');
	     } 
};

const EditExpensePage = (props) => {
    console.log(props);
	return (
	  <div>
	   <ExpenseForm
	     expense={props.expense}
	     onSubmit={}
	    />
	    <button onClick={(e) => {
	      props.dispatch(removeExpense({ id: props.expense.id }));
	      props.history.push('/');
	    }}>Remove</button>
	  </div>
	);
};

const mapStateToProps = (state, props) => {
   return {
     expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};  

export default connect(mapStateToProps)(EditExpensePage);