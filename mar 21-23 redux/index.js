import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; // middlerware

/**
 const store = createStore(reducer);
 function reducer(state = { amount: 1 }, action) {
     if (action.type === "inc") {
        // immutable
         return { amount: state.amount + 1 };
        }
        return state;
    }
    
    console.log(store.getState());
    store.dispatch({ type: "inc" });
    console.log(store.getState());
    
    * 
    */

/**
     * 

const store = createStore(reducer);
function reducer(state = { amount: 1 }, action) {
  if (action.type === "inc") {
    // mutable
    state.amount = state.amount + 1;
  }
  return state;
}

console.log(store.getState());
store.dispatch({ type: "inc" });
console.log(store.getState());

// global state
store.subscribe(() => {
  console.log(store.getState());
});

setInterval(() => {
  store.dispatch({ type: "inc" });
}, 3000);

     */

/*
const store = createStore(reducer);
const history = [];
function reducer(state = { amount: 1 }, action) {
  if (action.type === "inc") {
    // mutable
    // state.amount = state.amount + 1;
    // immutable
    return { amount: state.amount + 1 };
  }
  return state;
}

console.log(store.getState());
store.dispatch({ type: "inc" });
console.log(store.getState());

// global state
store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

setInterval(() => {
  store.dispatch({ type: "inc" });
}, 3000);


*/

const store = createStore(reducer, applyMiddleware(logger.default));
const history = [];
function reducer(state = { amount: 1 }, action) {
  if (action.type === "inc") {
    // mutable
    // state.amount = state.amount + 1;
    // immutable
    return { amount: state.amount + 1 };
  }
  return state;
}

/* no need of global state logger will take care.
// global state
store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});
*/

setInterval(() => {
  store.dispatch({ type: "inc" });
}, 3000);
