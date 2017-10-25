import { createStore } from 'redux';

//action generators

const add = ({ a, b}, c) => {
   return a + b + c;
};

console.log(add({ a: 1, b: 12 }, 100));

const incrementCount = ({ incrementBy = 1 }= {}) => ({
      type: 'INCREMENT',
      incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
	type: 'DECREMENT',
    decrementBy

});



const store = createStore((state = {count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
		  return {
      count: state.count + 1 + action.incrementBy
    };
        case 'DECREMENT':
         return {
    	count: state.count - action.decrementBy
    };
    case 'SET':
       return {
       	count: action.count
       };
    case 'RESET':
        return {
         count: 0
        };
    default:
      return state;
  }
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




store.dispatch({
	type: 'RESET'
});

store.dispatch(decrementCount());


store.dispatch(decrementCount({ decrementBy: 10 }));






store.dispatch({
	type: 'SET',
	count: 101
});




