import { configureStore } from '@reduxjs/toolkit';
import recepiesReducer from './recepiesByNameSlice'
import randomRecepieReducer from './randomRecepieSlice';
import cuisineReducer from './cuisineSlice';
import recepiesCategoryReducer from './recepiesByCategoriesSlice'
import recepiesCategoryAreaReducer from './recepiesByAreaSlice'
import recepiesIngredientReducer from './recepiesByIngredientsSlice'
const store = configureStore({
    reducer: {
        recepiesName: recepiesReducer,
        recepiesByCategory: recepiesCategoryReducer,
        recepiesByArea: recepiesCategoryAreaReducer,
        recepiesByIngredient: recepiesIngredientReducer,
        randomRecepies: randomRecepieReducer,
        cuisine: cuisineReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
