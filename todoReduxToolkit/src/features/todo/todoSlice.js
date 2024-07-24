import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello World"}],
}
// define initial state for store

// reducer is a functionality
// Slice is like a combined version of reducers

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id!==action.payload);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {return (todo.id===action.payload.id)?{...todo, text: action.payload.text}:todo;});
        },
    }
    // reducers will have properties and functions
    // unlike context, we here actually define and declare functions.
    // payload is an object, it will have value we need for method
});

export const {addTodo, removeTodo} = todoSlice.actions;
// will be used in components, or for individual usage

export default todoSlice.reducer;
// list of reducers exported which are to be imported by store to know that only these could update it.