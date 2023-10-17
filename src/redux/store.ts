import { configureStore } from '@reduxjs/toolkit';
import recepiesReducer from './searchRecepielByNameSlice'
import randomRecepieReducer from './randomRecepieSlice';
const store = configureStore({
    reducer: {
        recepies: recepiesReducer,
        randomRecepies: randomRecepieReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
