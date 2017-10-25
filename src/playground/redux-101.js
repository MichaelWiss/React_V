import { createStore } from 'redux';

//action generators

const add = ({ a, b}, c) => {
   return a + b + c;
};

console.log(add({ a: 1, b: 12 }, 100));

const incrementCount = (payload = {}) => ({
      type: 'INCREMENT',
      incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});



const store = createStore((state = {count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
		  return {
      count: state.count + 1 + action.incrementBy
    };
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1;
         return {
    	count: state.count - decrementBy
    };
    case 'SET':
       return {
       	count: action.count
       };
    case 'RESET':
         count: 0
    default:
      return state;
  };
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});



//increment
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 15
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());




store.dispatch({
  type: 'DECREMENT',
  decrementBy: 3
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
	type: 'RESET'
});

store.dispatch(incrementCount());


store.dispatch(incrementCount());

store.dispatch(incrementCount());


store.dispatch({
	type: 'SET',
	count: 101
});




