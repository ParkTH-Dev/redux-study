// redux toolkit
import { configureStore, createAction } from "@reduxjs/toolkit";
// import { createStore } from "redux";

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const store = configureStore({ reducer });

export default store;

// normal redux
// import { createStore } from "redux";

// const ADD = "ADD";
// const DELETE = "DELETE";

// export const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };
// export const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id,
//   };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD:
//       return [{ text: action.text, id: Date.now() }, ...state];
//     case DELETE:
//       return state.filter((todo) => todo.id !== action.id);
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// export default store;
