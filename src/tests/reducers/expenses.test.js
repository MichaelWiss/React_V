import expensesReducer from '../../reducers/expenses';

test('should set default star', () => {
   const state = expensesReducer(undefined, { type: '@@INIT' });
   expect(state).toEqual([]);
});