import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from "@reduxjs/toolkit";
import {persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import todosReducer from './slices/todosSlice';

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
