import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {Todo} from "../../types/todo";

interface UpdatedTodo {
  id: string;
  todoValue: string;
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<UpdatedTodo>) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, value: action.payload.todoValue};
        }

        return todo;
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          return {...todo, isChecked: !todo.isChecked};
        }

        return todo;
      });
    }
  },
})

export const {updateTodo, toggleTodo, removeTodo, addTodo} = todosSlice.actions

export default todosSlice.reducer