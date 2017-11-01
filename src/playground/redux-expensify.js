import { createStore, combineReducers } from 'redux';

//expenses reducer

const expensesReducerDefaultState = []; 

const expensesReducer = (state = expensesReducerDefaultState , action) => {
     switch (action.type) {
        default:
           return state;
     }   
};

//store creation
const store = createStore(expensesReducer);

console.log(store.getState());

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