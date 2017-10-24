import { createStore } from 'redux';



const store = createStore((state = {count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
		  return {
      count: state.count + 1
    };
    case 'DECREMENT':
    return {
    	count: state.count -1
    };
    case 'RESET':
         count: state.count = 0
    default:
      return state;
  };
});

store.subscribe(() => {
  console.log(store.getState());
});



//increment
store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'DECREMENT'
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


