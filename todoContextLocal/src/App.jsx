import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts';
import './App.css'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]);
    // in this callback, we get access to previous value of state
    // ... is a spread operator
    // ...todo enlists the individual properties of todo object which will be injected into the new object
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id)? todo:prevTodo));
    // not wanting to return anything so avoid using {}
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id)? {...prevTodo, completed: !prevTodo.completed}:prevTodo));
    // overwrite the object key value
  }

  // note that todo is an object
  // while accessing the value of any variable/data structure
  // we use its name as key to get

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    // we will get array of todos from browser storage 
    // we parse it from string
    if(todos && todos.length>0){
      // do we have value named todos and if we have some length of it
      setTodos(todos);
    }
  }, []);
  // not for server side rendering, thus we can use local storage

  // we use multiple useEffects for optimization
  // we could do it with one but then we will have to get the string from local storage everytime and re render it
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // whenever todos change

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {todos.map((todo) => (
                    <div key={todo.id}
                    className='w-full'
                    >
                      <TodoItem todo={todo} />
                    </div>
                  ))}
                  {/* using parenthesis to auto return */}
                  {/* keys used to identify each div uniquely */}
                  {/* if keys not used then we might get warning but performance is degraded */}
                  {/* we can even use indexes for keys but it must be avoided */}
                  {/* order of keys changed if deletion happens at an middle index */}
                  {/* so preferrable to use original ids uniqueness */}
              </div>
          </div>
      </div>
    </TodoProvider>
  );
}

export default App