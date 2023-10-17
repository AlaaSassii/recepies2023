import { configureStore } from '@reduxjs/toolkit';
import recepiesReducer from './recepiesByNameSlice'
import randomRecepieReducer from './randomRecepieSlice';
import cuisineReducer from './cuisineSlice';

const store = configureStore({
    reducer: {
        recepiesName: recepiesReducer,
        randomRecepies: randomRecepieReducer,
        cuisine: cuisineReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
