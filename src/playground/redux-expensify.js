import { createStore, combineReducers } from 'redux';

//expenses reducer

const expensesReducerDefaultState = []; 

const expensesReducer = (expensesReducerDefaultState , action) => {
     switch (action.type) {
        default:
           return state;
     }   
};

const demoState ={
   expenses: [{
   	id:'kkhdfhoajfoa',
   	description: 'January rent',
   	note: 'This was the final payment for the address',
   	amount: 54500,
   	createdAt: 0
   }],
   filters: {
   	test: 'rent',
   	sortBy: 'amount', //date or amount
   	startDate: undefined,
   	endDate: undefined
   }
};