import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
           this.props.dispatch(editExpense(this.props.expense.id, expense));
           this.props.history.push('/');
	     };
	   onRemove = () => {
	      props.dispatch(removeExpense({ id: props.expense.id }));
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
	    <button onClick={}>Remove</button>
	  </div>
	);
};

const mapStateToProps = (state, props) => {
   return {
     expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};  

export default connect(mapStateToProps)(EditExpensePage);