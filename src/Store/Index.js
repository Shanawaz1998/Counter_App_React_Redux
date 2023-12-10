import { createStore } from "redux";

const INITIAL_STATE = {
  counter: 11,
  privacy: false,
};

const counterReducer = (store = INITIAL_STATE, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    return { ...store, counter: store.counter + Number(action.payload) }; //Number is used to convert string to number
  } else if (action.type === "SUBSTRACTION") {
    return { ...store, counter: store.counter - Number(action.payload) };
  } else if (action.type === "TOGGLE") {
    return { ...store, privacy: !store.privacy };
  }
  return store;
};

const counterStore = createStore(counterReducer);

export default counterStore;
