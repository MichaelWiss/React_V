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
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});


export const startAddExpense = (expenseData = {}) => {
   return (dispatch) => {
      const {
      description = '', 
      note = '', 
      amount= 0, 
      createdAt = 0
      } = expenseData;
      const expense = { description, note, createdAt };
      database.ref('expenses').push(expense).then((ref) => {
         dispatch(addExpense({
          id: ref.key.key,
          ...expense
         }));
      });
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