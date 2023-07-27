import {configureStore} from '@reduxjs/toolkit'
import todosReducer from './slices/todosSlice';
import {persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "@reduxjs/toolkit";

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  todos: todosReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
