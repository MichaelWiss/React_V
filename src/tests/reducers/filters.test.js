import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    
});