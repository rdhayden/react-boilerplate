import { createStore } from 'redux';

// Action generator

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy,
});

const resetCount = () => ({
  type: 'RESET',
});

const setCount = ({ count = 0 } = {}) => ({
  type: 'SET',
  count,
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action, return new state
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy,
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy,
      };
    case 'RESET':
      return {
        count: 0,
      };
    case 'SET':
      return {
        count: action.count,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5,
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
//   type: 'INCREMENT',
// });
store.dispatch(incrementCount());

// store.dispatch({
//   type: 'RESET',
// });
store.dispatch(resetCount());

// store.dispatch({
//   type: 'DECREMENT',
// });
store.dispatch(decrementCount());

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 5,
// });
store.dispatch(decrementCount({ decrementBy: 5 }));

// store.dispatch({
//   type: 'SET',
//   count: 10,
// });
store.dispatch(setCount({ count: 10 }));
