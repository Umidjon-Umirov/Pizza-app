import { createSlice } from '@reduxjs/toolkit';

export const chartSlice = createSlice({
    name: 'chart',
    initialState: {
        data: {},
        
    },
    reducers: {
        addToChart: (state, action) => {
            const { id, price } = action.payload;
            state.pizzasCost += price;
            state.pizzasCount += 1;
            if (!state.data.hasOwnProperty(id)) {
                state.data[id] = [];
                state.data[id].push(action.payload);
            } else {
                state.data[id].push(action.payload);
            }
        },
        cleanAllChart: (state) => {
            state.data = {};
           
        },
        plusToChart: (state, action) => {
            const id = action.payload;
            state.data[id].push(state.data[id][0]);
        },
        minusFromChart: (state, action) => {
            const id = action.payload;
            if (state.data[id].length > 1) {
                state.data[id].length = state.data[id].length - 1;
            }
        },
        removePizza:(state,action)=>{
            const id=action.payload
            delete state.data[id]
        }
    },
});
export const { addToChart, cleanAllChart, plusToChart, minusFromChart,removePizza } =
    chartSlice.actions;
export const selectCost = (state) => {
    let cost=0;
    Object.values(state.chart.data).forEach(item=>cost += item.length*item[0].price)
    return cost
}
export const selectCount = (state) => {
    let count=0;
    Object.values(state.chart.data).forEach(item=>count += item.length)
    return count
};
export const selectData = (state) => state.chart.data;
export default chartSlice.reducer;
