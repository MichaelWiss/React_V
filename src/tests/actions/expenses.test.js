import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moment from 'moment';
import expenses from '../fixtures/expenses';


import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
   const action = removeExpense({ id: '123abc' });
   expect(action).toEqual({
       type: 'REMOVE_EXPENSE',
       id: '123abc'
   });
});

test('should setup editExpense action object', () => {
	const action = editExpense('123abc', { note: 'New note value' });
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
        	note: 'New note value'
        }
	});
});

test('should setup add expense object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', () => {
   
});

test('should add expense with defaults and store', () => {

});

// test('should setup addExpense action object with default values', () => {
// 	const action = addExpense();
// 	expect(action).toEqual({
//        type: 'ADD_EXPENSE',
//        expense: {
//        	id: expect.any(String),
//        	description: '',
//        	note: '',
//        	amount: 0,
//        	createdAt: 0
//        }
// 	});
// });