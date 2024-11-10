import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]); //state mein saare todos hain

  //addTodo mein jo todo aega vo state mein se NAHI aega.. vo form se aega
  //the todo which will be given to addTodo should be appended in the state wala todos
  const addTodo = (todo) => {
    // setTodos(todo) --> by this all the previous values in todos will be erased and replaced by this todo
    //so we will need the previous value of the state, ek callback function lenge
    //setTodos((prev) => [todo, ...prev]); //prev means old value of the state and ...prev means humne spread kardi saari values
    //but we cannot give todo directly in the new array because it is an object
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    //state se todos uthaenge aur search karenge konsa todo change karna hai id ke hisab se
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
    //we took the prev state and got the array, then we used map... here prevTodo is a single todo inside todos
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")); //JSON.parse gives js directly
    if (todos && todos.length > 0) {
      setTodos(todos);
    } //checking for length because todos is an array of objects
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
