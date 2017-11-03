import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//expenses reducer
const addExpense = (
   { 
      desription = '', 
      note = '', 
      amount= 0, 
      createdAt = 0 
   } = {}
   ) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
});

const expensesReducerDefaultState = []; 

const expensesReducer = (state = expensesReducerDefaultState , action) => {
     switch (action.type) {
        case "ADD_EXPENSE":
         return state.concat(action.expense);
        default:
           return state;
     }   
};

const filtersReducerDefaultState = {
   text: '',
   sortBy: 'date',
   startDate: undefined,
   endDate: undefined,
};


const filtersReducer = (state= filtersReducerDefaultState, action) => {
   switch (action.type) {
      default:
        return state;
   }
};



//store creation
const store = createStore(
   combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
 );

store.subscribe(() => {
   console.log(store.getState());
});

store.dispatch(addExpense({ description: 'Rent' amount: 100 }));




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