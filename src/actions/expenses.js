import uuid from 'uuid';
import database from '../firebase/firebase';

// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes
// components calls actions generator
//action generator returns function
//function runs(has the ability to dispatch other actions)


//expenses reducer
export const addExpense = (
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


export const startAddExpense = (expenseData = {}) => {
   return (dispatch) => {
      const {
      description = '', 
      note = '', 
      amount= 0, 
      createdAt = 0
      } = expenseData;

   };
};

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id 
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});