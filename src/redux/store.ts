import { configureStore } from '@reduxjs/toolkit';
import recepiesReducer from './searchRecepielByNameSlice'
import randomRecepieReducer from './randomRecepieSlice';
import cuisineReducer from './cuisineSlice';

const store = configureStore({
    reducer: {
        recepies: recepiesReducer,
        randomRecepies: randomRecepieReducer,
        cuisine: cuisineReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
