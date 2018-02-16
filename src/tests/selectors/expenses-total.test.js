import selectExpensesTotal from '../../selectors/expenses-total';
import expense from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
   const res = selectExpensesTotal([]);
   expect(res).toBe(0);
});