import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  //how to use useDispatch
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    //useDispatch makes changes in the store using reducers
    dispatch(addTodo(input)); // what function function do we use here? That is why we exported the functionalities inside the reducer individually to use them in the components
    setInput(""); //to clean the form
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
