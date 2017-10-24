import { createStore } from 'redux';



const store = createStore((state = {count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
		const incrementBy = typeof  action.incrementBy === 'number' ? action.incrementBy: 1;
		  return {
      count: state.count + 1 + incrementBy
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
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 15
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 3
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'INCREMENT'
});


store.dispatch({
	type: 'RESET'
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
	type: 'SET',
	count: 101
});




