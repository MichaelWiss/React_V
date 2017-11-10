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

const setTextFilter = (text = '') => ({
   type: 'SET_TEXT_FILTER',
   text
});

const sortByAmount = () => ({
   type: 'SORT_BY_AMOUNT',
});

const sortByDate = () => ({
   type: 'SORT_BY_ DATE',
});

const setStartDate = (startDate) => ({
   type: 'SET_START_DATE',
   startDate
});

const setEndDate = (endDate) => ({
   type: 'SET_END_DATE',
   endDate
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
          return {
            ...state,
            text: action.text
         };
      case 'SORT_BY_AMOUNT':
        return {
         ...state,
         sortBy: 'amount'
        }; 
      case 'SORT_BY_ DATE':
        return {
         ...state,
         sortBy: 'date'
        };
      case 'SET_START_DATE':
         return {
            ...state,
            startDate: action.startDate
       }; 
       case 'SET_END_DATE':
         return {
            ...state,
            endDate: action.endDate
         };     
      default:
        return state;
   }
};

//timestamps

//get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
   return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
   });
};



//store creation
const store = createStore(
   combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
 );

store.subscribe(() => {
   const state = store.getState();
   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
   console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 150, createdAt: -1000 }));
// const expenseThree = store.dispatch(addExpense({ description: 'Plant', amount: 73 }));
// const removeOne = store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));



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












