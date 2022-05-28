import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
export const fetchPizzasData = createAsyncThunk(
    'pizzas/fetchPizzasData',
    async ({ category, sortName }) => {
        const response = await fetch(
            'https://react-pizza-app-dd625-default-rtdb.firebaseio.com/data.json'
        );
        const data = await response.json();
        const pizzas= category === null ? data.pizzas : data.pizzas.filter((item) => item.category === category)
        if(sortName==='popular') return pizzas.sort((a, b) => b.rating - a.rating);
        if(sortName==='cost') return pizzas.sort((a, b) => a.price - b.price);
    }
);
export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState: {
        sort: {
            category: null,
            sortName: 'popular',
        },
        status: 'idle',
        data: [],
    },
    reducers: {
        changeCategory: (state, action) => {
            state.sort.category = action.payload;
        },
        changeSortName: (state, action) => {
            state.sort.sortName = action.payload;
        },
    },

    extraReducers: {
        [fetchPizzasData.pending]: (state) => {
            state.status = 'pending';
        },
        [fetchPizzasData.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.data = action.payload;
        },
        [fetchPizzasData.rejected]: (state) => {
            state.status = 'rejected';
        },
    },
});
export default pizzasSlice.reducer;
export const { changeCategory,changeSortName } = pizzasSlice.actions;
export const selectStatus = (state) => state.pizzas.status;
export const selectData = (state) => state.pizzas.data;
export const selectCategory = (state) => state.pizzas.sort.category;
export const selectSortName = (state) => state.pizzas.sort.sortName;
