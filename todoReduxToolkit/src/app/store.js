import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer,
});
// introduce reducers. store doesn't get updated by anything but reducers mentioned