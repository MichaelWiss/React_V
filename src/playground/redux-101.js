import { createStore } from 'redux';

//action generators

const add = ({ a, b}, c) => {
   return a + b + c;
};

console.log(add({ a: 1, b: 12 }, 100));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
      type: 'INCREMENT',
      incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
	type: 'DECREMENT',
    decrementBy
});

//setCount
const setCount = ({ setCount }) => ({
	type: 'SET',
	setCount
});

//resetCount
const resetCount = () => ({
	type: 'RESET',
});

//reducers
const countReducer = (state = {count: 0 }, action) => {
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
       	count: action.setCount
       };
    case 'RESET':
        return {
         count: 0
        };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});







//increment
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 15
// });

store.dispatch(incrementCount({ incrementBy: 5 }));




store.dispatch(resetCount());

store.dispatch(decrementCount());


store.dispatch(decrementCount({ decrementBy: 10 }));






store.dispatch(setCount({ setCount: 200 }));




