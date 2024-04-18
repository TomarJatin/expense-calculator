import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import dataReducer from './slices';

const store = configureStore({
  reducer: {
    // Add your reducers here
    counter: counterReducer,
    data: dataReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;