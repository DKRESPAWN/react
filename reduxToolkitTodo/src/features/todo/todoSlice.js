import { createSlice, nanoid } from "@reduxjs/toolkit"; //nanoid generates unique ids

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello WOrld",
    },
  ],
};

export const todoSlice = createSlice({
  // slice is like a bigger reducer
  //createSlice mostly takes an object
  name: "todo",
  initialState, //every slice has an initial state
  reducers: {
    //reducers have props and functions
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    }, //state gives the access of initial state, actions
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // updateTodo: (state, action) => {
    //   state.todos = state.todos.map((prev) =>
    //     prev.map((prevTodo) =>
    //       prevTodo.id === action.payload.id ? action.payload.text : prevTodo
    //     )
    //   );
    // },
  },
});

//exporting individual functionalities as they will be of use in components
export const { addTodo, removeTodo } = todoSlice.actions;

//store mein jo jo reducers register honge sirf unse hi value lekar update karega
//so the store wants the list of all the reducers
export default todoSlice.reducer;
