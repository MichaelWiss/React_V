import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default star', () => {
   const state = expensesReducer(undefined, { type: '@@INIT' });
   expect(state).toEqual([]);
});

