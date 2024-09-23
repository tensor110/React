import { createStore } from "redux";

const reduceFn = (state = {counter: 0}, action) =>{
 return state
};

const store = createStore(reduceFn)

export default store;