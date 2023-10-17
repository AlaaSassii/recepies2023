import { configureStore } from '@reduxjs/toolkit';
import recepiesReducer from './searchRecepielByNameSlice'
const store = configureStore({
    reducer: {
        recepies: recepiesReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
