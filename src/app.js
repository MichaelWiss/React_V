import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

//water bill
//gas bill

const expenseOne = store.dispatch(addExpense({ description: 'Water Bill', amount: 70, createdAt: 1200 }));

const expenseTwo = store.dispatch(addExpense({ description: 'Gas Bill', amount: 40, createdAt: 1000 }));

store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);



ReactDOM.render(<AppRouter />, document.getElementById('app'));
	
