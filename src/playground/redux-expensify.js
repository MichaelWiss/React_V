import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//expenses reducer
const addExpense = (
   { 
      description = '', 
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

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id 
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (id, updates) => ({
   type: 'SET_TEXT_FILTER',
   id,
   updates
});

const expensesReducerDefaultState = []; 

const expensesReducer = (state = expensesReducerDefaultState , action) => {
     switch (action.type) {
        case "ADD_EXPENSE":
         return [
           ...state,
           action.expense
         ];
         case 'REMOVE_EXPENSE':
          return state.filter(({id}) => id !== action.id);
         case 'EDIT_EXPENSE':
          return state.map((expense) => {
            if(expense.id === action.id) {
              return {
                ...expense,
                ...action.updates
              };
            } else {
               return expense;
            }
          }); 
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
      case 'SET_TEXT_FILTER':
      return state.map((text) => {
         if (text.id === action.id) {
          return {
            ...text,
            ...action.updates
         };
      } else {
        return text;
       }
      }); 
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

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 150}));
const expenseThree = store.dispatch(addExpense({ description: 'Plant', amount: 73 }));
const removeOne = store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());



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

const user = {
   name: 'Jen',
   age: 24
};

console.log({
  ...user,
  age: 34,
  location: 'New York'
});












